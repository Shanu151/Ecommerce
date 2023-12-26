import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {typography} from '../../../Typography';

const ListHeaderComponent = ({navigation}: any) => {
  const Images = require('../../../assets/images/headerimage.png');
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('newcollection');
      }}
      style={styles.listHeaderstyle}>
      <ImageBackground
        source={Images}
        style={{
          height: Dimensions.get('window').height * 0.5,
          justifyContent: 'flex-end',
          alignItems: 'flex-end',
        }}>
        <Text style={[typography.Headline, {padding: 15}]}>New collection</Text>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default ListHeaderComponent;

const styles = StyleSheet.create({
  listHeaderstyle: {
    flex: 0.5,
  },
});
