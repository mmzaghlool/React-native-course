import React from 'react';
import {
  View,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TouchableNativeFeedback,
  TouchableHighlight,
  StyleSheet,
  Text,
  Image
} from 'react-native';


import { Button } from './Common/Button'




export default class App extends React.Component {

  render() {

    return (
      <View
        showsVerticalScrollIndicator={false}
        style={{ backgroundColor: 'white', flex: 1, justifyContent: 'center' }}
      >

        <Button text={"Submit"} onPress={() => alert("Submit clicked")} style={{ backgroundColor: 'red'}} />
        <Button text={"OK !"} onPress={() => alert("OK clicked")} />
        <Button text={"Cancel"} onPress={() => alert("cancel clicked")} />

      </View>
    )
  }
}