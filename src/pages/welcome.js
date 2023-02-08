import { StyleSheet, Text, View } from 'react-native';
import { StrictMode } from 'react';
import { Provider } from 'react-redux';
import store from '../app/store';

export default function Welcome( { navigation } ) {
    return(
        <StrictMode>
            <Provider store={store}>
                <View>
                    <Text>welcome yall</Text>


                </View>
            </Provider>
        </StrictMode>
    )
}