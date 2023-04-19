import { Icon } from '@rneui/themed';
import { StyleSheet, View } from 'react-native';

const ProgressBar = (props) => {
    return (
        <View style={styles.progress}>
            <View style={styles.progressBlock}>
                <Icon size={30}
                    name="card"
                    type="material-community"
                    color={(props.check > 0) ? '#17B5AD' : '#696969'} />
            </View>
            <View style={styles.progressBlock}>
                <Icon size={30}
                    name="card"
                    type="material-community"
                    color={(props.check > 1) ? '#17B5AD' : '#696969'} />
            </View>
            <View style={styles.progressBlock}>
                <Icon size={30}
                    name="card"
                    type="material-community"
                    color={(props.check > 2) ? '#17B5AD' : '#696969'} />
            </View>
            <View style={styles.progressBlock}>
                <Icon size={30}
                    name="card"
                    type="material-community"
                    color={(props.check > 3) ? '#17B5AD' : '#696969'} />
            </View>
            <View style={styles.progressBlock}>
                <Icon size={30}
                    name="card"
                    type="material-community"
                    color={(props.check > 4) ? '#17B5AD' : '#696969'} />
            </View>
            <View style={styles.progressBlock}>
                <Icon size={30}
                    name="card"
                    type="material-community"
                    color={(props.check > 5) ? '#17B5AD' : '#696969'} />
            </View>
            <View style={styles.progressBlock}>
                <Icon size={30}
                    name="card"
                    type="material-community"
                    color={(props.check > 6) ? '#17B5AD' : '#696969'} />
            </View>
            <View style={styles.progressBlock}>
                <Icon size={30}
                    name="card"
                    type="material-community"
                    color={(props.check > 7) ? '#17B5AD' : '#696969'} />
            </View>
        </View>
    )
}

export default ProgressBar;

const styles = StyleSheet.create ({
    progress: {
        position: 'absolute',
        flexDirection: 'row',
        alignSelf: 'center',
        top: '85%',
        marginBottom: 20
    },
    progressBlock: {
        marginLeft: '2%',
        marginRight: '2%',
    },
})