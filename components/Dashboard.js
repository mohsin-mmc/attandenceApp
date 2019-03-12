import React, { Component } from 'react';
import { Platform, 
    StyleSheet, 
    Text, 
    View,
    ScrollView,
    TouchableOpacity,
    PermissionsAndroid
} from 'react-native';
import { appMainBackgroundColor, appMainBlue, appMainBlueDark } from '../assets/Constants';
import Icon from "react-native-vector-icons/AntDesign"
import IconFA from "react-native-vector-icons/FontAwesome"
import IconE from "react-native-vector-icons/Entypo"
import IconMI from "react-native-vector-icons/MaterialCommunityIcons"
import MyHeader from './Layouts/Header';

export default class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            connectionInfo: null,
            lat: '',
            long: '',
            type: null,
            imei: 0,
            absentCount: 0,
            presentCount: 0
        }
    }
    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <Icon name="dashboard" size={25} style={{ color: tintColor }} />
        )
    }


    render() {
        let {absentCount,presentCount} = this.state
        return (

            <View style={styles.mainApp}>
                <MyHeader props={this.props} title='Dashboard' />
                <View style={styles.container}>
                    <ScrollView>
                    <View style={styles.tileRow}>
                        <TouchableOpacity  style={styles.tileView}>
                            <IconFA name="calendar" size={70} color={appMainBlue} />
                            <Text style={styles.txt}>
                                View Attendance
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.tileView}>
                            <IconE name="location-pin" size={70} color={appMainBlue} />
                            <Text style={styles.txt}>
                                Check In
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.tileRow}>
                        <View style={styles.tileView}>
                            {/* <IconFA name="user-times" size={70} color={appMainBlue} /> */}
                            <Text style={{fontSize: 70, color: appMainBlue}}>{absentCount}</Text>
                            <Text style={styles.txt}>
                                Total Absents
                            </Text>
                        </View>
                        <View style={styles.tileView}>
                            <Icon name="calendar" size={70} color={appMainBlue} />
                            <Text style={styles.txt}>
                                Total Lates
                            </Text>
                        </View>
                    </View>
                    <View style={styles.tileRow}>
                        <View style={styles.tileView}>
                            {/* <Icon name="calendar" size={70} color={appMainBlue} /> */}
                            <Text style={{fontSize: 70, color: appMainBlue}}>{presentCount}</Text>
                            <Text style={styles.txt}>
                                Total Present
                            </Text>
                        </View>
                        <View style={styles.tileView}>
                            <IconMI name="calendar-clock" size={70} color={appMainBlue} />
                            <Text style={styles.txt}>
                                Over Time
                            </Text>
                        </View>
                    </View>
                    <View style={styles.tileRow}>
                        <View style={styles.tileView}>
                            <Icon name="calendar" size={70} color={appMainBlue} />
                            <Text style={styles.txt}>
                                Total Leaves
                            </Text>
                        </View>
                        <View style={styles.tileView}>
                            <IconMI name="calendar-clock" size={70} color={appMainBlue} />
                            <Text style={styles.txt}>
                                Over Time
                            </Text>
                        </View>
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
    container: {
        flex: 10
    },
    tileRow: {
        flex: 1,
        flexDirection: 'row',
        marginHorizontal: 10,
        marginVertical: 10,
        height: 140
    },
    tileView: {
        flex: 1,
        borderRadius: 10,
        marginHorizontal: 5,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 2,
    },
    txt: {
        fontWeight: 'bold',
        fontSize: 16
    }
})