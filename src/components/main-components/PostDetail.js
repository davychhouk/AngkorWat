//@flow
import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { withNavigation } from 'react-navigation';

import { PostProfile } from '../sub-components/PostProfile';
import PostContent from '../sub-components/PostContent';
import { PostActions } from '../sub-components/PostActions';

type Props = {
  content: Object,
  navigation: Object
};
class PostDetail extends Component<Props> {
  static navigationOptions = (props: Props) => ({
    headerStyle: {
      backgroundColor: '#80daff'
    },
    headerBackTitleStyle: {
      marginTop: 5,
      color: '#fff'
    },
    headerTintColor: '#fff'
  });

  render() {
    const content = this.props.navigation.getParam('content', {});
    const { username, datetime, likes, liked, comments } = content;
    return (
      <ScrollView>
        <SafeAreaView style={styles.container}>
          <PostProfile username={username} datetime={datetime} />
          <PostContent content={content} isDetail={true} />
          <PostActions liked={liked} likes={likes} comments={comments} />
        </SafeAreaView>
      </ScrollView>
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
