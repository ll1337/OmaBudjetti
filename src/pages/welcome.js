import * as React from 'react';
import { StyleSheet, View, Linking} from 'react-native';
import { Text, Checkbox, Button } from "react-native-paper";
import { Provider  as StoreProvider } from 'react-redux';
import store from '../app/store';

export default function Welcome( { navigation } ) {
    const [checked, setChecked] = React.useState(false);

    return(
        <StoreProvider store={store}>
            <View style={{flex: 1, alignItems: 'center',
                          position: 'absolute',
                          width: 287,
                          height: 55,
                          left: 36,
                          top: 64}}>
                <Text style={{flex: 1, fontSize: 50}}>Tervetuloa</Text>
            </View>
            <View style={{flex: 1, alignItems: 'center',
                          position: 'absolute',
                          width: 299,
                          height: 50,
                          left: 30,
                          top: 121}}>
                <Text numberOfLines={1} style={{flex: 1, alignItems: 'center', fontSize: 32}}>Eva - OmaBudjettiin</Text>
            </View>

            <View style={{flex: 1, alignItems: 'center',
                          position: 'absolute',
                          width: 300,
                          height: 255,
                          left: 19,
                          top: 186}}>
                <Text>
                • Tämän sovelluksen tarkoituksena on auttaa sinua saamaan taloutesi hallintaansi
                luomalla oman elämäsi todellinen budjetti {"\n"}

                </Text>

                <Text>
                • Ensimmäisellä kerralla, kun asetat budjettisi, sovellus ohjaa sinua vaihe vaiheelta
                eteenpäin {"\n"}

                </Text>

                <Text>
                • Kun olet asettanut budjettisi, näet vuosi- sekä kuukausibudjettisi ja voit myös
                muokata olemassa olevaa budjettia helposti
                </Text>
            </View>

            <View style={{flex: 1, alignItems: 'center',
                                            position: 'absolute',
                                            width: 21,
                                            height: 21,
                                            left: 41,
                                            top: 460}}>
                <Checkbox
                      status={checked ? 'checked' : 'unchecked'}
                      onPress={() => {
                        setChecked(!checked);
                      }}
                />

            </View>
            <View style={{flex: 1, alignItems: 'center',
                                           position: 'absolute',
                                           width: 264,
                                           height: 20,
                                           left: 62,
                                           top: 468}}>
                <Text style={{color: 'blue', textDecorationLine: 'underline'}}
                            onPress={() => Linking.openURL('http://google.com')}>Olen lukenut ja hyväksynyt käyttöehdot</Text>
            </View>

            <View style={{flex: 1, alignItems: 'center',
                                                             position: 'absolute',
                                                             width: 124,
                                                             height: 62,
                                                             left: 114,
                                                             top: 501}}>
                <Button disabled={!checked}
                    mode="outlined"
                    onPress={() => Linking.openURL('http://google.com')}
                    >
                Eteenpäin
                </Button>
            </View>

        </StoreProvider>
    )
}
