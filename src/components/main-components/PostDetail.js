//@flow
import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, Dimensions, Button } from 'react-native';
import { withNavigation } from 'react-navigation';

import { PostProfile } from '../sub-components/PostProfile';
import PostContent from '../sub-components/PostContent';
import { PostActions } from '../sub-components/PostActions';

type Props = {
  content: Object,
  navigation: Object
};
class PostDetail extends Component<Props> {
  static navigationOptions = (props: Props) => ({});

  render() {
    const content = this.props.navigation.getParam('content', {});
    const { username, datetime, likes, liked, comments } = content;
    return (
      <SafeAreaView style={styles.container}>
        <PostProfile username={username} datetime={datetime} />
        <PostContent content={content} isDetail={true} />
        <PostActions liked={liked} likes={likes} comments={comments} />
      </SafeAreaView>
    );
  }
}

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    marginBottom: 4,
    width: width
  }
});

export default withNavigation(PostDetail);
