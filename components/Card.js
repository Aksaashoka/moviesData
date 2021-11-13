import React, {PureComponent} from 'react';
import {Text, TouchableOpacity, Image, StyleSheet} from 'react-native';

const placeholderImage = require('../assets/images/poster-placeholder.png');

class Card extends PureComponent {
  render() {
    const {item, navigation} = this.props;
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('Detail', {movieDetail: item})}
        style={styles.container}>
        <Image
          resizeMode="cover"
          style={styles.movieImage}
          source={
            item.poster_path
              ? {uri: 'https://image.tmdb.org/t/p/w500' + item.poster_path}
              : placeholderImage
          }
        />
        {!item.poster_path && (
          <Text style={styles.movieName}>{item.title}</Text>
        )}
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 200,
    padding: 5,
    position: 'relative',
    alignItems: 'center',
  },
  movieImage: {
    height: 200,
    width: 120,
    borderRadius: 20,
  },
  movieName: {
    position: 'absolute',
    maxWidth: 100,
    top: 10,
    textAlign: 'center',
  },
});
export default Card;
