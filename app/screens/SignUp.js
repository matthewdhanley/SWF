import React from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import { Actions } from 'react-native-router-flux';

const SignUp = () => {
    return (
        <View style={styles.container}>
            <Text
            onPress={() => Actions.pop()}>
                Close
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#565656'
    },
});

export default SignUp;