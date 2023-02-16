import { StyleSheet, View, StatusBar } from 'react-native';
import { Text, Divider } from "react-native-paper";
import { Provider as StoreProvider } from 'react-redux';
import store from '../app/store';

export default function Home( { navigation } ) {
    return(

        <StoreProvider store={store}>
            <View style={styles.container}>
                <View style={styles.rectangle}>
                    <Text style={styles.welcomeText}>Etusivu</Text>
                    <View style={styles.divider} />
                </View>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Eva - OmaBudjetti</Text>
                </View>
            </View>
        </StoreProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
        backgroundColor: '#17B5AD',
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'column',
        marginTop: StatusBar.currentHeight || 0,
    },
    header: {
        alignItems: 'center',
    },
    headerText: {
        color: '#fff',
        fontWeight: 'bold',
        fontFamily: 'Roboto',
        fontSize: 25,
    },
    welcomeText: {
        marginTop: 40,
        marginLeft: 30,
        marginRight: 0,
        color: '#000000',
        fontWeight: 'bold',
        fontFamily: 'Roboto',
        fontSize: 30,
    },
    divider: {
        marginTop: 4,
        marginLeft: 25,
        marginRight: 30,
        borderColor: 'black',
        borderBottomWidth: 2,
    },
    rectangle: {
        position: 'absolute',
        marginTop: 60,
        left: 0,
        right: 0,
        height: 800,
        backgroundColor: '#fff',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        
    },
});