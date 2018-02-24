import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight
  } from 'react-native'


const ColorButton = ({backgroundColor, onSelect=f=>f}) => (

    <TouchableHighlight 
            style={styles.button}
            underlayColor="orange"
            onPress={() => onSelect(backgroundColor)}>

          <View style={styles.row}>
            <View style={[styles.sample, {backgroundColor}]} />
            <Text style={styles.text}>{backgroundColor}</Text>
          </View>
    </TouchableHighlight>
)

const styles = StyleSheet.create({
    button: {
      margin: 10,
      padding: 10,
      borderWidth: 2,
      alignSelf: 'stretch',
      borderRadius: 10,
      backgroundColor: 'rgba(255,255,255,.8)'
    },
    row: {
      flexDirection: 'row',
      alignItems: 'center'
    },
    sample: {
      width: 20,
      height: 20,
      borderRadius: 10,
      margin: 5,
      backgroundColor: '#fff'
    },
    text: {
      fontSize: 30,
      margin: 5
    }
  });

  export default ColorButton;