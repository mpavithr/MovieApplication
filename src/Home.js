import React from 'react';
import { View, Text } from 'react-native';
import Styles from './Styles';
import TrendingMovies from './Components/TrendingMovies';

const Home = props => {
    return (
        <View style = {Styles.sectionBg}>
            <TrendingMovies 
                title="Trending Movies"
                url="/discover/movie"
                navigation={props.navigation}
            />
        </View>
    )
}
export default Home