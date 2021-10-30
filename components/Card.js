import React from 'react';
import {View, TouchableOpacity, Image, StyleSheet} from 'react-native';

export default function Card(props) {
  const {item} = props;
  return (
    <TouchableOpacity style={styles.container}>
      <Image
        style={styles.movieImage}
        source={{uri: 'https://image.tmdb.org/t/p/w500' + item.poster_path}}
      />
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 5,
    position: 'relative',
  },
  movieImage: {
    height: 200,
    width: 120,
    borderRadius: 20,
  },
});
