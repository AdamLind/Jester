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
        right: 10,
        height: 40,
        width: 70,
        backgroundColor: '#ffec85',
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    
    logoutButtonText: {
        fontWeight: 'bold',
        fontSize: 15,
        
    },

    profileButton: {
        left: 10,
        height: 40,
        width: 40,
        backgroundColor: '#ffec85',
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
    },

    profileButtonText: {
        fontWeight: 'bold',
        fontSize: 10,
    },
  
  });

  export default HeaderStyles;