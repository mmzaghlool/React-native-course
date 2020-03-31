import React from 'react';
import {
  View,
  Dimensions,
  Image,
  Text
} from 'react-native';
const { width, height } = Dimensions.get("window");

export default class App extends React.Component {

  render() {
    // single line comment
    /**
     * Multiline */

    return (
      <View style={{ backgroundColor: 'white', flex: 1, flexDirection: 'column', justifyContent: 'center' }} >


<View style={{ flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: 'grey',
          width: '95%', alignSelf: 'center', padding: 5, borderRadius: 12, marginBottom: 5 }} >
          <Image
            source={require("../assets/images/react-native-logo.82d4bd6c.png")}
            style={{
              width: width * 0.2,
              height: width * 0.2,
              alignSelf: 'center',
              borderRadius: width * 0.1
            }}
          />
          <Text style={{ fontSize: 20, marginLeft: 5 }} >
            My Full Name
          </Text>
        </View>

        <View style={{ flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: 'grey',
          width: '95%', alignSelf: 'center', padding: 5, borderRadius: 12, marginBottom: 5 }} >
          <Image
            source={require("../assets/images/react-native-logo.82d4bd6c.png")}
            style={{
              width: width * 0.2,
              height: width * 0.2,
              alignSelf: 'center',
              borderRadius: width * 0.1
            }}
          />
          <Text style={{ fontSize: 20, marginLeft: 5 }} >
            My Full Name
          </Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: 'grey',
          width: '95%', alignSelf: 'center', padding: 5, borderRadius: 12, marginBottom: 5 }} >
          <Image
            source={require("../assets/images/react-native-logo.82d4bd6c.png")}
            style={{
              width: width * 0.2,
              height: width * 0.2,
              alignSelf: 'center',
              borderRadius: width * 0.1
            }}
          />
          <Text style={{ fontSize: 20, marginLeft: 5 }} >
            My Full Name
          </Text>
        </View>

        <View style={{ flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: 'grey',
          width: '95%', alignSelf: 'center', padding: 5, borderRadius: 12 }} >
          <Image
            source={require("../assets/images/react-native-logo.82d4bd6c.png")}
            style={{
              width: width * 0.2,
              height: width * 0.2,
              alignSelf: 'center',
              borderRadius: width * 0.1
            }}
          />
          <Text style={{ fontSize: 20, marginLeft: 5 }} >
            My Full Name
          </Text>
        </View>

      </View>
    )
  }
}