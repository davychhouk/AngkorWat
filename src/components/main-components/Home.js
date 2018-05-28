//@flow
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

type Props = {};
class Home extends Component<Props> {
  static navigationOptions = (props: Props) => ({
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default Home;
