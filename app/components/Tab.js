import React from 'react';
import {
    Text,
    View,
    StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Colors from '../config/styles';


class TabIcon extends React.Component {
    render() {
        let color = this.props.selected ? '#00f240' : '#301c2a';

        return (
            <View style={{flex:1, flexDirection:'column', alignItems:'center', alignSelf:'center', justifyContent: 'center'}}>
                <Icon style={{color: color}} name={this.props.iconName || "circle"} size={Colors.iconSize}/>
                <Text style={{color: color, fontSize: 12}}>{this.props.title}</Text>
            </View>
        );
    }
}


export default TabIcon;