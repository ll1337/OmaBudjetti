import React, { useState } from 'react';
import { StyleSheet, View, StatusBar, TouchableOpacity } from 'react-native';
import { IconButton, Avatar } from "react-native-paper";
import { Provider as StoreProvider } from 'react-redux';
import { Text, Icon } from '@rneui/themed';
import { LinearGradient } from 'expo-linear-gradient';
import store from '../app/store';
import PrettyButton from '../components/prettyButton';

export default function Living( { navigation } ) {
    return(
        <StoreProvider store={store}>
            <View style={styles.container}>               
                <View style={styles.rectangle}>
                    <Text style={styles.welcomeText}>Asuminen</Text>
                    <View style={styles.divider} />
                    <Text style={styles.infoText}>
                        Lisää tähän kaikki asuinkustannuksesi
                    </Text>
                    
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