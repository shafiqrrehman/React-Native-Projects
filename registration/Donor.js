import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Picker } from 'react-native';
import { Item, Input } from 'native-base';

class Donor extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Text style={{width: 200, textAlign: 'center', marginBottom: 60}}>To begin please provide following information</Text>
                <Picker 
                    style={{width: '80%'}}>
                    <Picker.Item label="Your City" value="city" />
                    <Picker.Item label="Karachi" value="khi" />
                </Picker>
                <Picker 
                    style={{width: '80%', marginBottom: 15}}>
                    <Picker.Item label="Your Neighborhood" value="neighbor" />
                    <Picker.Item label="Asad" value="as" />
                </Picker>

                <View style={{ alignSelf:"flex-start", marginLeft: 45, flexDirection: 'row'}}>
                    <Text style={styles.txt}>Phone</Text>
                    <Item style={styles.input}>
                        <Input placeholder='ex: +92 300-1234567' />
                    </Item>
                    {/* <TextInput
                            style={styles.input}
                            placeholder="ex: +92300-1234567"
                            placeholderTextColor='#2C3E50'
                            selectionColor='#666666' /> */}
                </View>

                <TouchableHighlight style={styles.btn}>
                    <Text style={{color: 'white', fontSize: 20}}>START</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
      container: {
        flex: 1,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
      },
      input: {
        paddingLeft: 10,
        paddingRight: 10,
        width: 200,
        marginLeft: 10
      },
      txt: {
          marginTop: 18
      },
      btn: {
        alignItems: 'center',
        backgroundColor: '#EF4836',
        padding: 10,
        width: 250,
        borderRadius: 30,
        borderWidth: 1,
        borderColor: 'red',
        marginTop: 200,
    }
});


export default Donor;