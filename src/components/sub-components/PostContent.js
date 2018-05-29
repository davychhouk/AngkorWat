//@flow
import React from 'react';
import { View, Text, Image, Dimensions } from 'react-native';
import ViewMoreText from 'react-native-view-more-text';

const renderViewMore = onPress => {
  return (
    <Text onPress={onPress} style={{ color: '#80daff' }}>
      បន្តអាន
    </Text>
  );
};
const renderViewLess = onPress => {
  return (
    <Text onPress={onPress} style={{ color: '#80daff' }}>
      លាក់ខ្លះ
    </Text>
  );
};

type Props = {
  photo: string,
  description: string
};
const PostContent = (props: Props) => {
  const { photo, description } = props;
  const { width } = Dimensions.get('window');
  return (
    <View>
      <View style={{ marginHorizontal: 10 }}>
        <ViewMoreText
          numberOfLines={3}
          renderViewMore={renderViewMore}
          renderViewLess={renderViewLess}
        >
          <Text>{description}</Text>
        </ViewMoreText>
      </View>
      <View>
        <Image
          style={{
            flex: 1,
            height: width * 3 / 5,
            width: width,
            marginBottom: 10
          }}
          source={{ uri: photo }}
          resizeMode={'cover'}
        />
      </View>
    </View>
  );
};

export { PostContent };
