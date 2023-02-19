const config = {
    preset: "react-native",
    // transform: {},
    transformIgnorePatterns: [
        '/node_modules/(?!(react-native|@react-native|expo-status-bar|@react-navigation)/)'
    ]
}

module.exports = config;
