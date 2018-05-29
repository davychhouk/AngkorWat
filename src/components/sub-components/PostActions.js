//@flow
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

type Props = {
  likes: number,
  comments: [],
  liked: boolean
};
const PostActions = (props: Props) => {
  const { likes, liked, comments } = props;
  return (
    <View style={styles.actionsContainer}>
      <View style={styles.statisticContainer}>
        <Text>{likes ? `${likes} ចូលចិត្ត` : null}</Text>
        <Text>{comments.length ? `${comments.length} វិចារ` : null}</Text>
      </View>
      <View
        style={[
          styles.statisticContainer,
          {
            borderTopWidth: 1,
            paddingTop: 5,
            borderColor: 'rgba(0,0,0,0.2)'
          }
        ]}
      >
        <TouchableOpacity onPress={() => {}} style={styles.buttonStyle}>
          <Icon
            name={liked ? 'heart' : 'heart-outline'}
            size={20}
            color={'#80daff'}
            style={{ marginRight: 3 }}
          />
          <Text style={{ color: liked ? '#80daff' : 'black' }}>ចូលចិត្ត</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}} style={styles.buttonStyle}>
          <Icon
            name={'comment-outline'}
            size={20}
            color={'#80daff'}
            style={{ marginRight: 3 }}
          />
          <Text>ដាក់វិចារ</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}} style={styles.buttonStyle}>
          <Icon
            name={'share'}
            size={20}
            color={'#80daff'}
            style={{ marginRight: 3 }}
          />
          <Text>ចែករំលែក</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  actionsContainer: {
    width: width
  },
  statisticContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10
  },
  buttonStyle: {
    flexDirection: 'row',
    alignItems: 'center'
  }
});

export { PostActions };
