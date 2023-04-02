import renderer from 'react-test-renderer';
import { fireEvent, render, screen } from '@testing-library/react-native';
import PrettyButton from '../prettyButton';

describe('prettyButton', () => {

    test('renders correctly without parameters', () => {
        const tree = renderer.create(<PrettyButton />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('renders correctly with a title', () => {
        const tree = renderer.create(<PrettyButton title='Title' />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('renders correctly with a title and icons', () => {
        const tree = renderer.create(<PrettyButton
            title='Title'
            iconLeft="pulse"
            iconRight="play"
        />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('clicking the PrettyButton should call the function parameter', () => {

        // Setup
        const testFunction = jest.fn();
        render(<PrettyButton onPress={testFunction} title='Title' />);

        // Simulate user action
        fireEvent.press(screen.getByText('Title'));

        // Expect
        expect(testFunction.mock.calls).toHaveLength(1);
    });
});
