import {  StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    text: {
        fontSize: 25,
        fontWeight: 'bold',
    },
    content: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#E5E5E5',
      },
    label: {
        fontSize: 15,
      },
      card: {
        flex: 1,
        borderRadius: 4,
        borderWidth: 2,
        width: 300,
        height: 400,
        borderColor: '#E8E8E8',
        justifyContent: 'center',
        backgroundColor: 'white'
      },
});
export default styles;
