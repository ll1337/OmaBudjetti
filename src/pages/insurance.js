import React, { useState } from 'react';
import { StyleSheet, View, StatusBar, TextInput } from 'react-native';
import { IconButton, Avatar } from "react-native-paper";
import { Provider as StoreProvider } from 'react-redux';
import { Text, Dialog, Icon } from '@rneui/themed';
import { LinearGradient } from 'expo-linear-gradient';
import store from '../app/store';
import PrettyNavigationButton from '../components/prettyNavigationButton';
import PrettyDropdownButton from '../components/prettyDropdownButton';
import PrettyDatePicker from '../components/prettyDatePicker';

export default function Insurance({ navigation }) {
    const [visible, setVisible] = useState(false);

    const [confirmedDate, setConfirmedDate] = useState(null);

    const handleDateConfirm = (date) => {
        console.log(confirmedDate);
        setConfirmedDate(date);
    };

    return (
        <StoreProvider store={store}>
            <View style={styles.container}>

                <View style={styles.header}>
                    <Text style={styles.headerText}>Eva - OmaBudjetti</Text>
                </View>

                <View style={styles.rectangle}>
                    <Text style={styles.welcomeText}>Vakuutukset</Text>
                    <View style={styles.divider} />
                    <Text style={styles.infoText}>
                        Lisää tähän kaikki vakuutusmaksusi{'\n'}
                    </Text>

                    <View>


                        <View style={styles.dropdown}>
                            <PrettyDropdownButton onPress={() => console.log('Pressed dropdown')}
                                title="Lisää kulu"
                                disabledLeft
                                iconLeft=""
                                iconRight="chevron-down"
                            />
                        </View>

                    </View>

                </View>

                <View style={styles.buttonView}>
                    <View style={styles.buttonLeft}>
                        <PrettyNavigationButton onPress={() => navigation.navigate('Health')}
                            title="Edellinen"
                            disabledRight
                            iconLeft="chevron-left"
                            iconRight=""
                        />
                    </View>
                    <View style={styles.buttonRight}>
                        <PrettyNavigationButton onPress={() => navigation.navigate('OtherExpenses')}
                            title="Seuraava"
                            disabledLeft
                            iconRight="chevron-right" />
                    </View>
                </View>

            </View>

            <View style={styles.progress}>
                <View style={styles.progressBlock}>
                    <Icon size={30}
                        name="card"
                        type="material-community"
                        color='#17B5AD' />
                </View>
                <View style={styles.progressBlock}>
                    <Icon size={30}
                        name="card"
                        type="material-community"
                        color='#17B5AD' />
                </View>
                <View style={styles.progressBlock}>
                    <Icon size={30}
                        name="card"
                        type="material-community"
                        color='#17B5AD' />
                </View>
                <View style={styles.progressBlock}>
                    <Icon size={30}
                        name="card"
                        type="material-community"
                        color='#17B5AD' />
                </View>
                <View style={styles.progressBlock}>
                    <Icon size={30}
                        name="card"
                        type="material-community"
                        color='#17B5AD' />
                </View>
                <View style={styles.progressBlock}>
                    <Icon size={30}
                        name="card"
                        type="material-community"
                        color='#696969' />
                </View>
                <View style={styles.progressBlock}>
                    <Icon size={30}
                        name="card"
                        type="material-community"
                        color='#696969' />
                </View>
                <View style={styles.progressBlock}>
                    <Icon size={30}
                        name="card"
                        type="material-community"
                        color='#696969' />
                </View>
            </View>

            <View style={styles.bottomNavbar}>
                <IconButton
                    icon="home"
                    iconColor={'#fff'}
                    size={30}
                    onPress={() => navigation.navigate('Home')
                    }
                />
                <IconButton
                    icon="image-frame"
                    iconColor={'#fff'}
                    size={30}
                    onPress={() => console.log('Pressed item1')}
                />
                <IconButton
                    icon="image-frame"
                    iconColor={'#fff'}
                    size={30}
                    onPress={() => console.log('Pressed item2')}
                />
                <IconButton
                    icon="image-frame"
                    iconColor={'#fff'}
                    size={30}
                    onPress={() => console.log('Pressed item3')}
                />
                <IconButton
                    icon="format-list-bulleted"
                    iconColor={'#fff'}
                    size={30}
                    onPress={() => console.log('Pressed menu')}
                />
            </View>

        </StoreProvider>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
        backgroundColor: '#17B5AD',
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'column',
        overflow: 'hidden',
        marginTop: StatusBar.currentHeight || 0,
    },
    header: {
        alignItems: 'center',
    },
    headerText: {
        color: '#fff',
        fontWeight: 'bold',
        fontFamily: 'Roboto',
        fontSize: 25,
    },
    welcomeText: {
        marginTop: 40,
        marginLeft: 30,
        marginRight: 0,
        color: '#000000',
        fontWeight: 'bold',
        fontFamily: 'Roboto',
        fontSize: 30,
    },
    divider: {
        marginTop: 4,
        marginLeft: 25,
        marginRight: 25,
        borderColor: 'black',
        borderBottomWidth: 1,
    },
    newText: {
        marginTop: 40,
        marginLeft: 30,
        marginRight: 0,
        color: '#000000',
        fontWeight: 'bold',
        fontFamily: 'Roboto',
        fontSize: 25,
    },
    infoText: {
        marginTop: 5,
        marginLeft: 30,
        marginRight: 0,
        color: '#000000',
        fontFamily: 'Roboto',
        fontSize: 16,
    },
    dropdown: {
        marginTop: 20,
        width: 175
    },
    listElem: {
        marginRight: 23,
    },
    listText: {
        marginTop: 15,
        marginLeft: 30,
        marginRight: 10,
        color: '#000000',
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontSize: 16,
    },
    otherText: {
        marginTop: 15,
        marginRight: 10,
        color: '#000000',
        fontFamily: 'Roboto',
        fontSize: 16,
    },
    input: {
        textAlign: 'center',
        borderWidth: 1,
        width: 60,
        opacity: 0.5,
        marginLeft: 10,
        marginRight: 10,
        borderStyle: 'dashed',
    },
    listContainer: {
        marginTop: -32,
        flexDirection: 'row-reverse',
        alignItems: 'flex-end',

    },
    buttonView: {
        position: 'absolute',
        top: '83%',
        flexDirection: 'row',

    },
    buttonLeft: {
        marginRight: 50,
        width: 175

    },
    buttonRight: {
        width: 175,
        alignContent: 'flex-end',
    },
    progress: {
        position: 'absolute',
        flexDirection: 'row',
        alignSelf: 'center',
        top: '88%'
    },
    progressBlock: {
        marginLeft: '2.25%',
        marginRight: '2.25%'
    },
    bottomNavbar: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        justifyContent: 'space-between',
        flexDirection: 'row',
        backgroundColor: '#17B5AD',
    },
    rectangle: {
        position: 'absolute',
        marginTop: 60,
        left: 0,
        right: 0,
        height: 800,
        backgroundColor: '#fff',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
});
