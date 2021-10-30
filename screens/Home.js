import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Dimensions, ScrollView} from 'react-native';
import {
  getPopularMovies,
  getPopularTv,
  getUpcomingMovies,
  getMusicalMovies,
  getFantasyMovies,
} from '../services/services';
import {SliderBox} from 'react-native-image-slider-box';
import List from '../components/List';
const dimensions = Dimensions.get('screen');
const Home = () => {
  const [moviesImages, setMoviesImages] = useState();
  const [popularMovies, setPopularMovies] = useState();
  const [popularTv, setPopularTv] = useState();
  const [musicalMovies, setMusicalMovies] = useState();
  const [fantasyMovies, setFantasyMovies] = useState();
  const [error, setError] = useState(false);

  const getData = () => {
    return Promise.all([
      getUpcomingMovies(),
      getPopularMovies(),
      getPopularTv(),
      getMusicalMovies(),
      getFantasyMovies(),
    ]);
  };

  useEffect(() => {
    getData()
      .then(
        ([
          upcomingMoviesData,
          popularMoviesData,
          popularTvData,
          musicalMoviesData,
          fantasyMoviesData,
        ]) => {
          const moviesImagesArray = [];
          upcomingMoviesData.map(movie => {
            moviesImagesArray.push(
              'https://image.tmdb.org/t/p/w500' + movie.poster_path,
            );
          });
          setMoviesImages(moviesImagesArray);
          setPopularMovies(popularMoviesData);
          setPopularTv(popularTvData);
          setMusicalMovies(musicalMoviesData);
          setFantasyMovies(fantasyMoviesData);
        },
      )
      .catch(err => {
        setError(err);
      });
  }, []);

  return (
    <>
      <ScrollView>
        {moviesImages && (
          <View style={styles.sliderContainer}>
            <SliderBox
              images={moviesImages}
              sliderBoxHeight={dimensions.height / 1.5}
              autoplay={true}
              circleLoop={true}
            />
          </View>
        )}

        {popularMovies && (
          <View style={styles.carousel}>
            <List title="Most popular movies" content={popularMovies} />
          </View>
        )}

        {popularTv && (
          <View style={styles.carousel}>
            <List title="Popular Series" content={popularTv} />
          </View>
        )}

        {musicalMovies && (
          <View style={styles.carousel}>
            <List title="Musical" content={musicalMovies} />
          </View>
        )}

        {fantasyMovies && (
          <View style={styles.carousel}>
            <List title="Fantasy" content={fantasyMovies} />
          </View>
        )}
      </ScrollView>
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
