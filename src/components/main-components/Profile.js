//@flow
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

type Props = {};

class Profile extends Component<Props> {
  static navigationOptions = (props: Props) => ({
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

export default Profile;
