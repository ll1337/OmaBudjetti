import renderer from 'react-test-renderer';
import { fireEvent, render, screen } from '@testing-library/react-native';
import PrettyDatePicker from '../prettyDatePicker';

// A describe block creates structure and makes results easier to interpret.
// Describe blocks can be nested. This can be useful for example if we have
// a component with several functions, each of which requires several tests.
describe('prettyDatePicker', () => {

    // This is a snapshot test, it checks that the component looks like
    // "it's supposed to", aka what it looked like last time
    test('renders correctly', () => {
        const tree = renderer.create(<PrettyDatePicker />).toJSON(); // We create a JSON representation
        expect(tree).toMatchSnapshot(); // And we compare it to our saved snapshot
    });

    // This is a unit test. We should simulate user-like actions
    // and make assertions (expect) things that the user would see.
    // Tests done like this bring more confidence than virtually calling functions.
    test('when calendar icon is pressed, calendar modal opens', () => {
        // Create a PrettyDatePicker object on the screen.
        render(<PrettyDatePicker />);

        // Simulate a user event.
        fireEvent.press(screen.getByLabelText('Choose Date'));

        // Find the accept button from the dialog that should've opened.
        const datepickerModalAcceptButton = screen.getByText('Hyväksy');

        // Make sure the button exists.
        expect(datepickerModalAcceptButton).toBeOnTheScreen();
    });
});
