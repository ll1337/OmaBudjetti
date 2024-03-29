import { StyleSheet, View, StatusBar, Image, Modal } from 'react-native';
import { Provider as StoreProvider } from 'react-redux';
import { Text } from '@rneui/themed';
import store from '../app/store';
import PrettyNavigationButton from '../components/prettyNavigationButton';
import BottomNavBar from '../components/bottomNavBar';
import ProgressBar from '../components/progressBar';
import SuccessfulNotification from '../components/successfulNotification';

export default function Break({ route, navigation }) {

    const previousScreen = route.params;

    return (
        <StoreProvider store={store}>
            <View style={styles.container}>

                <View style={styles.header}>
                    <Text style={styles.headerText}> Eva - OmaBudjetti </Text>
                </View>
                <View style={styles.rectangle}>

                    {previousScreen == "RandomExpenses" && <View>
                        <Text style={styles.topText}>Menosi on nyt lisätty...</Text>
                        <View style={styles.divider} />
                        <Image
                            style={styles.img}
                            source={require('../assets/Icon_budgetpig_3.png')}
                        />
                        <View style={styles.divider} />
                        <Text style={styles.bottomText}> ... seuraavaksi{'\n'}lisäämme tulosi!</Text>
                    </View>}

                    {previousScreen == "Home" && <View>

                        <SuccessfulNotification saved={true} />

                        <Text style={styles.topText}></Text>
                        <Image
                            style={styles.img}
                            source={require('../assets/Icon_budgetpig_3.png')}
                        />
                        <View style={styles.divider} />
                        <Text style={styles.bottomText}>Seuraavaksi lisäämme </Text>
                        <Text style={styles.bottomText}>menosi!</Text>

                    </View>}

                </View>

            </View>

            {previousScreen == "RandomExpenses" && <View style={styles.buttonView}>
                <View style={styles.buttonLeft}>
                    <PrettyNavigationButton onPress={() => navigation.navigate('RandomExpenses')}
                        title="Edellinen"
                        disabledRight
                        iconLeft="chevron-left"
                        iconRight=""
                    />
                </View>
                <View style={styles.buttonRight}>
                    <PrettyNavigationButton onPress={() => navigation.navigate('Incomes')}
                        title="Seuraava"
                        disabledLeft
                        iconRight="chevron-right" />
                </View>
            </View>}
            {previousScreen == "Home" && <View style={styles.buttonView}>
                <View style={styles.buttonLeft}>
                    <PrettyNavigationButton onPress={() => navigation.navigate('Home')}
                        title="Edellinen"
                        disabledRight
                        iconLeft="chevron-left"
                        iconRight=""
                    />
                </View>
                <View style={styles.buttonRight}>
                    <PrettyNavigationButton onPress={() => navigation.navigate('Living')}
                        title="Seuraava"
                        disabledLeft
                        iconRight="chevron-right" />
                </View>
            </View>}

            <BottomNavBar navigation={navigation}/>

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
    modalText: {
        color: '#fff',
        fontFamily: 'Roboto',
        fontSize: 25,
    },
    topText: {
        alignSelf: 'center',
        marginTop: 40,
        marginLeft: 20,
        marginRight: 20,
        color: '#000000',
        fontWeight: 'bold',
        fontFamily: 'Roboto',
        fontSize: 30,
    },
    bottomText: {
        alignSelf: 'center',
        marginTop: 1,
        marginLeft: 20,
        marginRight: 20,
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
    modalView: {
        marginTop: 255,
        margin: 50,
        backgroundColor: '#17B5AD',
        borderRadius: 20,
        padding: 15,
        alignItems: 'center',
        alignSelf: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    img: {
        width: 230,
        height: 250,
        alignSelf: 'center',
        marginTop: 25,
        marginBottom: 25
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
    buttonView: {
        alignSelf: 'center',
        position: 'absolute',
        top: '78%',
        flexDirection: 'row',

    },
    buttonLeft: {
        marginRight: 50,
        width: 175

    },
    buttonRight: {
        width: 175,
        alignContent: 'flex-end',
    },
    progress: {
        position: 'absolute',
        flexDirection: 'row',
        alignSelf: 'center',
        top: '88%'
    },
    progressBlock: {
        marginLeft: '2.25%',
        marginRight: '2.25%'
    },
    bottomNavbar: {
        position: 'absolute',
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
