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
  static navigationOptions = props => ({
    title: 'ដើមទំព័រ'
  });
  render() {
    return (
      <View style={styles.container}>
        <Text>ដើមទំព័រ</Text>
      </View>
    );
  }
}

class Question extends Component<Props> {
  static navigationOptions = props => ({
    title: 'សំណួរចម្លើយ'
  });
  render() {
    return (
      <View style={styles.container}>
        <Text>សំណួរចម្លើយ</Text>
      </View>
    );
  }
}

class Profile extends Component<Props> {
  static navigationOptions = props => ({
    title: 'ប្រូហ្វាល់'
  });
  render() {
    return (
      <View style={styles.container}>
        <Text>ប្រូហ្វាល់</Text>
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
      activeTintColor: '#80daff',
      inactiveTintColor: 'gray'
    }
  }
);
