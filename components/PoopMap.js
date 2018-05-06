// import React first
import React from 'react';

// import the other stuff from react that we are using
import {
  StyleSheet,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';


// import mapview from react-native-maps as well as marker and providerproptype
import MapView, { Marker, ProviderPropType } from 'react-native-maps';

// get info from device
const { width, height } = Dimensions.get('window');

// setup map to be fullscreen
const ASPECT_RATIO = width / height;

// todo - change to be user's current location?
const LATITUDE = 37.78825;
const LONGITUDE = -122.4324;

// how far we are zoomed in
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

// id for markers
let id = 0;



class PoopMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      region: {
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      },
      //  test markers
      markers: [{
          id: 0,
          key: 0,
          coordinate: {
            latitude: LATITUDE,
            longitude: LONGITUDE,
          }
        },
        {
          id: 0,
          key: 1,
          coordinate: {
              latitude: LATITUDE+.002,
              longitude: LONGITUDE-.007,
          },
        }],
    };
  }

  onToiletPress() {
    Alert.alert("Poop Logger", "You just took a poop!")
  }

  render() {
    return (
      <View style={styles.container}>
        <MapView
          provider={this.props.provider}
          style={styles.map}
          initialRegion={this.state.region}
        >
          {this.state.markers.map(marker => (
            <Marker
              key={marker.key}
              coordinate={marker.coordinate}
              pinColor={marker.color}
              image={require('../data/img/poop.png')}
            />
          ))}
        </MapView>
          <View
              style={styles.buttonContainer}
          >
            <TouchableOpacity
                onPress={this.onToiletPress}
                style={styles.button}>
                <Image
                    source={require('../data/img/toilet.png')}
                    style={styles.toilet}
                />
            </TouchableOpacity>
      </View>
      </View>
    );
  }
}

PoopMap.propTypes = {
  provider: ProviderPropType,
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
      flex: 1,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  bubble: {
    backgroundColor: 'rgba(255,255,255,0.7)',
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 20,
  },
  latlng: {
    width: 200,
    alignItems: 'stretch',
  },
  button: {
        borderWidth:0,
       borderColor:'rgba(0,0,0,0.2)',
       alignItems:'center',
       justifyContent:'center',
       width:70,
       height:70,
       backgroundColor:'#8b5541',
       borderRadius:100,
      zIndex: 100,
      elevation: 5,


  },
  buttonContainer: {
    width: 100,
    height: 100,
    alignSelf: 'flex-end',
    elevation: 5,
  },
    toilet: {
      width: '70%',
      height: '70%'
    }
});

export default PoopMap;