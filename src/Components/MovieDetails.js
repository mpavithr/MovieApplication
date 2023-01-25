import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
} from 'react-native';
import {IMAGE_POSTER_URL} from '../config';
import {GET} from '../Services/API';
import Styles from '../Styles';
import Loader from './Loader';

const MovieDetails = props => {
  const [loading, setLoading] = useState(true);
  const [details, setDetails] = useState();

  useEffect(() => {
    const getDetails = async () => {
      const data = await GET(`/movie/${props.route.params.movieId}`);
      setDetails(data);
      setLoading(false);
    };

    getDetails();
  }, []);

  const getGenre = () => {
    return details.genres.map(genre => (
      <View style={Styles.genreContainer}>
        <Text style={Styles.genre}>{genre.name}</Text>
      </View>
    ));
  };

  const getProductionCompany = () => {
    return details.production_companies.map(company => (
      <View style={Styles.companyContainer}>
        <Image
            source={{uri: `${IMAGE_POSTER_URL}${company.logo_path}`}}
            style={Styles.companyImage} 
        />
      </View>
    ));
  };

  return (
    <ScrollView style={Styles.sectionBg}>
      {loading ? (
        <Loader />
      ) : (
        <View style={Styles.container}>
          
          <Text style={Styles.detailsMovieTitle}>{details.original_title}</Text>
          <View>
            <Image
              source={{uri: `${IMAGE_POSTER_URL}${details.poster_path}`}}
              style={Styles.image}
            />
          </View>

          <Text style={Styles.heading}>OVERVIEW</Text>
          <Text style={Styles.overview}>{details.overview}</Text>

          <View style={Styles.detailsContainer}>
            <View>
              <Text style={Styles.heading}>DURATION</Text>
              <Text style={Styles.details}>{details.runtime} min.</Text>
            </View>

            <View>
              <Text style={Styles.heading}>RELEASE DATE</Text>
              <Text style={Styles.details}>{details.release_date}</Text>
            </View>
          </View>

          <Text style={Styles.heading}>GENRE</Text>
          <View style={Styles.row}>
            {getGenre()}
          </View>

          <Text style={Styles.heading}>PRODUCTION COMPANIES</Text>
          <View style={Styles.row}>
            {getProductionCompany()}
          </View>

          <View>
            <Text style={Styles.heading}>SNEAKPEEK</Text>
            <Image
              source={{uri: `${IMAGE_POSTER_URL}${details.backdrop_path}`}}
              style={Styles.stillImage}
            />
          </View>

          <View>
            <Text style={Styles.heading}>CAST</Text>
          </View>
        </View>
      )}
    </ScrollView>
  );
};

export default MovieDetails;