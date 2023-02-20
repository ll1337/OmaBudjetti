import * as React from 'react';
import { StyleSheet, View, Linking} from 'react-native';
import { Text, Checkbox, Button } from "react-native-paper";
import { Provider  as StoreProvider } from 'react-redux';
import store from '../app/store';

export default function Welcome( { navigation } ) {
    const [checked, setChecked] = React.useState(false);

    return(
        <StoreProvider store={store}>
            <View style={styles.container}>
                <View style={styles.welcomeView}>
                    <Text style={styles.welcomeText}>Tervetuloa</Text>
                </View>

                <View style={styles.headerView}>
                    <Text numberOfLines={1} style={styles.headerText}>Eva - OmaBudjettiin</Text>
                </View>

                <View style={styles.textView}>

                    <Text style={styles.textText}>
                    • Tämän sovelluksen tarkoituksena on auttaa sinua saamaan taloutesi hallintaansi
                    luomalla oman elämäsi todellinen budjetti {"\n"}
                    </Text>

                    <Text style={styles.textText}>
                    • Ensimmäisellä kerralla, kun asetat budjettisi, sovellus ohjaa sinua vaihe vaiheelta
                    eteenpäin {"\n"}
                    </Text>

                    <Text style={styles.textText}>
                    • Kun olet asettanut budjettisi, näet vuosi- sekä kuukausibudjettisi ja voit myös
                    muokata olemassa olevaa budjettia helposti
                    </Text>

                </View>

                <View style={styles.checkbox}>
                    <Checkbox 
                        color='#17B5AD'
                        uncheckedColor='#17B5AD'
                        status={checked ? 'checked' : 'unchecked'}
                        onPress={() => {
                            setChecked(!checked);
                        }}
                    />

                </View>
                <View style={styles.linkView}>
                    <Text style={styles.linkText}
                        onPress={() => Linking.openURL('http://google.com')}>
                        Olen lukenut ja hyväksynyt käyttöehdot
                    </Text>
                </View>

                <View style={styles.button}>
                    <Button
                        disabled={!checked}
                        mode="outlined"
                        buttonColor='#F8F9F9'
                        textColor='#000000'
                        onPress={() => Linking.openURL('http://google.com')}
                        >
                    Eteenpäin
                    </Button>
                </View>
            </View>
        </StoreProvider>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F8F9F9"
    },
        welcomeView: {
        flex: 1, 
        position: 'absolute',
        alignItems: 'center',
        width: 287,
        height: 65,
        left: '10%',
        top: '10%'
    },
    welcomeText: {
        flex: 1, 
        fontSize: 55,
        fontFamily: 'Roboto',
        color: '#17B5AD'
    },
    headerView: {
        flex: 1, 
        position: 'absolute',
        alignItems: 'center',
        width: 299,
        height: 45,
        left: '8%',
        top: '19%'
    },
    headerText: {
        flex: 1, 
        alignItems: 'center', 
        fontSize: 32,
        fontFamily: 'Roboto',
        color: '#17B5AD'
    },
    textView: {
        flex: 1, 
        position: 'absolute',
        alignItems: 'center',
        width: 300,
        height: 255,
        left: '8%',
        top: '28%'
    },
    textText: {
        fontSize: 16,
        fontFamily: 'Roboto',
        fontWeight: '400',
        color: "#000000",
        lineHeight: 20
    },
    checkbox: {
        flex: 1, 
        position: 'absolute',
        alignItems: 'center',
        width: 21,
        height: 21,
        left: 41,
        top: '70%',
    },
    linkView: {
        flex: 1, 
        position: 'absolute',
        alignItems: 'center',
        width: 274,
        height: 20,
        left: 62,
        top: '71%'
    },
    linkText: {
        color: '#17B5AD',
        textDecorationLine: 'underline',
        lineHeight: 20,
        fontWeight: "700"
    },
    button: {
        flex: 1, 
        position: 'absolute',
        alignItems: 'center',
        width: 124,
        height: 62,
        left: 114,
        top: '78%'
    }

})