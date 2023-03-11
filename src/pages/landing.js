import * as React from 'react';
import { StyleSheet, View, Image} from 'react-native';
import { Text, IconButton} from "react-native-paper";
import { Provider as StoreProvider } from 'react-redux';
import { Provider as PaperProvider } from 'react-native-paper';
import store from '../app/store';
import PrettyButton from '../components/prettyButtonTextOnly';

export default function Landing( { navigation } ) {

    return(
        <StoreProvider store={store}>
            <View style={{flex: 1, alignItems: 'center',
                        position: 'absolute',
                        left: '12.22%',
                        right: '12.22%',
                        top: '18.5%',
                        bottom: '75.31%'}}>
                <Text style={styles.headerText}>Eva - OmaBudjetti</Text>
            </View>

            <View style={{flex: 1, alignItems: 'center',
                        position: 'absolute',
                        left: '14.44%',
                        right: '14.44%',
                        top: '24.53%',
                        bottom: '71.88%'}}>
                    <Text numberOfLines={1} style={styles.normalText}>taloudenhallinta taskussasi!</Text>
            </View>

            <View style={{flex: 1, alignItems: 'center',
                        position: 'absolute',
                        left: '20.56%',
                        right: '20.83%',
                        top: '33.12%',
                        bottom: '32.97%'}}>
                    <Image
                        style={styles.img}
                        source={require('../assets/Icon_budgetpig2.png')}
                    />
            </View>

            <View style={{flex: 1, alignItems: 'center',
                        justifyContent: 'center',
                        position: 'absolute',
                        left: '31.67%',
                        right: '31.67%',
                        top: '78.28%',
                        bottom: '16.09%'}}>
                    <PrettyButton mode='outlined'
                            onPress={() => navigation.navigate('Welcome')}
                            title='Aloitetaan!'
                            iconRight=''
                            iconLeft=''
                            style={styles.button}>
                    </PrettyButton>
            </View>
        </StoreProvider>
    );
}

const styles = StyleSheet.create({
    headerText: {
        fontSize: 35,
        fontWeight: 'bold',
        color: '#17B5AD'
    },
    normalText: {
        fontSize: 20,
        fontWeight: '400' 
    },
    img: {
        flex: 1,
        width: 230,
        height: 217,
    },
    button: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center',
    }
})
