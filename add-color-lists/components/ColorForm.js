import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Input } from 'native-base';
import PropTypes from 'prop-types';

export default class ColorForm extends Component {

    constructor() {
        super();
        this.state = {
            txtColor: ''
        }

        this.submit = this.submit.bind(this);
    }

    submit() {
        this.props.onNewColor(this.state.txtColor.toLowerCase());
        this.setState({txtColor: ''});
    }
    
    render() {
        return (
            <View style={styles.container}>
                <Input style={styles.txtInput} placeholder="Enter a color..." 
                    onChangeText={(txtColor) => this.setState({txtColor})} 
                    value={this.state.txtColor} />
                <Text style={styles.button} onPress={this.submit}>Add</Text>
            </View>
        );
    }
}

ColorForm.propTypes = {
    onNewColor: PropTypes.func.isRequired
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: 'lightgrey',
        height: 70,
        marginTop: 50,
        paddingTop: 10
    },
    txtInput: {
        flex: 1,
        margin: 5,
        padding: 5,
        borderWidth: 2,
        fontSize: 20,
        borderRadius: 5,
        backgroundColor: 'snow'
    },
    button: {
        backgroundColor: 'darkblue',
        margin: 5,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontSize: 20
    }
});