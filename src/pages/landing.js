import { StyleSheet, View, Linking, Image } from 'react-native';
import { Text, Button, Icon } from "react-native-paper";
import { Provider as StoreProvider } from 'react-redux';
import store from '../app/store';

export default function Landing( { navigation } ) {
    return(
        <StoreProvider store={store}>
            <View Style={{flex: 1, alignItems: 'center',
                        position: 'absolute',
                        left: '12.22%',
                        right: '12.22%',
                        top: '19.38%',
                        bottom: '75.31%'}}>
                <Text Style={{flex: 1, fontSize: 50}}>Eva - OmaBudjetti</Text>
            </View>

            <View Style={{flex: 1, alignItems: 'center',
                        position: 'absolute',
                        left: '14.44%',
                        right: '14.44%',
                        top: '24.53%',
                        bottom: '71.88%'}}>
                    <Text numberOfLines={1} Style={{flex: 1, color: '#000000'}}>taloudenhallinta taskussasi!</Text>
            </View>

            <View Style={{flex: 1, alignItems: 'center',
                        position: 'absolute',
                        left: '20.56%',
                        right: '20.83%',
                        top: '33.12%',
                        bottom: '32.97%'}}>
                    <Image icon={require('Icon_budgetpig_2.png')}></Image>
            </View>

            <View Style={{flex: 1, alignItems: 'center',
                        position: 'absolute',
                        left: '31.67%',
                        right: '31.67%',
                        top: '78.28%',
                        bottom: '16.09%'}}>
                    <Button mode='outlined' title='Aloitetaan!' onPress={() => navigation.navigate('welcome.js')}></Button>
            </View>
        </StoreProvider>
    )
}