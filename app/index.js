/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Router, Scene, Modal } from 'react-native-router-flux';
import PoopMap from './components/PoopMap';
import SignUp from './screens/SignUp';
import Home from './screens/Home';
import TabIcon from './components/Tab';
import LogPoop from './screens/LogPoop';


export default class App extends Component {
    constructor(){
        super();
        this.state={
            loading: true,
        };
    }

    render() {
        return (
            <Router>
                <Scene key="root">
                    <Scene
                        key="tab"
                        tabBarPosition='bottom'
                        tabs
                        tabBarStyle={{backgroundColor: '#ffffff'}}
                        hideNavBar
                        showLabel={false}
                    >
                        <Scene
                            key="homescreen"
                            title="Home"
                            icon={TabIcon}
                            iconName="home"
                            initial
                        >
                            <Scene
                                key="home"
                                component={Home}
                                title="Sh*t With Friends"
                                initial
                            />
                        </Scene>

                        <Scene
                            key="mapscreen"
                            title="Map"
                            icon={TabIcon}
                            iconName="map-o"
                        >
                            <Scene
                                key="poopmap"
                                component={PoopMap}
                                title="Poop Map"

                                initial
                            />

                        </Scene>

                    </Scene>
                    <Scene
                        key="logpoop"
                        component={LogPoop}
                        direction="vertical"
                        modal
                        // hideNavBar={true}
                    />


                    <Scene
                        key="signup"
                        component={SignUp}
                        title="Sign Up"
                        modal
                    />
                </Scene>
            </Router>
        )
    }
};