import { StyleSheet, Dimensions } from "react-native";
import Constants from './Constants';

const deviceHeight = Dimensions.get('window').height;

const Styles = StyleSheet.create({
    sectionBg: {
        backgroundColor: Constants.baseColor,
        height: deviceHeight,
    },
    container: {
        padding: 15,
        flex: 1,
        paddingBottom: 150,
    },
    item: {
        padding: 20,
        fontSize: 15,
        marginTop: 5,
        color: Constants.fadedColor,
        textAlign: 'center'
    },
    image: {
        alignSelf: 'center',
        width: 116,
        height: 174,
    },
    stillImage: {
        width: 266,
        height: 150,
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginHorizontal: 10,
    },
    titleHeading: {
        fontSize: 18,
        color: Constants.secondaryColor,
        margin: 10,
        textAlign: 'center',
    },
    heading: {
        fontSize: 18,
        color: Constants.secondaryColor,
        margin: 10,
    },
    detailsMovieTitle: {
        padding: 20,
        fontSize: 28,
        color: Constants.secondaryColor,
        textAlign: 'center',
    },
    overview: {
        color: Constants.textColor,
        marginHorizontal: 10,
        textAlign: 'justify',
        fontSize: 16,
    },
    details: {
        color: Constants.textColor,
        fontSize: 15,
        marginLeft: 10,
        paddingVertical: 5,
    },
    genreContainer: {
        borderWidth: 1,
        borderRadius: 5,
        borderColor: Constants.textColor,
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginHorizontal: 10,
        marginBottom: 5,
    },
    genre: {
        color: Constants.textColor,
        fontSize: 16,
    },
    row: {
        display: 'flex', 
        flexDirection: 'row', 
        flexWrap: 'wrap',
    },
    castImage: {
        height: 70,
        width: 70,
        borderRadius: 500,
    },
    castName: {
        width: 60,
        color: Constants.textColor,
        fontSize: 12,
        textAlign: 'center',
        marginTop: 10,
    },
    castContainer: {
        margin: 10,
    }
});

export default Styles;