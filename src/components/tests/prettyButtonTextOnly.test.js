import renderer from 'react-test-renderer';
import { fireEvent, render, screen } from '@testing-library/react-native';
import PrettyButtonTextOnly from '../prettyButtonTextOnly';

describe('PrettyButtonTextOnly', () => {

    test('renders correctly', () => {
        const tree = renderer.create(<PrettyButtonTextOnly />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('renders correctly with a title', () => {
        const tree = renderer.create(<PrettyButtonTextOnly title='Title' />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('clicking the PrettyButtonTextOnly should call the function parameter', () => {

        // Setup
        const testFunction = jest.fn();
        render(<PrettyButtonTextOnly onPress={testFunction} title='Title' />);

        // Simulate user action
        fireEvent.press(screen.getByText('Title'));

        // Expect
        expect(testFunction.mock.calls).toHaveLength(1);
    });
});
