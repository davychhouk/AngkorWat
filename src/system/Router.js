//@flow
import React from 'react';
import {
  createBottomTabNavigator,
  createStackNavigator
} from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Home from '../components/main-components/Home';
import Question from '../components/main-components/Question';
import Profile from '../components/main-components/Profile';

//Export Router
export default createBottomTabNavigator(
  {
    Home: Home,
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
          <Ionicons name={iconName} size={25} color={tintColor} />
        );
        return icon();
      }
    }),
    tabBarOptions: {
      activeTintColor: '#80daff',
      inactiveTintColor: 'gray'
    }
  }
);
