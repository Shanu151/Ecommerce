import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Newcollectionbanner from '../Pages/Homepage/components/Newcollectionbanner';
import Summermiddlecomp from '../Pages/Homepage/components/Summermiddlecomp';
import {data} from '../Layout/SaleCard';
import {typography} from '../Typography';

const Summersale = () => {
  return (
    <FlatList
      contentContainerStyle={{backgroundColor: '#000', flexGrow: 1}}
      data={data}
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={
        <View>
          <Newcollectionbanner title="Summer Sale" />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              height: 100,
              paddingHorizontal: 15,
            }}>
            <View>
              <Text style={[typography.Headline]}>Supar Sale</Text>
              <Text style={typography.Smalltext}>
                Super summer special sale
              </Text>
            </View>
            <View>
              <Text
                style={[typography.Smalltext, {color: '#fff', paddingTop: 10}]}>
                View all
              </Text>
            </View>
          </View>
        </View>
      }
      renderItem={Summermiddlecomp}
    />
  );
};

export default Summersale;

const styles = StyleSheet.create({});
