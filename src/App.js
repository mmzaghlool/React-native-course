import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView
} from 'react-native';


export default class App extends React.Component {

  render() {

    return (
      <View style={styles.container} >
        <Text style={[styles.text, { color: 'red'}]}>Test</Text>
        
        <ScrollView  
        // showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}
          indicatorStyle='white'
          style={{ backgroundColor: 'white'}}
         >
          
          <Image 
            source={require('../assets/images/react-native-logo.82d4bd6c.png')} 
            style={{width: 200, height: 200}}
            />
          <Image 
            source={require('../assets/images/react-native-logo.82d4bd6c.png')} 
            style={{width: 200, height: 200}}
            />
          <Image 
            source={require('../assets/images/react-native-logo.82d4bd6c.png')} 
            style={{width: 200, height: 200}}
            />
          <Image 
            source={require('../assets/images/react-native-logo.82d4bd6c.png')} 
            style={{width: 200, height: 200}}
            />
          <Image 
            source={require('../assets/images/react-native-logo.82d4bd6c.png')} 
            style={{width: 200, height: 200}}
            />
          <Image 
            source={require('../assets/images/react-native-logo.82d4bd6c.png')} 
            style={{width: 200, height: 200}}
            />
        </ScrollView>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(255, 0, 0, 0.1)",
    width: '100%',
    height: '100%'
  },
  text: {
    color: "blue",
    fontSize: 50,
    fontWeight: 'bold',
    fontStyle: 'italic'
  },
  test3: {
    fontSize: 10
  },
  test5: {
    color: "red",
    fontSize: 20,
    fontWeight: 'normal',
    fontStyle: 'normal'
  }
})