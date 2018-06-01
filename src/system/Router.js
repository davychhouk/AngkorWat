//@flow
import React from 'react';
import {
  createBottomTabNavigator,
  createStackNavigator
} from 'react-navigation';
import { Text, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Home from '../components/main-components/Home';
import Question from '../components/main-components/Question';
import Profile from '../components/main-components/Profile';
import PostDetail from '../components/main-components/PostDetail';

//Post Navigator
const postNavStack = createStackNavigator(
  {
    Home: Home,
    Detail: PostDetail
  },
  {
    initialRouteName: 'Home'
  }
);

//Export Router
export default createBottomTabNavigator(
  {
    Home: postNavStack,
    Question: Question,
    Profile: Profile
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-book${focused ? '' : '-outline'}`;
        } else if (routeName === 'Question') {
          iconName = `ios-time${focused ? '' : '-outline'}`;
        } else if (routeName === 'Profile') {
          iconName = `ios-contact${focused ? '' : '-outline'}`;
        }
        const icon = () => (
          <Ionicons name={iconName} size={22} color={tintColor} />
        );
        return icon();
      },
      tabBarLabel: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        const { label } = styles;
        if (routeName === 'Home') {
          return (
            <Text style={focused ? [label, { color: tintColor }] : label}>
              ដើមទំព័រ
            </Text>
          );
        } else if (routeName === 'Question') {
          return (
            <Text style={focused ? [label, { color: tintColor }] : label}>
              សំណួរចម្លើយ
            </Text>
          );
        } else if (routeName === 'Profile') {
          return (
            <Text style={focused ? [label, { color: tintColor }] : label}>
              ប្រូហ្វាល់
            </Text>
          );
        }
      }
    }),
    tabBarOptions: {
      activeTintColor: '#80daff',
      inactiveTintColor: 'gray'
    }
  }
);

const styles = StyleSheet.create({
  label: {
    fontSize: 10
  }
});
