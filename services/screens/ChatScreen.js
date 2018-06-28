import React from "react";
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';

export default class ChatScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Chat!</Text>
            </View>
        );
    }
}