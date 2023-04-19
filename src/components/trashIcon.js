import { Icon } from '@rneui/themed';

const TrashIcon = () => {
    return (
        <Icon
            name='trash-can-outline'
            type="material-community"
            iconColor={'#000000'}
            size={25}
            onPress={() => console.log('Pressed delete')} />
    )
}

export default TrashIcon;