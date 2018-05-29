//@flow
import React from 'react';
import { View, Text, Image, Dimensions } from 'react-native';

type Props = {
  photo: string,
  description: string
};
const PostContent = (props: Props) => {
  const { photo, description } = props;
  const { width } = Dimensions.get('window');
  return (
    <View>
      <View style={{ marginHorizontal: 10, marginBottom: 10 }}>
        <Text>{description}</Text>
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
