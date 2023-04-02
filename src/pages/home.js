import React, { useState } from 'react';
import { StyleSheet, View, StatusBar, TextInput } from 'react-native';
import { Text, IconButton } from "react-native-paper";
import { Provider as StoreProvider } from 'react-redux';
import store from '../app/store';
import { useDispatch } from 'react-redux';
import PrettyButton from '../components/prettyButton';
import PrettyNavigationButton from '../components/prettyNavigationButton';
import BottomNavBar from '../components/bottomNavBar';

// max length of budget name
const MAX_LENGTH = 25;

export default function Home( { navigation } ) {

    const dispatch = useDispatch();

    const [hasBudget, setHasBudget] = useState(false);
    const [showBudgetCreation, setShowBudgetCreation] = useState(false);

    const [budgetNames, setBudgetNames] = useState([]);
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

    const handleConfirmName = () => {
        setBudgetNames([...budgetNames, budgetName]);
        setShowBudgetCreation(false);
        setHasBudget(true);
        navigation.navigate('Break', 'Home')
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
                                    <View style={{marginBottom: 30}}/>
                                    <View>
                                        {budgetNames.map((name, index) => (
                                            <View style={{marginBottom: 15}}>
                                                <PrettyButton 
                                                    key={index} 
                                                    onPress={() => console.log({name})}                                                
                                                    title={name}
                                                    iconLeft="piggy-bank-outline"
                                                    iconRight="play"
                                                    style={{marginBottom: 20}}
                                                />
                                            </View>
                                            
                                        ))}
                                    </View>
                                    <Text style={styles.newText}>Tarve uudelle budjetille?</Text>
                                    <View style={styles.divider} />    
                                    <View style={{marginBottom: 30}}/>
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
                            <Text style={styles.namingText}>
                                Anna budjetillesi nimi:
                            </Text>
                            <View style={styles.inputBox}>
                                <TextInput
                                    value={budgetName}
                                    onChangeText={handleTextChange}
                                    maxLength={MAX_LENGTH}
                                    style={styles.input}
                                />
                            </View>
                            <View style={{alignSelf: 'flex-end'}}>
                                <PrettyNavigationButton 
                                    onPress={handleConfirmName} 
                                    title="Valmis"
                                    disabledLeft
                                    disabledRight
                                    disabled={budgetName == ''} />
                            </View>                            
                        </View>      
                    )}
                    </View>   
                <View style={styles.header}>
                    <Text style={styles.headerText}>Eva - OmaBudjetti</Text>
                </View>
            </View>
            
            <BottomNavBar>
            </BottomNavBar>
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
        marginTop: 160,
        color: '#000000',
        fontFamily: 'Roboto',
        fontSize: 22,
    },
    namingText: {
        marginLeft: 30,
        marginRight: 30,
        color: '#000000',
        fontFamily: 'Roboto',
        fontSize: 18,
    },
    inputBox: {
        flexDirection: 'row',
        marginLeft: 30,
        marginRight: 30,
        backgroundColor: '#F8F9F9',
        borderStyle: 'dashed',
        borderWidth: 2,
        borderColor: '#17B5AD',
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginBottom: 5,
    },
    input: {

        flex: 1,
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
