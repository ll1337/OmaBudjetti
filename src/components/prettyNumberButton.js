import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Avatar } from "react-native-paper";

const PrettyNumberButton = (props) => {

    return (
        <View style={styles.container}>
            <LinearGradient
                colors={['rgba(23, 181, 173, 0.81)', 'rgba(77, 182, 241, 0.85)']}
                style={styles.gradient}
            />
            <TouchableOpacity {...props} style={props.selected ? styles.selected : styles.button}>
                <Text style={styles.buttonText}> {props.title} </Text>
            </TouchableOpacity>

        </View>
    );
};

export default PrettyNumberButton;

const styles = StyleSheet.create({
    container: {
        borderRadius: 60,
        overflow: 'hidden',
        marginLeft: 5,
        marginRight: 5,
        shadowColor: 'rgba(0, 0, 0, 1)',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 1,
        shadowRadius: 4,
        elevation: 4,
    },
    button: {
        marginTop: 2,
        marginBottom: 2,
        marginLeft: 2,
        marginRight: 2,
        borderWidth: 0,
        borderRadius: 60,
        backgroundColor: '#F8F9F9',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        overFlow: 'hidden',

    },
    selected: {
        marginTop: 2,
        marginBottom: 2,
        marginLeft: 2,
        marginRight: 2,
        borderWidth: 0,
        borderRadius: 60,
        backgroundColor: '#17B5AD',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        overFlow: 'hidden',

    },
    gradient: {
        position: 'absolute',
        left: -2,
        right: -2,
        top: -2,
        bottom: -2,
        borderRadius: 60,
    },
    buttonIcon: {
        backgroundColor: 'rgba(255,255,255,0)',
        color: '#000000',
    },
    buttonText: {
        textAlign: 'center',
        fontFamily: 'Roboto',
        fontSize: 25,
    },
});
