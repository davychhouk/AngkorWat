//@flow
import React, { Component } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { SearchBox } from '../sub-components/SearchBox';
import Post from './Post';

const posts = [
  {
    key: '1',
    username: 'ឈូក ដាវី',
    datetime: 'ឧសភា ២៥, ២០១៨ ១០:០០ ព្រឹក',
    photo:
      'https://raw.githubusercontent.com/davychhouk/AngkorWat/master/src/assets/img/angkor-wat-1.jpg',
    description:
      '​សម្រាប់​គូ​ថ្ងៃ​អាទិត្យ​វិញ ​ព្រះ​ខ័ន​រាជ​ស្វាយ​រៀង ប៉ះ​ក្រសួង​ការពារ​ជាតិ ​នៅ​ទឹក​ដី​ស្វាយ​រៀង​វេលា​ម៉ោង​៦​ល្ងាច។ ក្រុម​ទាំង​ពីរ ​ធ្វើ​មិន​បាន​ល្អ​ដូច​គ្នា ​នា​រដូវ​កាល​នេះ ​ក្រោម​ការ​ដឹក​នាំ​របស់​គ្រូ​បង្វឹក​ថ្មី។ ក្រសួង​ការពារ​ជាតិ នឹង​លេង​ដោយ​អវត្តមាន​គ្រូ​បង្វឹក​ទៀត​ហើយ ដោយសារ​តែ​លោក ភា សុភក្ត្រា ​ជាប់​បម្រាម​។ ដោយ​ឡែក ស្វាយ​រៀង​វិញ ​អាច​មាន​ប្រៀប​ជាង​ក្នុង​ដី ​ស្រប​ពេល​ដែល​ទម្រង់​លេង​របស់​ក្រុម​ក៏​ឃើញ​ថា​ល្អ​ឡើង​វិញ​ដែរ។ ស្វាយ​រៀង ​ប្រសិន​បើ​អាច​ឈ្នះ ​នោះ​ពួកគេ​នឹង​មាន​ឱកាស​ ដើម្បី​ប្រជែង​ជាមួយ​ក្រុម​នៅ​តំបន់​Top4 ​ត្បិត​អី​បច្ចុប្បន្ន​ឈរ​នៅ​លេខ​៥​ក្នុង​តារាង។',
    likes: 10,
    liked: false,
    comments: ['A', 'B']
  },
  {
    key: '2',
    username: 'ឈូក ដាវី',
    datetime: 'ឧសភា ២៥, ២០១៨ ១០:០០ ព្រឹក',
    photo:
      'https://github.com/davychhouk/AngkorWat/blob/master/src/assets/img/angkor-wat-2.jpg?raw=true',
    description:
      'សម្រាប់​គូ​ថ្ងៃ​អាទិត្យ​វិញ ​ព្រះ​ខ័ន​រាជ​ស្វាយ​រៀង ប៉ះ​ក្រសួង​ការពារ​ជាតិ ​នៅ​ទឹក​ដី​ស្វាយ​រៀង​វេលា​ម៉ោង​៦​ល្ងាច។',
    likes: 101,
    liked: true,
    comments: ['A']
  },
  {
    key: '3',
    username: 'ឈូក ដាវី',
    datetime: 'ឧសភា ២៥, ២០១៨ ១០:០០ ព្រឹក',
    photo:
      'https://github.com/davychhouk/AngkorWat/blob/master/src/assets/img/angkor-wat-scenamatic.jpg?raw=true',
    description:
      'សម្រាប់​គូ​ថ្ងៃ​អាទិត្យ​វិញ ​ព្រះ​ខ័ន​រាជ​ស្វាយ​រៀង ប៉ះ​ក្រសួង​ការពារ​ជាតិ ​នៅ​ទឹក​ដី​ស្វាយ​រៀង​វេលា​ម៉ោង​៦​ល្ងាច។',
    likes: 0,
    liked: false,
    comments: []
  },
  {
    key: '4',
    username: 'ឈូក ដាវី',
    datetime: 'ឧសភា ២៥, ២០១៨ ១០:០០ ព្រឹក',
    photo:
      'https://github.com/davychhouk/AngkorWat/blob/master/src/assets/img/angkor-wat-top-view.jpg?raw=true',
    description:
      'សម្រាប់​គូ​ថ្ងៃ​អាទិត្យ​វិញ ​ព្រះ​ខ័ន​រាជ​ស្វាយ​រៀង ប៉ះ​ក្រសួង​ការពារ​ជាតិ ​នៅ​ទឹក​ដី​ស្វាយ​រៀង​វេលា​ម៉ោង​៦​ល្ងាច។ ក្រុម​ទាំង​ពីរ ​ធ្វើ​មិន​បាន​ល្អ​ដូច​គ្នា ​នា​រដូវ​កាល​នេះ ​ក្រោម​ការ​ដឹក​នាំ​របស់​គ្រូ​បង្វឹក​ថ្មី។ ក្រសួង​ការពារ​ជាតិ នឹង​លេង​ដោយ​អវត្តមាន​គ្រូ​បង្វឹក​ទៀត​ហើយ ដោយសារ​តែ​លោក ភា សុភក្ត្រា ​ជាប់​បម្រាម​។ ដោយ​ឡែក ស្វាយ​រៀង​វិញ ​អាច​មាន​ប្រៀប​ជាង​ក្នុង​ដី ​ស្រប​ពេល​ដែល​ទម្រង់​លេង​របស់​ក្រុម​ក៏​ឃើញ​ថា​ល្អ​ឡើង​វិញ​ដែរ។ ស្វាយ​រៀង ​ប្រសិន​បើ​អាច​ឈ្នះ ​នោះ​ពួកគេ​នឹង​មាន​ឱកាស​ ដើម្បី​ប្រជែង​ជាមួយ​ក្រុម​នៅ​តំបន់​Top4 ​ត្បិត​អី​បច្ចុប្បន្ន​ឈរ​នៅ​លេខ​៥​ក្នុង​តារាង។',
    likes: 0,
    liked: false,
    comments: []
  },
  {
    key: '5',
    username: 'ឈូក ដាវី',
    datetime: 'ឧសភា ២៥, ២០១៨ ១០:០០ ព្រឹក',
    photo:
      'https://github.com/davychhouk/AngkorWat/blob/master/src/assets/img/ankor-wat-sunrise-2.jpg?raw=true',
    description:
      '​សម្រាប់​គូ​ថ្ងៃ​អាទិត្យ​វិញ ​ព្រះ​ខ័ន​រាជ​ស្វាយ​រៀង ប៉ះ​ក្រសួង​ការពារ​ជាតិ ​នៅ​ទឹក​ដី​ស្វាយ​រៀង​វេលា​ម៉ោង​៦​ល្ងាច។ ក្រុម​ទាំង​ពីរ ​ធ្វើ​មិន​បាន​ល្អ​ដូច​គ្នា ​នា​រដូវ​កាល​នេះ ​ក្រោម​ការ​ដឹក​នាំ​របស់​គ្រូ​បង្វឹក​ថ្មី។ ក្រសួង​ការពារ​ជាតិ នឹង​លេង​ដោយ​អវត្តមាន​គ្រូ​បង្វឹក​ទៀត​ហើយ ដោយសារ​តែ​លោក ភា សុភក្ត្រា ​ជាប់​បម្រាម​។ ដោយ​ឡែក ស្វាយ​រៀង​វិញ ​អាច​មាន​ប្រៀប​ជាង​ក្នុង​ដី ​ស្រប​ពេល​ដែល​ទម្រង់​លេង​របស់​ក្រុម​ក៏​ឃើញ​ថា​ល្អ​ឡើង​វិញ​ដែរ។ ស្វាយ​រៀង ​ប្រសិន​បើ​អាច​ឈ្នះ ​នោះ​ពួកគេ​នឹង​មាន​ឱកាស​ ដើម្បី​ប្រជែង​ជាមួយ​ក្រុម​នៅ​តំបន់​Top4 ​ត្បិត​អី​បច្ចុប្បន្ន​ឈរ​នៅ​លេខ​៥​ក្នុង​តារាង។',
    likes: 10,
    liked: true,
    comments: []
  },
  {
    key: '6',
    username: 'ឈូក ដាវី',
    datetime: 'ឧសភា ២៥, ២០១៨ ១០:០០ ព្រឹក',
    photo:
      'https://github.com/davychhouk/AngkorWat/blob/master/src/assets/img/sunrise-angkor-wat-photographer.jpg?raw=true',
    description:
      '​សម្រាប់​គូ​ថ្ងៃ​អាទិត្យ​វិញ ​ព្រះ​ខ័ន​រាជ​ស្វាយ​រៀង ប៉ះ​ក្រសួង​ការពារ​ជាតិ ​នៅ​ទឹក​ដី​ស្វាយ​រៀង​វេលា​ម៉ោង​៦​ល្ងាច។',
    likes: 10000,
    liked: true,
    comments: []
  }
];

type Props = {};
class Home extends Component<Props> {
  static navigationOptions = (props: Props) => ({
    header: null,
    headerTitle: 'ដើមទំព័រ'
  });

  _renderItem = ({ item }) => <Post content={item} />;

  render() {
    return (
      <View style={styles.container}>
        <SearchBox />
        <FlatList data={posts} renderItem={this._renderItem} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e5e5e5'
  }
});

export default Home;
