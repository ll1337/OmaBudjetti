import { StyleSheet, View, StatusBar } from 'react-native';
import { Provider as StoreProvider } from 'react-redux';
import { Text } from '@rneui/themed';
import { LinearGradient } from 'expo-linear-gradient';
import store from '../app/store';
import PrettyNavigationButton from '../components/prettyNavigationButton';
import PrettyDropdownButton from '../components/prettyDropdownButton';
import BottomNavBar from '../components/bottomNavBar';
import ListComponent from '../components/listComponent';
import ProgressBar from '../components/progressBar';

export default function OtherExpenses({ navigation }) {

    return (
        <StoreProvider store={store}>
            <View style={styles.container}>

                <View style={styles.header}>
                    <Text style={styles.headerText}>Eva - OmaBudjetti</Text>
                </View>

                <View style={styles.rectangle}>
                    <Text style={styles.welcomeText}>Muut toistuvat kulut</Text>
                    <View style={styles.divider} />
                    <Text style={styles.infoText}>
                        Lisää tähän kaikki muut toistuvat kulusi{'\n'}
                    </Text>

                    <View>
                        <View style={styles.listElem}>
                            <Text style={styles.listText}>Päivittäistavarat</Text>
                            <ListComponent />
                        </View>
                        <View style={styles.listElem}>
                            <Text style={styles.listText}>Lemmikki</Text>
                            <ListComponent />
                        </View>
                        <View style={styles.listElem}>
                            <Text style={styles.listText}>Suoratoistot</Text>
                            <ListComponent />
                        </View>
                        <View style={styles.listElem}>
                            <Text style={styles.listText}>Harrastus</Text>
                            <ListComponent />
                        </View>
                        <View style={styles.listElem}>
                            <Text style={styles.listText}>Hupiraha</Text>
                            <ListComponent />
                        </View>
                        <View style={styles.listElem}>
                            <Text style={styles.listText}>Säästöön</Text>
                            <ListComponent />
                        </View>

                        <View style={styles.dropdown}>
                            <PrettyDropdownButton onPress={() => console.log('Pressed dropdown')}
                                title="Lisää kulu"
                                disabledLeft
                                iconLeft=""
                                iconRight="chevron-down"
                            />
                        </View>

                    </View>

                </View>

                <View style={styles.buttonView}>
                    <View style={styles.buttonLeft}>
                        <PrettyNavigationButton onPress={() => navigation.navigate('Insurance')}
                            title="Edellinen"
                            disabledRight
                            iconLeft="chevron-left"
                            iconRight=""
                        />
                    </View>
                    <View style={styles.buttonRight}>
                        <PrettyNavigationButton onPress={() => navigation.navigate('RandomExpenses')}
                            title="Seuraava"
                            disabledLeft
                            iconRight="chevron-right" />
                    </View>
                </View>

            </View>

            <ProgressBar check={6}/>

            <BottomNavBar></BottomNavBar>

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
    dropdown: {
        marginTop: 20,
        width: 175
    },
    listElem: {
        marginRight: 23,
    },
    listText: {
        marginTop: 15,
        marginLeft: 30,
        marginRight: 10,
        color: '#000000',
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontSize: 16,
    },
    buttonView: {
        position: 'absolute',
        top: '89%',
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