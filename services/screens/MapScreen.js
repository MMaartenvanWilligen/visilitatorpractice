import React from "react";
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';

//import { Geolocation } from "../Functions/index"
import NavigationMap from "../Functions/map";

export default class MapScreen extends React.Component {
    render() {
        return (
            <NavigationMap />

        );
    }
}