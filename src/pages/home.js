import { StyleSheet, View } from 'react-native';
import { Text } from "react-native-paper";
import { StrictMode } from 'react';
import { Provider as StoreProvider } from 'react-redux';
import store from '../app/store';

export default function Home( { navigation } ) {
    return(
        <StrictMode>
            <StoreProvider store={store}>
                <View>
                    <Text>home sweet home</Text>


                </View>
            </StoreProvider>
        </StrictMode>
    )
}