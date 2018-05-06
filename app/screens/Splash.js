import React from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import { Actions } from 'react-native-router-flux';

const Splash = () => {
    return (
        <View style={styles.container}>
            <Text>
                SPLASH!
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: {colors.background}
    },
});

export default Splash;