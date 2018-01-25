import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableHighlight, Image, TextInput, Button } from 'react-native';
import { Ionicons, Entypo } from '@expo/vector-icons';
import { Icon } from 'native-base';

class Signin extends React.Component {
    render() {
        return (
            <ImageBackground
                source={require('./images/log.jpg')}
                style={styles.container}>
                <View style={{flex:1, width:"68%", alignSelf:"center"}}>
                    <View style={styles.imgWrapper}>
                        <Image
                            source={require('./images/logo.png')}
                            style={styles.img} />
                        {/* <Text style={styles.txt}>heartlink</Text> */}
                    </View>


                    <View style={styles.btnWrapper}>
                        <View style={{ alignSelf:"flex-start"}}>
                            <Text style={{color: 'red'}}>USERNAME</Text>
                        </View>

                        <TextInput
                            style={styles.input}
                            placeholder="USERNAME"
                            placeholderTextColor='#2C3E50'
                            selectionColor='#666666' />

                        <View style={{ alignSelf:"flex-start"}}>
                            <Text style={{color: 'red'}}>PASSWORD</Text>
                        </View>

                        <TextInput
                            style={styles.input}
                            placeholder="PASSWORD"
                            placeholderTextColor='#2C3E50'
                            selectionColor='#666666' />

                        <View style={{ alignSelf:"flex-end"}}>
                            <Text style={{color: 'white'}}>FORGOT PASSWORD</Text>
                        </View>

                        <TouchableHighlight style={styles.btn}>
                            <Text style={{color: 'red'}}>LOGIN</Text>
                        </TouchableHighlight>

                        <View style={{ alignSelf:"center"}}>
                            <Text style={{color: 'white'}}>OR CONNECT WITH</Text>
                        </View>

                        <View style={styles.alignment}>
                            <TouchableHighlight style={styles.btnfb}>
                                <Text style={styles.col}>
                                <Entypo name="facebook" size={32} color="white" />
                                FACEBOOK</Text>
                            </TouchableHighlight>

                            <TouchableHighlight style={styles.btngoogle}>
                                <Text style={styles.col}>
                                <Entypo name="google-" size={32} color="white" />
                                GOOGLE</Text>
                            </TouchableHighlight>
                        </View>
                        
                    </View>
                </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%'
    },
    imgWrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    img: {
        width: '31%',
        height: '22%'
    },
    //   txt: {
    //     fontSize: 40,
    //     color: '#fff',
    //     fontWeight: '100'
    //   },
    btnWrapper: {
        flex: 1,
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    btn: {
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 10,
        width: 250,
        borderRadius: 30,
        borderWidth: 1,
        borderColor: '#fff',
        margin: 5,
        // backgroundColor: 'rgba(255,0,0,0.5)'
    },
    col: {
        color: 'white'
    },
    input: {
        height: 40,
        backgroundColor: '#BDC3C7',
        paddingLeft: 10,
        paddingRight: 10,
        width: 250,
        margin: 10
    },
    labltxt: {
        textAlign: 'left',
        color: 'red'
    },
    btnfb: {
        alignItems: 'center',
        backgroundColor: '#446CB3',
        padding: 10,
        width: 130,
        borderRadius: 30,
        borderWidth: 1,
        borderColor: '#fff',
        margin: 5,
    },
    btngoogle: {
        alignItems: 'center',
        backgroundColor: '#CF000F',
        padding: 10,
        width: 130,
        borderRadius: 30,
        borderWidth: 1,
        borderColor: '#fff',
        margin: 5,
    },
    alignment: {
        flex: 1,
        flexDirection: 'row'
    }
});

export default Signin;
