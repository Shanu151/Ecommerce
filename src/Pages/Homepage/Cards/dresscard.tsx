import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {style} from '../../../styles/styles';

const dresscard = ({index, item}: any) => {
  return (
    <View style={styles.card}>
      <View>
        <ImageBackground
          source={{uri: item.image}}
          style={styles.image}
          resizeMode="contain">
          <Text style={style.rate}>Rat: {item.rating.rate}</Text>
        </ImageBackground>
      </View>
      <View style={style.content}>
        <Text style={style.categorytext}>
          {item.title.length > 20
            ? item.title.substring(0, 35) + '...'
            : item.title}
        </Text>
      </View>
    </View>
  );
};

export default dresscard;

const styles = StyleSheet.create({
  card: {
    // height: Dimensions.get('window').width * 0.6,
    width: Dimensions.get('window').width * 0.4,
    gap: 12,
    marginRight: 20,
    backgroundColor: '#fff',
    paddingVertical: 10,
    shadowColor: '#000',
    borderRadius: 6,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
  image: {
    height: 200,
  },
});
