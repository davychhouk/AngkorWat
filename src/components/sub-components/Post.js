//@flow
import React from 'react';
import { View, Text } from 'react-native';

import { PostProfile } from './PostProfile';
import { PostContent } from './PostContent';
import { PostActions } from './PostActions';
import { PostComments } from './PostComments';

type Props = {
  content: Object
};
const Post = (props: Props) => {
  const { content } = props;
  return (
    <View>
      <PostProfile />
      <PostContent />
      <PostActions />
      <PostComments />
      <Text>{`${content.key} by ${content.username}`}</Text>
    </View>
  );
};

export { Post };
