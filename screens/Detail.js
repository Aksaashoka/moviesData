import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import dateFormat from 'dateformat';
import {Rating} from 'react-native-ratings';
import {getMovie} from '../services/services';
import PlayButton from '../components/PlayButton';

const placeholderImage = require('../assets/images/poster-placeholder.png');
const height = Dimensions.get('screen').height;

const Detail = ({route, navigation}) => {
  const movieId = route.params.movieDetail.id;
  const [movieDetail, setMovieDetail] = useState();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    getMovie(movieId).then(movieData => {
      setMovieDetail(movieData);
      setLoaded(true);
    });
  }, []);
  return (
    <>
      {loaded && (
        <ScrollView>
          <Image
            resizeMode="cover"
            style={styles.movieImage}
            source={
              movieDetail.poster_path
                ? {
                    uri:
                      'https://image.tmdb.org/t/p/w500' +
                      movieDetail.poster_path,
                  }
                : placeholderImage
            }
          />
          <View style={styles.container}>
            <View>
              <PlayButton />
            </View>
            <Text style={styles.movieTitle}> {movieDetail.title}</Text>
            {movieDetail.genres && (
              <View style={styles.genresContainer}>
                {movieDetail.genres.map(genre => (
                  <Text styles={styles.genre} key={genre.id}>
                    {genre.name}
                  </Text>
                ))}
              </View>
            )}
            <Rating
              startingValue={movieDetail.vote_average / 2}
              readonly
              imageSize={30}
              tintColor="silver"
            />
            <Text style={styles.overview}>{movieDetail.overview}</Text>
            <Text
              style={{
                color: 'black',
              }}>
              {'Release date: ' +
                dateFormat(movieDetail.release_date, 'mmmm dd,	yyyy')}
            </Text>
          </View>
        </ScrollView>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  movieImage: {
    height: height / 2.5,
  },
  movieTitle: {
    color: 'black',
    fontSize: 24,
    marginVertical: 10,
  },
  genresContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  genre: {
    marginRight: 10,
    fontWeight: 'bold',
  },
  overview: {
    color: 'black',
    padding: 10,
  },
});
export default Detail;
