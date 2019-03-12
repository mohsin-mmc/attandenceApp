import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { RNCamera } from 'react-native-camera';
import Icon from 'react-native-vector-icons/Entypo'
import QRCode from 'react-native-qrcode';
import KeepAlive from 'react-native-keep-awake';

export default class QRgenerator extends Component {

  constructor(props){
    super(props)
    this.state = {
      qrtext: 'testing'
    }
  }

  render() {
    let {qrtext} = this.state
    return (
      <View style={styles.container}>
        {/* <KeepAlive/> */}
        <QRCode
          value={qrtext}
          size={300}
          bgColor='purple'
          fgColor='white'/>
      </View>
    );
  }

 }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

