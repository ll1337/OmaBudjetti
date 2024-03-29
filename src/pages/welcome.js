import * as React from 'react';
import { StyleSheet, View, Linking} from 'react-native';
import { Text, Checkbox, Button } from "react-native-paper";
import { Provider  as StoreProvider } from 'react-redux';
import store from '../app/store';
import PrettyButton from '../components/prettyButton';

export default function Welcome( { navigation } ) {
    const [checked, setChecked] = React.useState(false);

    return(
        <StoreProvider store={store}>
            <View style={styles.container}>

                    <Text numberOfLines={1} style={styles.welcomeText}>Tervetuloa</Text>
                    <Text numberOfLines={1} style={styles.headerText}>Eva - OmaBudjettiin</Text>

                    <Text style={styles.textText}>
                    • Tämän sovelluksen tarkoituksena on auttaa sinua saamaan taloutesi hallintaansi
                    luomalla oman elämäsi todellinen budjetti
                    </Text>

                    <Text style={styles.textText}>
                    • Ensimmäisellä kerralla, kun asetat budjettisi, sovellus ohjaa sinua vaihe vaiheelta
                    eteenpäin 
                    </Text>

                    <Text style={styles.textText}>
                    • Kun olet asettanut budjettisi, näet vuosi- sekä kuukausibudjettisi ja voit myös
                    muokata olemassa olevaa budjettia helposti
                    </Text>

                    <View style={styles.checkbox}>
                        <Checkbox 
                            color='#17B5AD'
                            uncheckedColor='#17B5AD'
                            status={checked ? 'checked' : 'unchecked'}
                            onPress={() => {
                                setChecked(!checked);
                            }}
                        />

                        <Text numberOfLines={1} style={styles.linkText}
                            onPress={() => console.log('Link pressed')}>
                            Olen lukenut ja hyväksynyt käyttöehdot
                        </Text>
                    </View>
                    
                    <View style={styles.button}>
                    <PrettyButton
                        onPress={() => navigation.navigate('Home')} 
                        title="Eteenpäin"
                        disabled={!checked}
                        />

                    </View>
            </View>
        </StoreProvider>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F8F9F9",
        alignItems: 'center'
    },
    welcomeText: {
        fontWeight: 'bold',
        textAlign: 'center',
        marginLeft: '5%',
        marginRight: '5%',
        marginTop: '30%',
        fontSize: 60,
        fontFamily: 'Roboto',
        color: '#17B5AD'
    },
    headerText: {
        textAlign: 'center', 
        marginLeft: '5%',
        marginRight: '5%',
        marginTop: '-4%',
        fontSize: 34,
        fontFamily: 'Roboto',
        color: '#17B5AD'
    },
    textText: {
        textAlign: 'center',
        marginLeft: '5%',
        marginRight: '5%',
        fontSize: 16,
        marginTop: '10%',
        fontFamily: 'Roboto',
        fontWeight: '400',
        color: "#000000",
        lineHeight: 20
    },
    checkbox: {
        flexDirection: 'row',
        alignContent: 'center',
        marginTop: '10%',

    },
    linkText: {
        color: '#17B5AD',
        textDecorationLine: 'underline',
        fontWeight: "700",
        paddingTop: 7
    },
    button: {
        alignSelf: 'center',
        marginTop: '10%',
        marginLeft: '5%',
        marginRight:'5%',
    }

})
