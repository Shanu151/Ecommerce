import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {typography} from '../../../Typography';
import Summercard from '../Cards/Summercard';

const Summermiddlecomp = ({item, index}: any) => {
  return (
    <View style={styles.container}>
      <View>
        <Summercard item={item} />
      </View>
    </View>
  );
};

export default Summermiddlecomp;

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
});
