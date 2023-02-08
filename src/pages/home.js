import { StyleSheet, Text, View } from 'react-native';
import { StrictMode } from 'react';
import { Provider } from 'react-redux';
import store from '../app/store';

export default function Home( { navigation } ) {
    return(
        <StrictMode>
            <Provider store={store}>
                <View>
                    <Text>home sweet home</Text>


                </View>
            </Provider>
        </StrictMode>
    )
}