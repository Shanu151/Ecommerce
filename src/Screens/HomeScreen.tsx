import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ListFooterComponent from '../Pages/Homepage/components/ListFooterComponent';
import ListHeaderComponent from '../Pages/Homepage/components/ListHeaderComponent';
import renderItem from '../Pages/Homepage/components/renderItem';

const HomeScreen = ({navigation}: any) => {
  return (
    <FlatList
      contentContainerStyle={{backgroundColor: '#000', flexGrow: 1}}
      data={[1]}
      renderItem={renderItem}
      ListHeaderComponent={<ListHeaderComponent navigation={navigation} />}
      ListFooterComponent={<ListFooterComponent navigation={navigation} />}
    />
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  listHeaderstyle: {},
  bottomlayout: {},
  bottomfirstlaout: {},
  bottomsecondlaout: {},
});
