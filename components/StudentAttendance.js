import React, { Component } from 'react';
import { Platform, StyleSheet, PermissionsAndroid, Text, View, StatusBar, Image, CheckBox, ScrollView, TouchableOpacity } from 'react-native';
import { appMainBackgroundColor, appMainBlue, appMainBlueDark } from './colour';
import Icon from "react-native-vector-icons/AntDesign"
import IconE from "react-native-vector-icons/Entypo"
import MyHeader from './Header';
import moment from 'moment'


export default class StudentAttendance extends Component {
    constructor(props) {
        super(props);
        this.state = {
            connectionInfo: null,
            lat: '',
            long: '',
            type: null,
            name: 'Mohsin',
            tmp_array: [
                { Name: "Aaaaaaaaa", RollNo: 123456,  },
                { Name: "bbbbbbbbbbb", RollNo: 123456, },
                { Name: "ccccccccccc", RollNo: 123456, },
                { Name: "ccccccccc", RollNo: 123456, },
                { Name: "zzzzzzzzzz", RollNo: 123456, },
                { Name: "aaaaaaaaaaa", RollNo: 123456, },
                { Name: "Aaaaaaaaa", RollNo: 123456, },
                { Name: "bbbbbbbbbbb", RollNo: 123456, },
                { Name: "ccccccccccc", RollNo: 123456, },
                { Name: "ccccccccc", RollNo: 123456, },
                { Name: "zzzzzzzzzz", RollNo: 123456, },
                { Name: "aaaaaaaaaaa", RollNo: 123456, },
            ],

        }
    }

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
    render() {
        let { tmp_array } = this.state
        return (

            <View style={styles.mainApp}>
                <View>
                    <StatusBar backgroundColor={appMainBlue} barStyle="light-content" />
                </View>
                <MyHeader props={this.props} title='Attendance' />

                <View style={styles.headingView}>
                    <View style={styles.heading1}>
                        <View style={styles.text2}>
                            <Text style={{ color: 'white', fontSize: 18 }}>Principle of Accounting {this.state.name1}</Text>
                        </View>
                        <View style={styles.text3}>
                            <Text style={{ color: 'white', fontSize: 18 }}>{this.makeDate()}</Text>
                        </View>
                        <View style={styles.text2}>
                            <Text style={{ color: 'white', fontSize: 18 }}>Batch NO. 0123537A</Text>
                            <Text style={{ color: 'white', fontSize: 18 }}>From: 09:am to 10:am {this.state.name1}</Text>
                            <Text style={{ color: 'white', fontSize: 18 }}>Duration 60 Minutes {this.state.name1}</Text>
                        </View>
                    </View>
                    <View style={styles.container}>
                        <View style={styles.dots}>
                            <Text style={{ fontSize: 20, fontWeight: "bold", }}>Present 28 Absent 3</Text>
                            <IconE name="dots-three-vertical" size={20} color="black" />
                        </View>
                    </View>
                </View>
                <View style={styles.studentDetail}>
                    <ScrollView>
                        {
                            tmp_array.map((val,ind)=>{
                                return(
                                    <View style={styles.studentDetailSpace}>
                                        <View style={styles.picView}>
                                            <Image style={styles.pic} source={require('../assets/images/profile.png')} />
                                        </View>
                                        <View style={styles.nameView}>
                                            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{val.Name}</Text>
                                            <Text style={{ fontSize: 18, }}>{val.RollNo}</Text>
                                        </View>
                                        <View style={styles.checkboxView}>
                                            <CheckBox
                                                value={this.state.checked}
                                                onValueChange={() => this.setState({ checked: !this.state.checked })}
                                            />
                                        </View>
                                    </View>
                                )
                            })
                        }
                        <View style={styles.button}>
                            <TouchableOpacity style={styles.checkInBtn} onPress={this.checkIn.bind(this)}>
                                <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>
                                    Update
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
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
        flex: 4,
        //backgroundColor: 'black',
    },
    heading1: {
        flex: 3,
        backgroundColor: 'black',
        justifyContent: 'center'
    },
    container: {                  // bad me margin k bghair krna he
        flex: 1,
        backgroundColor: 'grey',
        justifyContent: 'center'
    },
    dots: {
        marginHorizontal: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    studentDetail: {
        flex: 7,
        marginHorizontal: 5,
        marginVertical: 5,
    },
    studentDetailSpace: {
        flexDirection: 'row',
    },
    picView: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    nameView: {
        flex: 4,
        justifyContent: 'center',
    },
    checkboxView: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    name: {
        flexDirection: 'column',
        //textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10,
        //flex: 1,
    },
    CheckBox: {
        justifyContent: 'center',
        alignItems: 'center',
        //alignItems: 'flex-end',
        //flex: 1,
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    checkInBtn: {
        //backgroundColor: appMainBlue,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        height: 45,
        width: '50%',
        fontWeight: 'bold',
        borderRadius: 5
    },
    text1: {
        //textAlign: 'right',
        alignItems: 'flex-end',
    },
    text2: {
        marginHorizontal: 5
    },
    text3: {
        marginHorizontal: 5,
        alignItems: 'flex-end',
    },
    pic: {
        width: 80,
        height: 80,
        borderRadius: 80 / 2,
        borderColor: 'grey',
        justifyContent: 'center',
        alignItems: 'center',
        //backgroundColor: 'white',

    },
    tileRow: {
        flex: 1,
        flexDirection: 'row',
        marginHorizontal: 10,
        marginVertical: 10,
    },
    tileView: {
        flex: 1,
        borderRadius: 10,
        marginHorizontal: 5,
        justifyContent: 'center',
        alignItems: 'center',
        //    elevation: 2,
    },
    txt: {
        fontWeight: 'bold',
        fontSize: 16
    }
})