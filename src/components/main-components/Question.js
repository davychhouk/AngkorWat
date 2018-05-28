//@flow
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

type Props = {};
class Question extends Component<Props> {
  static navigationOptions = (props: Props) => ({
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default Question;
