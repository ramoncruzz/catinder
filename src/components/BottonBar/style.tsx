import {  StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: { 
        flexDirection: 'row',
        marginBottom: 90,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        height: 44 ,
        backgroundColor : 'white',
        width: 156,
        borderRadius: 36,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,

        elevation: 10, 
    },
    tabbar: { flex: 1, backgroundColor: 'transparent', margin: 5, alignItems: 'center'},
    text: {
        fontSize: 25,
        fontWeight: 'bold',
    }
});
export default styles;
