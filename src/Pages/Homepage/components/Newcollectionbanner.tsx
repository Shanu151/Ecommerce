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
import {typography} from '../../../Typography';

class topheadername {
  title: string | undefined;
}

const Newcollectionbanner = ({title}: topheadername) => {
  const Images = {
    newcollection: require('../../../assets/images/newcollection.png'),
  };
  return (
    <View style={{flex: 1}}>
      <ImageBackground
        style={[
          style.topbanner,
          {flex: 1, height: Dimensions.get('window').height * 0.25},
        ]}
        source={Images.newcollection}>
        <Text style={typography.Headline}>{title}</Text>
      </ImageBackground>
    </View>
  );
};

export default Newcollectionbanner;

const styles = StyleSheet.create({});
