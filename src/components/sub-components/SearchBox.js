//@flow
import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Dimensions,
  TextInput
} from 'react-native';

type Props = {};
const SearchBox = (props: Props) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchBoxContainerStyle}>
        <TextInput
          style={styles.searchBoxStyle}
          placeholder={'Search...'}
          allowFontScaling={true}
          placeholderTextColor={'#bfecff'}
        />
      </View>
    </SafeAreaView>
  );
};

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height / 10,
    backgroundColor: '#80daff'
  },
  searchBoxContainerStyle: {
    backgroundColor: '#73c4e5',
    margin: 5,
    borderRadius: 10
  },
  searchBoxStyle: {
    paddingLeft: 10,
    height: height / 10 - 32
  }
});

export { SearchBox };
