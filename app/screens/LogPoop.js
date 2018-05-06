import React from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Colors from '../config/styles'

const SignUp = () => {
    return (
        <View style={styles.container}>
            <Text
                onPress={() => Actions.pop()}>
                Close
            </Text>
            <Text>
                Log Your Poop!
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.background
    },
});

export default SignUp;