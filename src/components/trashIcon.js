import { Icon } from '@rneui/themed';

const TrashIcon = ({ handlePress }) => {
    return (
        <Icon
            name='trash-can-outline'
            type="material-community"
            iconColor={'#000000'}
            size={25}
            onPress={handlePress} />
    )
}

export default TrashIcon;
