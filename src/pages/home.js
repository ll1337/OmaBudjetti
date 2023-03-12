import React, { useState } from 'react';
import { StyleSheet, View, StatusBar, TextInput } from 'react-native';
import { Text, IconButton } from "react-native-paper";
import { Provider as StoreProvider } from 'react-redux';
import store from '../app/store';
import PrettyButton from '../components/prettyButton';

// max length of budget name
const MAX_LENGTH = 20;

export default function Home( { navigation } ) {

    const [hasBudget, setHasBudget] = useState(false);
    const [showBudgetCreation, setShowBudgetCreation] = useState(false);

    const [budgetName, setBudgetName] = useState('');
    
    // user wants to create a budget: show components related to budget creation, hide others.
    const onPressHandler = () => {
        setShowBudgetCreation(true);
    };

    const handleTextChange = (inputText) => {
        if (inputText.length <= MAX_LENGTH) {
            setBudgetName(inputText);
        }
    };

    return(

        <StoreProvider store={store}>
            <View style={styles.container}>               
                <View style={styles.rectangle}>
                    <Text style={styles.welcomeText}>Etusivu</Text>
                    <View style={styles.divider} />

                    {!showBudgetCreation ? (
                        <View>
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
                            <PrettyButton onPress={onPressHandler} 
                            title="Siirry budjetoimaan"
                            iconLeft="pulse"
                            iconRight="play" />
                        </View>
                    ) : (
                        <View style={styles.budgetContainer}>
                            <Text style={styles.infoText}>
                                Anna budjetillesi nimi:
                            </Text>
                            <View style={styles.inputText}>
                            </View>
                                <TextInput
                                    value={budgetName}
                                    onChangeText={handleTextChange}
                                    maxLength={MAX_LENGTH}
                                />
                        </View>      
                    )}
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
    budgetContainer: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        marginTop: 100,
        color: '#000000',
        fontFamily: 'Roboto',
        fontSize: 22,
    },
    inputBox: {
        backgroundColor: '#F8F9F9',
        borderStyle: 'dashed',
        borderWidth: 2,
        borderColor: '#17B5AD',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 5,
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
