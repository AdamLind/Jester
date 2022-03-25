import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SectionList,
  SafeAreaView,
  Image,
  FlatList,
  Pressable
} from 'react-native';
import HOMIES from '../../assets/homies';

const HorizontalListItem = ({ item }) => {
  return (
    <Pressable onPress={() => console.warn('Open chat: ', item.name)} style={styles.homies} >
      <Image
        source={{
          uri: item.uri,
        }}
        style={styles.homieItemPhoto}
        resizeMode="cover"
      />
      <Text style={styles.newHomiesName}>{item.name}</Text>
    </Pressable>
  );
};

const VerticalListItem = ({ item }) => {
    return (
      <Pressable onPress={() => console.warn('Open chat: ', item.name)} style={styles.conversations}>
        <Image
          source={{
            uri: item.uri,
          }}
          style={styles.conversationItemPhoto}
          resizeMode="cover"
        />
        <View style={styles.conversationTextContainer} >
            <Text style={styles.conversationName} >{item.name}</Text>
            <Text style={styles.conversationText} >{item.text}</Text>
        </View>
      </Pressable>
    );
  };

export default ChatList = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView style={{ flex: 1 }}>
        <SectionList
          contentContainerStyle={{ paddingHorizontal: 0 }}
          stickySectionHeadersEnabled={false}
          sections={HOMIES}
          showsVerticalScrollIndicator={false}
          renderSectionHeader={({ section }) => (
            <>
              <Text style={styles.sectionHeader}>{section.title}</Text>
              {section.horizontal ? (
                <FlatList
                  horizontal
                  contentContainerStyle={{paddingLeft: 10}}
                  data={section.data}
                  renderItem={({ item }) => <HorizontalListItem item={item} />}
                  showsHorizontalScrollIndicator={false}
                />
              ) : null}
            </>
          )}
          renderItem={({ item, section }) => {
            if (section.horizontal) {
              return null;
            }
            return <VerticalListItem item={item} />;
          }}
        />
      </SafeAreaView>
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fefefe',
  },
  sectionHeader: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'black',
    marginTop: 20,
    marginBottom: 15,
    marginLeft: 15
  },
  homies: {
    paddingTop: 10,
    paddingHorizontal: 7,
  },
  homieItemPhoto: {
    width: 90,
    height: 125,
    overflow: 'hidden',
    borderRadius: 8,
  },
  newHomiesName: {
    fontWeight: 'bold',
    fontSize: 12,
    color: 'black',
    padding: 2,
    textAlign: 'center'
  },
  conversations: {
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  conversationName: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'black',
    padding: 2,
  },
  conversationText: {
    fontSize: 14,
    color: 'black',
    padding: 2,
  },
  conversationTextContainer: {
  },
  conversationItemPhoto: {
    width: 90,
    height: 90,
    overflow: 'hidden',
    borderRadius: 50,
    marginRight: 10,
  },

});