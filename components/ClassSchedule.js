import React, { Component } from 'react';
import { Platform, StyleSheet, PermissionsAndroid, Text, View, StatusBar } from 'react-native';
import { appMainBackgroundColor, appMainBlue, appMainBlueDark } from './colour';
import Icon from "react-native-vector-icons/AntDesign"
import IconE from "react-native-vector-icons/Entypo"
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
    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <Icon name="dashboard" size={25} style={{ color: tintColor }} />
        )
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

    navigate(){
        this.props.navigation.navigate('attendance')
    }
    render() {

        return (

            <View style={styles.mainApp}>
                <View>
                    <StatusBar backgroundColor={appMainBlue} barStyle="light-content" />
                </View>
                <MyHeader props={this.props} title='Classes' />
                <View style={styles.mainContainer}>
                    <Text style={{ fontSize: 20, fontWeight: "bold",marginLeft: 5 }}>Dashboard</Text>
                    <IconE name="dots-three-vertical" size={20} color="black" />
                </View>
                <View style={styles.headingView}>
                    <TouchableOpacity onPress={this.navigate.bind(this,'attendance')} style={{ backgroundColor: 'black' }}>
                        <View style={styles.heading1}>
                            {/* <View style={styles.text1}>
                    <Text style={{ color: 'white', fontSize: 18}}>{this.makeDate()}</Text>
                    </View> */}
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
                    </TouchableOpacity>

                    <View style={{ backgroundColor: appMainBlue }}>
                        <View style={styles.heading2}>
                            {/* <View style={styles.text1}>
                    <Text style={{ color: 'white', fontSize: 18}}>{this.makeDate()}</Text>
                    </View> */}
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
                    </View>

                    <View style={{ backgroundColor: 'grey' }}>
                        <View style={styles.heading3}>
                            {/* <View style={styles.text1}>
                    <Text style={{ color: 'white', fontSize: 18}}>{this.makeDate()}</Text>
                    </View> */}
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
    mainContainer: {
        flex: 1,
        backgroundColor: 'grey',
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems:'center',
    },
    headingView: {
        flex: 10,
        //backgroundColor: 'black',
    },
    heading1: {
        //flex: 2,
        marginHorizontal: 20,
        marginVertical: 20,
        //backgroundColor: 'black',
        //fontWeight: 'bold',
    },
    heading2: {
        //flex: 2,
        marginHorizontal: 20,
        marginVertical: 20,
        //backgroundColor: 'black',
        //fontWeight: 'bold',
    },
    heading3: {
        //flex: 2,
        marginHorizontal: 20,
        marginVertical: 20,
        //backgroundColor: 'black',
        //fontWeight: 'bold',
    },
    text1: {
        //textAlign: 'right',
        alignItems: 'flex-end',
    },
    text2: {

    },
    text3: {
        alignItems: 'flex-end',
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