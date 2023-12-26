import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {data} from './SaleCard';
import dresscard from '../Pages/Homepage/Cards/dresscard';

const SupersummerCard = () => {
  return (
    <FlatList
      contentContainerStyle={styles.container}
      horizontal
      data={data}
      showsHorizontalScrollIndicator={false}
      renderItem={dresscard}
    />
  );
};

export default SupersummerCard;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
  },
});
