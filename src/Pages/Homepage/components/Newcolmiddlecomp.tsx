import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SaleCard from '../../../Layout/SaleCard';
import NewCard from '../../../Layout/NewCard';
import {typography} from '../../../Typography';

const Newcolmiddlecomp = () => {
  return (
    <View style={styles.container}>
      <View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            height: 100,
          }}>
          <View>
            <Text style={[typography.Headline]}>Sale</Text>
            <Text style={typography.Smalltext}>Super summer sale</Text>
          </View>
          <View>
            <Text
              style={[typography.Smalltext, {color: '#fff', paddingTop: 10}]}>
              View all
            </Text>
          </View>
        </View>
        <SaleCard />
      </View>
      <View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            height: 100,
          }}>
          <View>
            <Text style={[typography.Headline]}>New</Text>
            <Text style={typography.Smalltext}>
              You’ve never seen it before!
            </Text>
          </View>
          <View>
            <Text
              style={[typography.Smalltext, {color: '#fff', paddingTop: 10}]}>
              View all
            </Text>
          </View>
        </View>
        <NewCard />
      </View>
    </View>
  );
};

export default Newcolmiddlecomp;

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
});
