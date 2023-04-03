import renderer from 'react-test-renderer';
import { fireEvent, render, screen } from '@testing-library/react-native';
import PrettyDropdownButton from '../prettyDropdownButton';

describe('PrettyDropdownButton', () => {

    test('renders correctly without parameters', () => {
        const tree = renderer.create(<PrettyDropdownButton />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('renders correctly with a title', () => {
        const tree = renderer.create(<PrettyDropdownButton title='Title' />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('clicking should call the function parameter', () => {

        // Setup
        const testFunction = jest.fn();
        render(<PrettyDropdownButton onPress={testFunction} title='Title' />);

        // Simulate user action
        fireEvent.press(screen.getByText('Title'));

        // Expect
        expect(testFunction.mock.calls).toHaveLength(1);
    });
});
