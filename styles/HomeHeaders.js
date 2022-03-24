import { StyleSheet } from "react-native";

const HeaderStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },

    containerText: {
        fontSize: 25,
    },
    
    logoutButton: {
        top: 2,
        right: 10,
        height: 40,
        width: 70,
        backgroundColor: '#fed362',
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 3,
        borderColor: '#ffec85',
    },
    
    logoutButtonText: {
        fontWeight: 'bold',
        fontSize: 15,
        color: '#fff',
    },

    profileButton: {
        top: 1,
        left: 20,
        height: 35,
        width: 35,
        backgroundColor: '#c9f0d6',
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
    },

    profileImageContainer: {
        height: '100%',
        width: '100%'
    },
  
  });

  export default HeaderStyles;