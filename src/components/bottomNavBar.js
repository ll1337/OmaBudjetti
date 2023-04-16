import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Icon } from '@rneui/themed';

const BottomNavBar = ({ navigation }) => {
    return (
        <View style={styles.bottomNavbar}>
            <View style={{ alignItems: 'space-around', justifyContent: 'space-around' }}>
                <Icon
                    name="home"
                    color={'#fff'}
                    size={30}
                    onPress={() => navigation.navigate('Home')}
                />
                <Text style={styles.text}>Koti </Text>
            </View>
            <View style={{ alignItems: 'center' }}>
                <Icon
                    name="date-range"
                    color={'#fff'}
                    size={30}
                    onPress={() => navigation.navigate('Year')}
                />
                <Text style={styles.text}>Vuosi</Text>
            </View>
            <View style={{ alignItems: 'center' }}>
                <Icon
                    name="calendar-today"
                    color={'#fff'}
                    size={30}
                    onPress={() => console.log('Pressed item2')}
                />
                <Text style={styles.text}>kk</Text>
            </View>
            <View style={{ alignItems: 'center' }}>
                <Icon
                    name="edit"
                    color={'#fff'}
                    size={30}
                    onPress={() => console.log('Pressed item3')}
                />
                <Text style={styles.text}>Muuta</Text>
            </View>
            <View style={{ alignItems: 'center' }}>
                <Icon
                    name="menu"
                    color={'#fff'}
                    size={30}
                    onPress={() => console.log('Pressed menu')}
                />
                <Text style={styles.text}>Menu</Text>
            </View>
        </View>
    );
};

export default BottomNavBar;

const styles = StyleSheet.create({
    bottomNavbar: {
        positon: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        justifyContent: 'space-around',
        flexDirection: 'row',
        backgroundColor: '#17B5AD',
    },
    text: {
        marginBottom: 5,
        fontSize: 12,
        color: '#fff'
    }
})
