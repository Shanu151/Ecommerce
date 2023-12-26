import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  Systrace,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {typography} from '../../../Typography';
import {themes} from '../../../Theme';

const ListFooterComponent = ({navigation}: any) => {
  const Images = {
    footerfirstimage: require('../../../assets/images/footerfirstimage.png'),
    footersecondimage: require('../../../assets/images/footersecondimage.png'),
    footerthirdimage: require('../../../assets/images/footerthirdimage.png'),
  };
  return (
    <View style={styles.bottomlayout}>
      <View style={styles.layout}>
        <TouchableOpacity
          style={{flex: 1}}
          onPress={() => {
            navigation.navigate('Summersale');
          }}>
          <ImageBackground
            source={Images.footerfirstimage}
            style={styles.imgstyle}>
            <Text
              style={[
                typography.Headline,
                {color: themes.primery, padding: 15},
              ]}>
              Summer Sale
            </Text>
          </ImageBackground>
        </TouchableOpacity>
        <TouchableOpacity
          style={{flex: 1}}
          onPress={() => {
            navigation.navigate('Blacksale');
          }}>
          <ImageBackground
            source={Images.footersecondimage}
            style={[styles.imgstyle, styles.footersecondimage]}>
            <Text style={[typography.Headline, {padding: 15}]}>Black</Text>
          </ImageBackground>
        </TouchableOpacity>
      </View>
      <View style={styles.layout}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('MensHoodie');
          }}>
          <ImageBackground
            source={Images.footerthirdimage}
            style={styles.footerthirdimage}>
            <Text style={[typography.Headline, {padding: 15}]}>
              Men’s hoodies
            </Text>
          </ImageBackground>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ListFooterComponent;

const styles = StyleSheet.create({
  bottomlayout: {
    flex: 1,
    height: Dimensions.get('window').height * 0.5,
    flexDirection: 'row',
  },
  imgstyle: {
    height: '100%',
    width: '100%',
  },
  layout: {
    width: '50%',
    flex: 1,
  },
  bottomsecondlaout: {
    width: '50%',
  },
  footersecondimage: {
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
  },
  footerthirdimage: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
