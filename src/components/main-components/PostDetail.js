//@flow
import React from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';

type Props = {};
const PostDetail = (props: Props) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>PostDetail</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default PostDetail;
