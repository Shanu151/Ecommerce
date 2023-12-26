import {
  FlatList,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import Newcollectionbanner from '../Pages/Homepage/components/Newcollectionbanner';
import Newcolmiddlecomp from '../Pages/Homepage/components/Newcolmiddlecomp';
import Newcollastcomp from '../Pages/Homepage/components/Newcollastcomp';
import {data} from '../Layout/SaleCard';

const Newcollectio = () => {
  return (
    <FlatList
      contentContainerStyle={{backgroundColor: '#000', flexGrow: 1}}
      data={[1]}
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={<Newcollectionbanner title="Street Banner" />}
      renderItem={Newcolmiddlecomp}
      // ListFooterComponent={Newcollastcomp}
    />
  );
};

export default Newcollectio;

const styles = StyleSheet.create({});
