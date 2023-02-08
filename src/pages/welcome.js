import { StyleSheet, View } from 'react-native';
import { Text } from "react-native-paper";
import { Provider  as StoreProvider } from 'react-redux';
import store from '../app/store';

export default function Welcome( { navigation } ) {
    return(
        <StoreProvider store={store}>
            <View>
                <Text>welcome yall</Text>


            </View>
        </StoreProvider>
    )
}