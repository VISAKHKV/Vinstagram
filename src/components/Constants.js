import {Dimensions} from 'react-native';
const {height, width} = Dimensions.get('window');
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const SIZES = {
  hp: hp,
  wp: wp,
};
