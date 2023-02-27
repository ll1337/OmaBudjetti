import { StyleSheet, View, StatusBar, Text } from 'react-native';
import { Provider as StoreProvider } from 'react-redux';
import store from '../app/store';
import PrettyButton from '../components/prettyButton';
import PrettyDate from '../components/prettyDate';

export default function DateTest( { navigation } ) {
    return(
        <StoreProvider store={store}>
            <View style={styles.container}>
                <Text style={{marginBottom: 40}}>Datepicker testy </Text>

                <PrettyButton onPress={() => console.log('Button pressed')} 
                    title="Date"
                    iconLeft="pulse"
                    iconRight="play" />
                <View style={{margin: 20}}></View>
                <PrettyDate>

                </PrettyDate>

            </View>
        </StoreProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: StatusBar.currentHeight || 0,
        alignItems: 'center',
    },
});