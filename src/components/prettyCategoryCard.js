import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Avatar } from "react-native-paper";

const PrettyCategoryCard = (props) => {

    return (
        <View style={styles.container}>
            <LinearGradient
                colors={['rgba(23, 181, 173, 0.81)', 'rgba(77, 182, 241, 0.85)']}
                style={styles.gradient}
            />
            <TouchableOpacity {...props} style={styles.button}>
                <Avatar.Icon size={55} color='#000000' icon={props.iconRight} style={styles.buttonIcon} />
                <Text style={styles.buttonText}>{props.title}</Text>
            </TouchableOpacity>

        </View>
    );
};

export default PrettyCategoryCard;

const styles = StyleSheet.create({
    container: {
        borderRadius: 10,
        overflow: 'hidden',
        marginVertical: 10,
        marginHorizontal: 10,
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
        borderRadius: 10,
        backgroundColor: '#F8F9F9',
        flexDirection: 'column',
        alignItems: 'center',
    },
    disabled: {
        marginTop: 2,
        marginBottom: 2,
        marginLeft: 2,
        marginRight: 2,
        borderWidth: 0,
        borderRadius: 10,
        backgroundColor: '#F8F9F9',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        overFlow: 'hidden',
        opacity: 0.1
    },
    gradient: {
        position: 'absolute',
        left: -1,
        right: -1,
        top: -1,
        bottom: -1,
        borderRadius: 10,
    },
    red: {
        position: 'absolute',
        left: -1,
        right: -1,
        top: -1,
        bottom: -1,
        backgroundColor: '#FA4848',
        borderRadius: 10,
    },
    buttonIcon: {
        backgroundColor: 'rgba(255,255,255,0)',
        color: '#000000',
    },
    buttonText: {
        textAlign: 'center',
        fontFamily: 'Roboto',
        fontSize: 18,
    },
});