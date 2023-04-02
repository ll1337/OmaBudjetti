import React, { useState } from 'react';
import { StyleSheet, View, StatusBar, TextInput } from 'react-native';
import { Text, IconButton } from "react-native-paper";
import { Provider as StoreProvider } from 'react-redux';
import store from '../app/store';
import { useDispatch } from 'react-redux';
import PrettyButton from '../components/prettyButton';
import PrettyNavigationButton from '../components/prettyNavigationButton';
import BottomNavBar from '../components/bottomNavBar';


export default function Year( { navigation } ) {
    return(
        <StoreProvider store={store}></StoreProvider>
    );
}