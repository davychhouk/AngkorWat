//@flow
import React from 'react';
import { TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { withNavigation } from 'react-navigation';

import { PostProfile } from '../sub-components/PostProfile';
import PostContent from '../sub-components/PostContent';
import { PostActions } from '../sub-components/PostActions';

type Props = {
  content: Object,
  navigation: Object
};
const Post = (props: Props) => {
  const { username, datetime, likes, liked, comments } = props.content;
  return (
    <TouchableOpacity
      onPress={() => {
        props.navigation.navigate('Detail', {
          content: props.content
        });
      }}
      style={styles.postContainer}
    >
      <PostProfile username={username} datetime={datetime} />
      <PostContent content={props.content} />
      <PostActions liked={liked} likes={likes} comments={comments} />
    </TouchableOpacity>
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

export default withNavigation(Post);
