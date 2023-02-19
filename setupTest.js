import { jest } from '@jest/globals';

jest.mock(
    './node_modules/react-native/Libraries/Animated/NativeAnimatedHelper'
);

global.matchMedia = global.matchMedia || function() {
    return {
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
    };
};
