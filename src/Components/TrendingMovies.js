import React, { useEffect, useState } from 'react';
import {View, Text, FlatList, Image, ScrollView, TouchableOpacity} from 'react-native';
import {GET} from '../Services/API';
import {IMAGE_POSTER_URL} from '../config';
import Styles from '../Styles';
import Loader from './Loader';

const TrendingMovies = props => {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const getMovies = async () => {
            const response = await GET(props.url);
            setMovies(response.results);
            setLoading(false);
        };

        getMovies();
    }, []);

    return (
        <View style={Styles.container}>
            {loading ? (
                <Loader />
            ) : (
                <View>
                    <Text style={Styles.titleHeading}>{props.title}</Text>
                    <FlatList
                        ItemSeparatorComponent={
                            () => <View style={{height: 20}} />
                        }
                        keyExtractor={item => item.id}
                        data={movies}
                        numColumns={3}
                        renderItem={item => displayMovies(item, props)}
                    />
                </View>
            )}
        </View>
    )
};

const displayMovies = ({item}, props) => {
    return (
      <TouchableOpacity
        onPress={() => {
          props.navigation.push('movieDetails', {movieId: item.id});
        }}
        style={{marginHorizontal: 10}}>
        <Image
          source={{uri: `${IMAGE_POSTER_URL}${item.poster_path}`}}
          style={Styles.image} 
          resizeMode={'cover'}
        />
      </TouchableOpacity>
    );
  };
  

export default TrendingMovies;