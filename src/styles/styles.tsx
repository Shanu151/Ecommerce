import {Dimensions, StyleSheet} from 'react-native';
import {themes} from '../Theme';

export const style = StyleSheet.create({
  topbanner: {
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    padding: 15,
    paddingBottom: 30,
  },
  rate: {
    fontSize: 10,
    backgroundColor: themes.primery,
    // width: Dimensions.get('window').width * 0.14,
    color: '#fff',
    paddingHorizontal: 6,
    paddingVertical: 3,
    borderRadius: 20,
    position: 'absolute',
    top: -5,
    left: 5,
    textAlign: 'center',
  },
  categorytext: {
    fontSize: 14,
    color: themes.primery,
    fontWeight: '600',
    textTransform: 'capitalize',
  },
  content: {
    paddingHorizontal: 8,
  },
});
