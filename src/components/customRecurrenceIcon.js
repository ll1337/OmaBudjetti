import { Icon } from '@rneui/themed';
import { View } from 'react-native';
import { StyleSheet } from 'react-native';

const CustomRecurrenceIcon = ({ handlePress }) => {

    return (
        <>
            <View style={styles.container}>
                <Icon
                name='alert-circle-outline'
                type="material-community"
                iconColor={'#000000'}
                size={25}
                onPress={handlePress} />
            </View>
        </>

    )
}

export default CustomRecurrenceIcon;

const styles = StyleSheet.create({
    container: {
        marginLeft: 5,
        marginRight: 5

    }
})