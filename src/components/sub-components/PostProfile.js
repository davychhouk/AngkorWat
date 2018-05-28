//@flow
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

type Props = {
  username: string,
  datetime: string
};
const PostProfile = (props: Props) => {
  const { username, datetime } = props;
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <View borderRadius={50} style={styles.imageStyle}>
          <Image
            style={{ width: 40, height: 40 }}
            source={require('../../assets/icons/profile.jpg')}
          />
        </View>
        <View style={{ marginLeft: 10 }}>
          <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{username}</Text>
          <Text style={{ fontSize: 12 }}>{datetime}</Text>
        </View>
      </View>
      <View>
        <Text>⌥</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginVertical: 5
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  imageStyle: {
    overflow: 'hidden',
    borderColor: 'tomato',
    borderWidth: 1
  }
});

export { PostProfile };
