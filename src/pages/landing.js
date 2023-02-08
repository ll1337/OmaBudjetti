import { StyleSheet, View } from 'react-native';
import { Text } from "react-native-paper";
import { Provider as StoreProvider } from 'react-redux';
import store from '../app/store';

export default function Landing( { navigation } ) {
    return(
        <StoreProvider store={store}>
            <View>
                <Text>landed</Text>


            </View>
        </StoreProvider>
    )
}