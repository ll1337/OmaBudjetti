import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Avatar } from "react-native-paper";

const PrettyButton = (props) => {

    return (
        <View style={styles.container}>
            <LinearGradient
                colors={['rgba(23, 181, 173, 0.81)', 'rgba(77, 182, 241, 0.85)']}
                style={styles.gradient}
            /> 
            <TouchableOpacity {...props} style={props.disabled ? styles.disabled : styles.button}>   
                <Avatar.Icon size={50} color='#000000' icon={props.iconLeft} style={styles.buttonIcon}/>
                <Text style={styles.buttonText}>{props.title}</Text>
                <Avatar.Icon size={50} color='#000000' icon={props.iconRight} style={styles.buttonIcon}/>
            {/*  */}
            </TouchableOpacity>

        </View>
    );
};

export default PrettyButton;

const styles = StyleSheet.create({
    container: {
        borderRadius: 60, 
        overflow: 'hidden',         
        marginLeft: 30,
        marginRight: 30,
        shadowColor: 'rgba(0, 0, 0, 0.3)',
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
        justifyContent: 'center',
        overFlow: 'hidden',
        
    },
    disabled: {
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
        opacity: 0.1
        
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
        fontSize: 16,
    },
});