import React from 'react';
import {
  View,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TouchableNativeFeedback,
  TouchableHighlight,
  StyleSheet,
  Text
} from 'react-native';

export default class App extends React.Component {

  render() {

    return (
      <View
        showsVerticalScrollIndicator={false}
        style={{ backgroundColor: 'white', flex: 1, justifyContent: 'center' }}
      >
        <TouchableWithoutFeedback
          onPress={() => alert("TouchableWithoutFeedback Pressed")}
          onLongPress={() => alert("TouchableWithoutFeedback Long Pressed")}
        >
          <Text > Forgot Your password?</Text>
        </TouchableWithoutFeedback>

        <TouchableOpacity
          // activeOpacity={0.85}
          // disabled={true}
          hitSlop={{ bottom: 20, right: 50 }}
          onPress={() => alert("TouchableOpacity Pressed")}
          onLongPress={() => alert("TouchableOpacity Long Pressed")}
          style={{
            width: "80%", backgroundColor: 'green', borderRadius: 30, alignItems: 'center'
            , padding: 10, alignSelf: 'center', margin: 20, elevation: 5
          }}
        >
          <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }} >SUBMIT</Text>
        </TouchableOpacity>


        <TouchableHighlight
          activeOpacity={0}
          disabled={true}

          onPress={() => alert("TouchableHighlight Pressed")}
          onLongPress={() => alert("TouchableHighlight Long Pressed")}
          style={{
            width: "80%", backgroundColor: 'green', borderRadius: 30, alignItems: 'center'
            , padding: 10, alignSelf: 'center', margin: 20, elevation: 5
          }}
        >
          <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }} >SUBMIT</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

