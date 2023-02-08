import { StyleSheet, View } from 'react-native';
import { Text } from "react-native-paper";
import { Provider as StoreProvider } from 'react-redux';
import store from '../app/store';

export default function Home( { navigation } ) {
    return(

        <StoreProvider store={store}>
            <View>
                <Text>home sweet home</Text>


            </View>
        </StoreProvider>
    )
}