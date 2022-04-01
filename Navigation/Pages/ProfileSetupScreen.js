import '@azure/core-asynciterator-polyfill'
import React, {useState, useEffect} from 'react'
import { 
    View, 
    Text,
    StyleSheet,
    SafeAreaView,
    Pressable,
    TextInput,
    Alert,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Auth, DataStore } from 'aws-amplify';
import { User } from '../../src/models'
import { useNavigation } from '@react-navigation/native';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';


const ProfileSetupScreen = () => {
    const [user, setUser] = useState(null);
    
    const [name, setName] = useState('');
    const [bio, setBio] = useState('');
    const [gender, setGender ] = useState('');
    const [lookingFor, setLookingFor ] = useState('');
    
    const navigation = useNavigation();
    
    useEffect(() => {
        const getCurrentUser = async () => {
            const user = await Auth.currentAuthenticatedUser();
            
            const dbUsers = await DataStore.query(
                User, 
                u => u.sub("contains", user.attributes.sub)
            );

            if (dbUsers.length == 0) {
                console.warn('no hits')
                return;
            }
            const dbUser = dbUsers[0];
            setUser(dbUser);
    
            setName(dbUser.name);
            setBio(dbUser.bio);
            setGender(dbUser.gender);
            setLookingFor(dbUser.lookingFor);
        };
        getCurrentUser();
    }, [])

    const isValid = () => {
        return name && bio && gender && lookingFor;
    };
    
    const save = async () => {
        
        if (!isValid()) {
            console.warn('please fill out all fields');
            return;
        }
        
        if (user) {
            const updatedUser = User.copyOf(user, updated => {
                updated.name = name;
                updated.bio = bio;
                updated.gender = gender;
                updated.lookingFor = lookingFor;
            })
            
            await DataStore.save(updatedUser);
        } else {
            const authUser = await Auth.currentAuthenticatedUser();
            
            const newUser = new User({
                sub: authUser.attributes.sub,
                name,
                bio,
                gender,
                lookingFor,
                image: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/elon.png',
            });
            
            await DataStore.save(newUser);
        }
        
        Alert.alert('Woah... the user actually saved successfully')
        navigation.navigate('MainTabNavigator', { screen: 'Homepage' })
    }
    
    
    return (
        <SafeAreaView style={styles.root}>
        <View style={styles.container}>
            <Text>Name</Text>
            <TextInput 
                style={styles.input} 
                placeholder="Name" 
                value={name} 
                onChangeText={setName}
            />

            <Text>Bio</Text>
            <TextInput 
                style={[styles.input, styles.bioInput]} 
                placeholder="Enter Bio Here..." 
                multiline
                value={bio} 
                onChangeText={setBio}
            />

            <Text>Gender</Text>
            <Picker
                selectedValue={gender}
                onValueChange={itemValue => setGender(itemValue)}>
                <Picker.Item label="Tap to select..."/>
                <Picker.Item label="Male" value="MALE"/>
                <Picker.Item label="Female" value="FEMALE"/>
                <Picker.Item label="Other" value="OTHER"/>
            </Picker>

            <Text>Looking for...</Text>
            <Picker
                selectedValue={lookingFor}
                onValueChange={itemValue => setLookingFor(itemValue)}>
                <Picker.Item label="Tap to select..."/> 
                <Picker.Item label="Male" value="MALE"/>
                <Picker.Item label="Female" value="FEMALE"/>
                <Picker.Item label="Other" value="OTHER"/>
            </Picker>

            <View style={styles.buttonsContainer}>
                <Pressable onPress={save} style={styles.button}>
                    <Text>Save</Text>
                </Pressable>


                <Pressable onPress={() => Auth.signOut()} style={[styles.button, styles.badButton]}>
                    <Text>Sign Out</Text>
                </Pressable>
            </View>
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({

    root: {
        width: '100%',
        flex: 1,
        padding: 10
    },
  
    container: {
        padding: 10
    },
    input: {
        margin: 10,
        borderBottomColor: 'lightgray',
        borderBottomWidth: 1,
        fontSize: 24,
        padding: 5,
    },
    bioInput: {
        fontSize: 15,
        textAlignVertical: 'top',
    },
    buttonsContainer: {
        justifyContent: 'space-between',
        flexDirection: 'row'
    },  
    button: {
        backgroundColor: '#fed362',
        padding: 10,
        margin: 10,
        width: 80,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        borderWidth: 2,
        borderColor: 'white'
    },
    badButton: {
        backgroundColor: 'red',
    },
  
  });

export default ProfileSetupScreen;