import { Text, View,StatusBar } from 'react-native';
import React from 'react';
import {
  createStackNavigator,
  createAppContainer,
  createDrawerNavigator,
  createMaterialTopTabNavigator
} from 'react-navigation';

import Login from './components/Login'
import Qrscan from './components/Qrscan'
import Dashboard1 from './components/Dashboard1'
import ClassSchedule from './components/ClassSchedule'

import {appMainBlue, appMainBackgroundColor} from './assets/Constants'
import QRgenerator from './components/QR/QRgenerator';
import StudentAttendance from './components/StudentAttendance';




class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
      </View>
    );
  }
}

class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
      </View>
    );
  }
}
class TeacherHome extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!Teacher</Text>
      </View>
    );
  }
}

class TeacherSetting extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!Teacher</Text>
      </View>
    );
  }
}

// // -------------- top navigator -------------
// const teacherTab = createMaterialTopTabNavigator({
//   dashboard: Dashboard1,
//   checkinout: TeacherSetting,
// },{
//   swipeEnabled: true,
//   tabBarPosition: 'bottom',
//   tabBarOptions: {
//     showIcon: true,
//     showLabel: false,
//     labelStyle: {
//       fontSize: 15,
//     },
//     activeTintColor: 'white',
//     inactiveTintColor: appMainBackgroundColor,
//     style: {
//       backgroundColor: appMainBlue,
//     },
//     indicatorStyle :{
//       backgroundColor: 'white'
//     },
//     tabStyle:{
//       height: 45
//     }
//   }
// }
// );

// const studentTab = createMaterialTopTabNavigator({
//   dashboard: ClassSchedule,
//   checkinout: SettingsScreen,
// },{
//   swipeEnabled: true,
//   tabBarPosition: 'bottom',
//   tabBarOptions: {
//     showIcon: true,
//     showLabel: false,
//     labelStyle: {
//       fontSize: 15,
//     },
//     activeTintColor: 'white',
//     inactiveTintColor: appMainBackgroundColor,
//     style: {
//       backgroundColor: appMainBlue,
//     },
//     indicatorStyle :{
//       backgroundColor: 'white'
//     },
//     tabStyle:{
//       height: 45
//     }
//   }
// }
// );


// ----------------- stack navigator ---------------
const TeacherStack = createStackNavigator({
  dashboard: Dashboard1,
  classes: ClassSchedule,
  attendance: StudentAttendance,
},
{
  headerMode: 'none'
});

const StudentStack = createStackNavigator({
  dashboard: Dashboard1,
  classes: ClassSchedule,
},{
  headerMode: 'none'
});

const MainNavigator = createStackNavigator({
  login: {screen: Login, navigationOptions: { header: null } },
  QRgenerator: {screen: QRgenerator, navigationOptions: { header: null } },
  // teacherTab: {screen: teacherTab , navigationOptions:{header: null}},
  // studentTab: {screen: studentTab, navigationOptions: { header: null } }, 
  teacherTab: {screen: TeacherStack , navigationOptions:{header: null}},
  studentTab: {screen: StudentStack, navigationOptions: { header: null } }, 
  qrscan: {screen: Qrscan, navigationOptions: { header: null } }, 
});

const Apps = createAppContainer(MainNavigator );
// --------------------

class App extends React.Component {
  
  render() { 
    return (
      <View style={{flex:1}}>
      <StatusBar barStyle='light-content' backgroundColor={appMainBlue}></StatusBar>
      <Apps></Apps>
      
      </View>
    );
  }
}

export default App;
