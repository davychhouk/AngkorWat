//@flow
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

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
            style={{ width: 50, height: 50 }}
            source={require('../../assets/icons/profile.jpg')}
          />
        </View>
        <View style={{ marginLeft: 10 }}>
          <Text style={{ fontWeight: 'bold', fontSize: 14 }}>{username}</Text>
          <Text style={{ fontSize: 10 }}>{datetime}</Text>
        </View>
      </View>
      <View>
        <Icon name={'dots-horizontal'} size={20} />
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
    borderColor: '#80daff',
    borderWidth: 1,
    marginTop: 5
  }
});

export { PostProfile };
