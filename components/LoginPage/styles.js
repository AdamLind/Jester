import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    
    container: {
        flex: 1,
        backgroundColor: '#ffec85',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',

      },
      background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: "100%",
      },
    logo: {
        position: 'absolute',
        top: 200,
        height: 170,
        width: 170,
        resizeMode: 'contain',
    

      },
      buttonsContainer: {
        position: 'absolute',
        bottom: 100,
        width: '100%'
      }
});

export default styles;