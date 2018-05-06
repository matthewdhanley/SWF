import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button
} from 'react-native';
import { Actions } from 'react-native-router-flux';

const Home = () => {
    return (
        <View style={styles.container}>

            <Button
                onPress={() => Actions.signup()}
                title="Sign Up!"
            />

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

export default Home;