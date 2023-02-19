const config = {
    preset: "react-native",
    transformIgnorePatterns: [
        '/node_modules/(?!(react-native|@react-native|expo-status-bar|@react-navigation)/)'
    ],
    setupFiles: ['./setupTest.js']
}

module.exports = config;
