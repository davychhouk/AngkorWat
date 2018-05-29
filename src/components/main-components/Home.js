//@flow
import React, { Component } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { SearchBox } from '../sub-components/SearchBox';
import { Post } from '../sub-components/Post';

const posts = [
  {
    key: '1',
    username: 'ឈូក ដាវី',
    datetime: 'May 21, 2018 10:00 AM',
    photo:
      'https://raw.githubusercontent.com/davychhouk/AngkorWat/master/src/assets/img/angkor-wat-1.jpg',
    description:
      "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un peintre anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.",
    likes: 0,
    liked: false,
    comments: ['A', 'B']
  },
  {
    key: '2',
    username: 'ឈូក ដាវី',
    datetime: 'May 22, 2018 10:00 AM',
    photo:
      'https://github.com/davychhouk/AngkorWat/blob/master/src/assets/img/angkor-wat-2.jpg?raw=true',
    description:
      "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un peintre anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.",
    likes: 2,
    liked: true,
    comments: ['A']
  },
  {
    key: '3',
    username: 'ឈូក ដាវី',
    datetime: 'May 23, 2018 10:00 AM',
    photo:
      'https://github.com/davychhouk/AngkorWat/blob/master/src/assets/img/angkor-wat-scenamatic.jpg?raw=true',
    description:
      "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un peintre anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.",
    likes: 0,
    liked: false,
    comments: []
  },
  {
    key: '4',
    username: 'ឈូក ដាវី',
    datetime: 'May 24, 2018 10:00 AM',
    photo:
      'https://github.com/davychhouk/AngkorWat/blob/master/src/assets/img/angkor-wat-top-view.jpg?raw=true',
    description:
      "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un peintre anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.",
    likes: 0,
    liked: false,
    comments: []
  },
  {
    key: '5',
    username: 'ឈូក ដាវី',
    datetime: 'May 25, 2018 10:00 AM',
    photo:
      'https://github.com/davychhouk/AngkorWat/blob/master/src/assets/img/ankor-wat-sunrise-2.jpg?raw=true',
    description:
      "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un peintre anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.",
    likes: 10,
    liked: true,
    comments: []
  },
  {
    key: '6',
    username: 'ឈូក ដាវី',
    datetime: 'May 26, 2018 10:00 AM',
    photo:
      'https://github.com/davychhouk/AngkorWat/blob/master/src/assets/img/sunrise-angkor-wat-photographer.jpg?raw=true',
    description:
      "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un peintre anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.",
    likes: 10000,
    liked: true,
    comments: []
  }
];

type Props = {};
class Home extends Component<Props> {
  static navigationOptions = (props: Props) => ({
    title: 'ដើមទំព័រ'
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
