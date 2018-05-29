//@flow
import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';

import { PostProfile } from './PostProfile';
import { PostContent } from './PostContent';
import { PostActions } from './PostActions';

type Props = {
  content: Object
};
const Post = (props: Props) => {
  const {
    username,
    datetime,
    photo,
    description,
    likes,
    liked,
    comments
  } = props.content;
  return (
    <View style={styles.postContainer}>
      <PostProfile username={username} datetime={datetime} />
      <PostContent photo={photo} description={description} />
      <PostActions liked={liked} likes={likes} comments={comments} />
    </View>
  );
};

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  postContainer: {
    backgroundColor: '#ffffff',
    marginBottom: 4,
    width: width
  }
});

export { Post };
