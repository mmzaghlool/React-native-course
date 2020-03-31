import React from 'react';
import {
  View,
  Dimensions,
  Image,
  Text,
  ScrollView,
  FlatList
} from 'react-native';
const { width, height } = Dimensions.get("window");

export default class App extends React.Component {


  renderItem = (item) => (
    <View style={{
      flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: 'grey',
      width: '95%', alignSelf: 'center', padding: 5, borderRadius: 12, marginBottom: 5
    }} >
      <Image
        source={{ uri: item.image }}
        style={{
          width: width * 0.2,
          height: width * 0.2,
          alignSelf: 'center',
          borderRadius: width * 0.1
        }}
      />
      <Text style={{ fontSize: 20, marginLeft: 5 }} >
        {item.name}
      </Text>
    </View>
  )

  renderHeader = () => (
    <View style={{ width: '100%', padding: 12, backgroundColor: 'green', marginBottom: 10, elevation: 20 }} >
      <Text style={{
        fontSize: 20,
        color: 'white'
      }} >
        My Chat list
      </Text>
    </View>
  )

  renderList() {
    const data = [
      { image: 'https://en.es-static.us/upl/2018/12/comet-wirtanen-Jack-Fusco-dec-2018-Anza-Borrego-desert-CA-e1544613895713.jpg', name: 'My Full Name 1' },
      { image: 'https://www.bigstockphoto.com/images/homepage/module-6.jpg', name: 'My Full Name 2' },
      { image: 'https://en.es-static.us/upl/2018/12/comet-wirtanen-Jack-Fusco-dec-2018-Anza-Borrego-desert-CA-e1544613895713.jpg', name: 'My Full Name 3' },
      { image: 'https://www.bigstockphoto.com/images/homepage/module-6.jpg', name: 'My Full Name 4' },
      { image: 'https://en.es-static.us/upl/2018/12/comet-wirtanen-Jack-Fusco-dec-2018-Anza-Borrego-desert-CA-e1544613895713.jpg', name: 'My Full Name 5' },
      { image: 'https://www.bigstockphoto.com/images/homepage/module-6.jpg', name: 'My Full Name 4' },
      { image: 'https://en.es-static.us/upl/2018/12/comet-wirtanen-Jack-Fusco-dec-2018-Anza-Borrego-desert-CA-e1544613895713.jpg', name: 'My Full Name 5' },
      { image: 'https://www.bigstockphoto.com/images/homepage/module-6.jpg', name: 'My Full Name 4' },
      { image: 'https://en.es-static.us/upl/2018/12/comet-wirtanen-Jack-Fusco-dec-2018-Anza-Borrego-desert-CA-e1544613895713.jpg', name: 'My Full Name 5' },
      { image: 'https://www.bigstockphoto.com/images/homepage/module-6.jpg', name: 'My Full Name 4' },
      { image: 'https://en.es-static.us/upl/2018/12/comet-wirtanen-Jack-Fusco-dec-2018-Anza-Borrego-desert-CA-e1544613895713.jpg', name: 'My Full Name 5' },
      { image: 'https://www.bigstockphoto.com/images/homepage/module-6.jpg', name: 'My Full Name 4' },
      { image: 'https://en.es-static.us/upl/2018/12/comet-wirtanen-Jack-Fusco-dec-2018-Anza-Borrego-desert-CA-e1544613895713.jpg', name: 'My Full Name 5' },
      { image: 'https://www.bigstockphoto.com/images/homepage/module-6.jpg', name: 'My Full Name 4' },
      { image: 'https://en.es-static.us/upl/2018/12/comet-wirtanen-Jack-Fusco-dec-2018-Anza-Borrego-desert-CA-e1544613895713.jpg', name: 'My Full Name 5' },
      { image: 'https://www.bigstockphoto.com/images/homepage/module-6.jpg', name: 'My Full Name 4' },
      { image: 'https://en.es-static.us/upl/2018/12/comet-wirtanen-Jack-Fusco-dec-2018-Anza-Borrego-desert-CA-e1544613895713.jpg', name: 'My Full Name 5' },
      { image: 'https://www.bigstockphoto.com/images/homepage/module-6.jpg', name: 'My Full Name 4' },
      { image: 'https://en.es-static.us/upl/2018/12/comet-wirtanen-Jack-Fusco-dec-2018-Anza-Borrego-desert-CA-e1544613895713.jpg', name: 'My Full Name 5' },
      { image: 'https://www.bigstockphoto.com/images/homepage/module-6.jpg', name: 'My Full Name 4' },
      { image: 'https://en.es-static.us/upl/2018/12/comet-wirtanen-Jack-Fusco-dec-2018-Anza-Borrego-desert-CA-e1544613895713.jpg', name: 'My Full Name 5' },
      { image: 'https://www.bigstockphoto.com/images/homepage/module-6.jpg', name: 'My Full Name 4' },
      { image: 'https://en.es-static.us/upl/2018/12/comet-wirtanen-Jack-Fusco-dec-2018-Anza-Borrego-desert-CA-e1544613895713.jpg', name: 'My Full Name 5' },
    ]

    let arr = []


    for (let i = 0; i < data.length; i++) {
      arr.push(
        <View key={`${i}`} style={{
          flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: 'grey',
          width: '95%', alignSelf: 'center', padding: 5, borderRadius: 12, marginBottom: 5
        }} >
          <Image
            source={{ uri: data[i].image }}
            style={{
              width: width * 0.2,
              height: width * 0.2,
              alignSelf: 'center',
              borderRadius: width * 0.1
            }}
          />
          <Text style={{ fontSize: 20, marginLeft: 5 }} >
            {data[i].name}
          </Text>
        </View>
      )
    }



    return arr;
  }

  render() {
    // single line comment
    /**
     * Multiline */

    const list = [
      { image: 'https://en.es-static.us/upl/2018/12/comet-wirtanen-Jack-Fusco-dec-2018-Anza-Borrego-desert-CA-e1544613895713.jpg', name: 'My Full Name 1' },
      { image: 'https://www.bigstockphoto.com/images/homepage/module-6.jpg', name: 'My Full Name 2' },
      { image: 'https://en.es-static.us/upl/2018/12/comet-wirtanen-Jack-Fusco-dec-2018-Anza-Borrego-desert-CA-e1544613895713.jpg', name: 'My Full Name 3' },
      { image: 'https://www.bigstockphoto.com/images/homepage/module-6.jpg', name: 'My Full Name 4' },
      { image: 'https://en.es-static.us/upl/2018/12/comet-wirtanen-Jack-Fusco-dec-2018-Anza-Borrego-desert-CA-e1544613895713.jpg', name: 'My Full Name 5' },
      { image: 'https://www.bigstockphoto.com/images/homepage/module-6.jpg', name: 'My Full Name 4' },
      { image: 'https://en.es-static.us/upl/2018/12/comet-wirtanen-Jack-Fusco-dec-2018-Anza-Borrego-desert-CA-e1544613895713.jpg', name: 'My Full Name 5' },
      { image: 'https://www.bigstockphoto.com/images/homepage/module-6.jpg', name: 'My Full Name 4' },
      { image: 'https://en.es-static.us/upl/2018/12/comet-wirtanen-Jack-Fusco-dec-2018-Anza-Borrego-desert-CA-e1544613895713.jpg', name: 'My Full Name 5' },
      { image: 'https://www.bigstockphoto.com/images/homepage/module-6.jpg', name: 'My Full Name 4' },
      { image: 'https://en.es-static.us/upl/2018/12/comet-wirtanen-Jack-Fusco-dec-2018-Anza-Borrego-desert-CA-e1544613895713.jpg', name: 'My Full Name 5' },
      { image: 'https://www.bigstockphoto.com/images/homepage/module-6.jpg', name: 'My Full Name 4' },
      { image: 'https://en.es-static.us/upl/2018/12/comet-wirtanen-Jack-Fusco-dec-2018-Anza-Borrego-desert-CA-e1544613895713.jpg', name: 'My Full Name 5' },
      { image: 'https://www.bigstockphoto.com/images/homepage/module-6.jpg', name: 'My Full Name 4' },
      { image: 'https://en.es-static.us/upl/2018/12/comet-wirtanen-Jack-Fusco-dec-2018-Anza-Borrego-desert-CA-e1544613895713.jpg', name: 'My Full Name 5' },
      { image: 'https://www.bigstockphoto.com/images/homepage/module-6.jpg', name: 'My Full Name 4' },
      { image: 'https://en.es-static.us/upl/2018/12/comet-wirtanen-Jack-Fusco-dec-2018-Anza-Borrego-desert-CA-e1544613895713.jpg', name: 'My Full Name 5' },
      { image: 'https://www.bigstockphoto.com/images/homepage/module-6.jpg', name: 'My Full Name 4' },
      { image: 'https://en.es-static.us/upl/2018/12/comet-wirtanen-Jack-Fusco-dec-2018-Anza-Borrego-desert-CA-e1544613895713.jpg', name: 'My Full Name 5' },
      { image: 'https://www.bigstockphoto.com/images/homepage/module-6.jpg', name: 'My Full Name 4' },
      { image: 'https://en.es-static.us/upl/2018/12/comet-wirtanen-Jack-Fusco-dec-2018-Anza-Borrego-desert-CA-e1544613895713.jpg', name: 'My Full Name 5' },
      { image: 'https://www.bigstockphoto.com/images/homepage/module-6.jpg', name: 'My Full Name 4' },
      { image: 'https://en.es-static.us/upl/2018/12/comet-wirtanen-Jack-Fusco-dec-2018-Anza-Borrego-desert-CA-e1544613895713.jpg', name: 'My Full Name 5' },
    ]

    return (
      <View
        showsVerticalScrollIndicator={false}
        horizontal={false}
        style={{ backgroundColor: 'white', flex: 1 }}
      >
        {this.renderHeader()}

        {/* {data.map((item) => this.renderItem(item))} */}

        {/* {this.renderList()} */}

        <FlatList
          data={list}
          renderItem={({ item, index }) => this.renderItem(item)}
          keyExtractor={(item, index) => `${index}`}
          // horizontal
          
        />


      </View>
    )
  }
}