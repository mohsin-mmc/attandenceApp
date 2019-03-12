import React, { Component } from 'react';
import { Platform, StyleSheet, PermissionsAndroid, Text, View, Image, StatusBar } from 'react-native';
import {appMainBackgroundColor , appMainBlue , appMainBlueDark } from './colour';
import Icon from "react-native-vector-icons/AntDesign"
import MyHeader from './Header';
import moment from 'moment'
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            connectionInfo: null,
            lat: '',
            long: '',
            type: null,
            name: 'Mohsin'
        }
    }
    // static navigationOptions = {
    //     tabBarIcon: ({ tintColor }) => (
    //         <Icon name="dashboard" size={25} style={{ color: tintColor }} />
    //     )
    // }


    makeDate() {
        return date = moment().format('MMMM Do ')
      }

    makeDate1() {
        return date = moment().format('dddd ')
      }

    
    checkIn() {
        alert('checkIN');
    }
    checkOut() {
        alert('checkOUT');
    }
    checkNewmsg() {
        alert('New msg');
    }
    checkPending() {
        alert('pending');
    }
    checkScheduled() {
        alert('Scheduled');
    }
    checkNewTime() {
        alert('NewTime');
    }

    navigate(page){
        this.props.navigation.navigate(page)
    }

    render() {

        return (

            <View style={styles.mainApp}>
            <StatusBar backgroundColor={appMainBlue} barStyle="light-content" />
                <MyHeader props={this.props} title='Dashboard' />
                <View style={styles.headingView}>
                    <View style={styles.text2}>
                    <Text style={{ color: 'white', fontSize: 18}}>Welcome Mr. {this.state.name}</Text>
                    </View>
                    <View style={styles.text1}>
                    <Text style={{ color: 'white', fontSize: 18}}>{this.makeDate()}</Text>
                    <Text style={{ color: 'white', fontSize: 18}}>{this.makeDate1()}</Text>
                    </View>
                </View>
                <View style={styles.container}>
                    <View style={styles.tileRow}>
                        <View style={styles.tileView}>
                            <Image style={styles.pic} source={require('../assets/images/profile.png')} />
                            <Text style={styles.txt}>
                                Profile
                            </Text>
                        </View>
                        <View style={styles.tileView}>
                            <Image style={styles.pic} source={require('../assets/images/class_routine.png')} />
                            <Text style={styles.txt}>
                                Class Routine
                            </Text>
                        </View>
                        <View style={styles.tileView}>
                            <Image style={styles.pic} source={require('../assets/images/exams.png')} />
                            <Text style={styles.txt}>
                                Exams
                            </Text>
                        </View>
                    </View>
                    <View style={styles.tileRow}>
                        <View style={styles.tileView}>
                            <Image style={styles.pic} source={require('../assets/images/messages.png')} />
                            <Text style={styles.txt}>
                                Messages
                            </Text>
                        </View>
                        <View style={styles.tileView}>
                            <Image style={styles.pic} source={require('../assets/images/results.png')} />
                            <Text style={styles.txt}>
                                Result
                            </Text>
                        </View>
                        <TouchableOpacity onPress={this.navigate.bind(this,'classes')} style={styles.tileView}>
                            <Image style={styles.pic} source={require('../assets/images/attendance.png')} />
                            <Text style={styles.txt}>
                                Attendance
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.tileRow}>
                        <View style={styles.tileView}>
                            <Image style={styles.pic} source={require('../assets/images/notification.png')} />
                            <Text style={styles.txt}>
                                Notice
                            </Text>
                        </View>
                        <View style={styles.tileView}>
                            <Image style={styles.pic} source={require('../assets/images/holiday.png')} />
                            <Text style={styles.txt}>
                                Holiday
                            </Text>
                        </View>
                        <View style={[styles.tileView,{marginLeft: 100}]}>
                        {/* <Image style={styles.pic} source={require('../assets/images/holiday.png')} />
                            <Text style={styles.txt}>
                                Holiday
                            </Text> */}
                        </View>
                    </View>
                </View>
            </View>

        );
    }
}
const styles = StyleSheet.create({
    mainApp: {
        flex: 1,
        backgroundColor: appMainBackgroundColor,
    },
    headingView: {
        flex: 2,
        backgroundColor: 'black',
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    text1: {
        marginHorizontal: 5
    },
    text2: {
        marginHorizontal: 5
    },
    pic: {
        width: 80,
        height: 80,
        borderRadius: 80 / 2,
      },
    container: {
        flex: 10,
        // backgroundColor: 'green'
        justifyContent:'space-around'
    },
    tileRow: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    tileView: {
        marginHorizontal: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    txt: {
        fontWeight: 'bold',
        fontSize: 16
    }
})