import React, { useState } from 'react';
import { StyleSheet, View, StatusBar, Text, TextInput } from 'react-native';
import { Provider as StoreProvider } from 'react-redux';
import store from '../app/store';
import { useDispatch } from 'react-redux';
import BottomNavBar from '../components/bottomNavBar';
import PrettyNavigationButton from '../components/prettyNavigationButton';
import PrettySquareButton from '../components/prettySquareButton';
import PrettyCategoryCard from '../components/prettyCategoryCard';
import expenseCategories from '../constants/expenseCategories.json';
import { renameBudget, deleteBudget } from '../features/budget/budgetsSlice';
import SuccessfulNotification from '../components/successfulNotification';
import CategoryTitles from '../constants/CategoryTitles.json'
import ShortCategoryTitles from '../constants/ShortCategoryTitles.json'

// max length of the budget name (when renaming)
const MAX_LENGTH = 25;

export default function Edit( { navigation } ) {

    // Display the renaming or deleting views or not
    const [showBudgetRenaming, setShowBudgetRenaming] = useState(false);
    const [showBudgetDeletion, setShowBudgetDeletion] = useState(false);
    const [newName, setNewName] = useState('');
    // Show modal noting great success
    const [showSuccess, setShowSuccess] = useState(false);

    const dispatch = useDispatch();

    // Grab the UUID of current active budget, check if such exists.
    const activeBudget = store.getState('budgets').budgets.currentBudgetId.budgetId;
    let budgetName = "No budget selected";
    if ( activeBudget !== undefined ) {
        budgetName = store.getState('budgets').budgets.byId[activeBudget].budgetName;
    }

    const onPressHandler = () => {
        setShowBudgetRenaming(true);
    };

    const toggleShowDeletion = () => {
        setShowBudgetDeletion(prevState => !prevState);
    };

    const handleConfirmName = () => {
        dispatch(renameBudget({ budgetId: activeBudget, budgetName: newName }));
        setShowBudgetRenaming(false);
        setShowSuccess(true);
    };

    const handleDeleteBudget = () => {
        dispatch(deleteBudget(activeBudget));
        console.log(store.getState('budgets').budgets);
        setShowBudgetDeletion(false);
        navigation.navigate('Home');
    };

    return(
        <StoreProvider store={store}>
            <View style={styles.container}>    
                <View style={styles.header}>
                    <Text style={styles.headerText}>Eva - OmaBudjetti</Text>
                </View>           
                <View style={styles.rectangle}>
                    <Text style={styles.budgetNameText}>{budgetName}</Text>

                    <Text style={styles.welcomeText}>Muokkaa</Text>
                    <View style={styles.divider} />
                    { showSuccess && <SuccessfulNotification edited/>}
                    { showBudgetRenaming ? (
                        <View style={styles.nameRow}>
                            <View style={styles.inputBox}>
                                <TextInput
                                    value={newName}
                                    onChangeText={setNewName}
                                    maxLength={MAX_LENGTH}
                                    style={styles.input}
                                />
                            </View>
                            <View style={{ alignSelf: 'flex-end' }}>
                                <PrettyNavigationButton
                                    onPress={handleConfirmName} // let's dispatch this bad boy
                                    title="Valmis"
                                    disabledLeft
                                    disabledRight
                                    disabled={budgetName == ''} />
                            </View>
                        </View>
                    ) : (
                        <View style={styles.nameRow}>
                            <Text style={styles.budgetToEdit}>{budgetName}</Text>
                            <PrettySquareButton 
                                    title="Muuta nimeä"
                                    iconRight="file-edit-outline"
                                    disabled={showBudgetDeletion}
                                    onPress={onPressHandler}
                            />
                        </View>
                    )}

                    { showBudgetDeletion ? ( 
                        <View style={styles.removalContainer}>
                            <Text style={styles.removalText}>Haluatko varmasti poistaa budjetin?</Text>
                            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                                <PrettySquareButton
                                    title="EI"
                                    red
                                    onPress={toggleShowDeletion}
                                    />
                                <PrettySquareButton
                                    title="KYLLÄ"
                                    onPress={handleDeleteBudget}
                                    />
                            </View>
                        </View>
                    ) : (
                        <View style={{width: 200, marginBottom: 10}}>
                        <PrettySquareButton 
                            title="Poista budjetti"
                            red
                            iconRight="trash-can-outline"
                            disabled={showBudgetRenaming}
                            onPress={toggleShowDeletion}
                        />
                        </View>
                    )}

                    <View style={styles.divider} />
                    <Text style={styles.subtitle} >Menot</Text>
                    <View style={styles.expenseCards}>
                        <PrettyCategoryCard title={ShortCategoryTitles.ASUMINEN} iconRight="home-outline" 
                        onPress={() => navigation.navigate('EditEvent', {type: true, category: expenseCategories.ASUMINEN, title: CategoryTitles.ASUMINEN})}/>
                        <PrettyCategoryCard title={ShortCategoryTitles.KULKEMINEN} iconRight="truck-outline" 
                        onPress={() => navigation.navigate('EditEvent', {type: true, category: expenseCategories.KULKEMINEN, title: CategoryTitles.KULKEMINEN})}/>
                        <PrettyCategoryCard title={ShortCategoryTitles.LAINAT} iconRight="credit-card-outline" 
                        onPress={() => navigation.navigate('EditEvent', {type: true, category: expenseCategories.LAINAT, title: CategoryTitles.LAINAT})}/>
                        <PrettyCategoryCard title={ShortCategoryTitles.TERVEYS} iconRight="hospital-box-outline" 
                        onPress={() => navigation.navigate('EditEvent', {type: true, category: expenseCategories.TERVEYS, title: CategoryTitles.TERVEYS})}/>
                        <PrettyCategoryCard title={ShortCategoryTitles.VAKUUTUKSET} iconRight="file-document-outline" 
                        onPress={() => navigation.navigate('EditEvent', {type: true, category: expenseCategories.VAKUUTUKSET, title: CategoryTitles.VAKUUTUKSET})}/>
                        <PrettyCategoryCard title={ShortCategoryTitles.TOISTUVAT} iconRight="package-variant" 
                        onPress={() => navigation.navigate('EditEvent', {type: true, category: expenseCategories.TOISTUVAT, title: CategoryTitles.TOISTUVAT})}/>
                        <PrettyCategoryCard title={ShortCategoryTitles.SATUNNAISET} iconRight="gift-outline" 
                        onPress={() => navigation.navigate('EditEvent', {type: true, category: expenseCategories.SATUNNAISET, title: CategoryTitles.SATUNNAISET})}/>
                    </View>
                    
                    <View style={styles.divider}/>
                    <Text style={styles.subtitle} >Tulot</Text>

                    <View style={styles.expenseCards}>
                        <PrettyCategoryCard title={ShortCategoryTitles.TULOT} iconRight="currency-usd"
                        onPress={() => navigation.navigate('EditEvent', {type: false, category: "tulot", title: CategoryTitles.TULOT})}/>
                    </View>
                </View>
            </View>
            <BottomNavBar/>
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
        marginTop: 10,
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
    budgetNameText: {
        alignSelf: 'center',
        color: '#17B5AD',
        fontSize: 15,
        marginTop: 5,
    },
    nameRow: {
        flexDirection: 'row', 
        marginTop: 10, 
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    budgetToEdit: {
        marginTop: 10,
        marginLeft: 30,
        fontSize: 15,
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
        width: 180,
    },
    input: {
        flex: 1,
    },
    removalContainer: {
        flexDirection: 'column',
    },
    removalText: {
        marginLeft: 30,
        marginBottom: 10,
        fontWeight: 'bold',
    },
    subtitle: {
        fontSize: 22,
        fontWeight: 'bold',
        marginLeft: 30,
        marginTop: 5,
        marginBottom: 3,
    },
    expenseCards: {
        flexDirection: 'row',
        alignContent: 'flex-start',
        flexWrap: 'wrap',
        marginLeft: 25,
        marginRight: 25,
        marginBottom: 5,
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