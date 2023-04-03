import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { IconButton } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';


const BottomNavBar = ( props ) => {
    const navigation = useNavigation();
    return (
        <View style={styles.bottomNavbar}>
            <View style={{alignItems: 'center'}}>
                <IconButton
                    style={{marginBottom: -5, marginTop: -2}}
                    icon="home-outline"
                    iconColor={'#fff'}
                    size={30}
                    onPress={() => navigation.navigate('Home')}
                />
                <Text style={styles.text}>Koti</Text>
            </View>
            <View style={{alignItems: 'center'}}>
                <IconButton
                    style={{marginBottom: -5, marginTop: -2}}
                    icon="calendar-month"
                    iconColor={'#fff'}
                    size={30}
                    onPress={() => navigation.navigate('Year')}
                />
                <Text style={styles.text}>Vuosi</Text>
            </View>
            <View style={{alignItems: 'center'}}>
                <IconButton
                    style={{marginBottom: -5, marginTop: -2}}
                    icon="calendar"
                    iconColor={'#fff'}
                    size={30}
                    onPress={() => console.log('Pressed item2')}
                />
                <Text style={styles.text}>kk</Text>
            </View>
            <View style={{alignItems: 'center'}}>
                <IconButton
                    style={{marginBottom: -5, marginTop: -2}}
                    icon="file-edit-outline"
                    iconColor={'#fff'}
                    size={30}
                    onPress={() => console.log('Pressed item3')}
                />
                <Text style={styles.text}>Muuta</Text>
            </View>
            <View style={{alignItems: 'center'}}>
                <IconButton
                    style={{marginBottom: -5, marginTop: -2}}
                    icon="menu"
                    iconColor={'#fff'}
                    size={30}
                    onPress={() => console.log('Pressed menu')}
                />
                <Text style={styles.text}>Menu</Text>
            </View>
        </View>
    );
};

export default BottomNavBar;

const styles = StyleSheet.create ({
    bottomNavbar: {
        positon: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        justifyContent: 'space-between',
        flexDirection: 'row',
        backgroundColor: '#17B5AD',
    },
    text: {
        marginBottom: 5,
        fontSize: 12,
        color: '#fff'
    }
})