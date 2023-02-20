import React, { useState } from 'react';
import { StyleSheet, View, StatusBar, TouchableOpacity } from 'react-native';
import { Text, IconButton, Avatar } from "react-native-paper";
import { Provider as StoreProvider } from 'react-redux';
import { LinearGradient } from 'expo-linear-gradient';
import store from '../app/store';
import PrettyButton from '../components/prettyButton';

export default function Home( { navigation } ) {

    const [hasBudget, setHasBudget] = useState(false);
    
    return(

        <StoreProvider store={store}>
            <View style={styles.container}>               
                <View style={styles.rectangle}>
                    <Text style={styles.welcomeText}>Etusivu</Text>
                    <View style={styles.divider} />

                    {hasBudget ? (
                        <View>
                            <Text style={styles.newText}>Tarve uudelle budjetille?</Text>
                            <View style={styles.divider} />    
                        </View>
                    ) : (
                        <View>
                            <Text style={styles.infoText}>
                                Aloita luomalla itsellesi budjetti.{'\n'} 
                                Voit halutessasi luoda enemmän kuin yhden budjetin.
                            </Text>
                        </View>
                    )}

                    <PrettyButton onPress={() => console.log('Button pressed')} 
                    title="Siirry budjetoimaan"
                    iconLeft="pulse"
                    iconRight="play" />
                </View>               
                <View style={styles.header}>
                    <Text style={styles.headerText}>Eva - OmaBudjetti</Text>
                </View>
            </View>
            <View style={styles.bottomNavbar}>
                <IconButton
                        icon="home"
                        iconColor={'#fff'}
                        size={30}
                        onPress={() => navigation.navigate('Home')}
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
    );
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
        textAlign: 'center',
        marginTop: 60,
        marginLeft: 30,
        marginRight: 30,
        marginBottom: 55,
        color: '#000000',
        fontFamily: 'Roboto',
        fontSize: 22,
    },
    bottomNavbar: {
        positon: 'absolute',
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