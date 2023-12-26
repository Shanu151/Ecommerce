import {StyleSheet} from 'react-native';
import {themes} from '../Theme';

export const typography = StyleSheet.create({
  Headline: {
    fontSize: 34,
    fontWeight: '700',
    color: themes.secondary,
  },
  Headline3: {
    fontSize: 18,
    fontWeight: '400',
  },
  Smalltext: {
    fontSize: 11,
    fontWeight: '400',
    color: themes.third,
  },
});
