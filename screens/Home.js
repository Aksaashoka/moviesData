import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Dimensions, FlatList} from 'react-native';
import {getPopularMovies, getUpcomingMovies} from '../services/services';
import {SliderBox} from 'react-native-image-slider-box';
const dimensions = Dimensions.get('screen');
const Home = () => {
  console.log(dimensions);
  const [moviesImages, setMoviesImages] = useState([]);
  const [popularMovies, setPopularMovies] = useState('');
  const [error, setError] = useState({});

  useEffect(() => {
    getUpcomingMovies()
      .then(movies => {
        const moviesImagesArray = [];
        movies.map(movie => {
          moviesImagesArray.push(
            'https://image.tmdb.org/t/p/w500' + movie.poster_path,
          );
        });
        setMoviesImages(moviesImagesArray);
      })
      .catch(err => {
        setError(err);
      });
    getPopularMovies()
      .then(movies => {
        setPopularMovies(movies);
      })
      .catch(err => {
        setError(err);
      });
  }, []);

  return (
    <>
      <View style={styles.sliderContainer}>
        <SliderBox
          images={moviesImages}
          sliderBoxHeight={dimensions.height / 1.5}
          autoplay={true}
          circleLoop={true}
        />
      </View>
      <View style={styles.carousel}>
        <FlatList
          data={popularMovies}
          renderItem={({item}) => <Text>{item.title}</Text>}></FlatList>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  sliderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  carousel: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Home;
