//@flow
import React from 'react';
import { View, Text } from 'react-native';

import { PostProfile } from './PostProfile';
import { PostContent } from './PostContent';
import { PostActions } from './PostActions';
import { PostComments } from './PostComments';

type Props = {};
const Post = (props: Props) => {
  return (
    <View>
      <PostProfile />
      <PostContent />
      <PostActions />
      <PostComments />
      <Text>Post</Text>
    </View>
  );
};

export { Post };
