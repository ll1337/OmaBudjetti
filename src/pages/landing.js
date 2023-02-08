import { StyleSheet, View } from 'react-native';
import { Text } from "react-native-paper";
import { StrictMode } from 'react';
import { Provider as StoreProvider } from 'react-redux';
import store from '../app/store';

export default function Landing( { navigation } ) {
    return(
        <StrictMode>
            <StoreProvider store={store}>
                <View>
                    <Text>landed</Text>


                </View>
            </StoreProvider>
        </StrictMode>
    )
}