//@flow
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {
  createBottomTabNavigator,
  createStackNavigator
} from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

type Props = {};
class Home extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text>Home</Text>
      </View>
    );
  }
}

class Question extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text>Question</Text>
      </View>
    );
  }
}

class Profile extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text>Profile</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

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
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray'
    }
  }
);
