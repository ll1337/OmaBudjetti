import { Icon } from '@rneui/themed';
import { View } from 'react-native';
import { StyleSheet } from 'react-native';

const TrashIcon = ({ handlePress }) => {

    return (
        <>
            <View style={styles.container}>
                <Icon
                name='trash-can-outline'
                type="material-community"
                iconColor={'#000000'}
                size={25}
                onPress={handlePress} />
            </View>

            
        </>
    )
}

export default TrashIcon;

const styles = StyleSheet.create({
    container: {
        marginLeft: 5
    }
})