import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';

// Packages
import {useNavigation} from '@react-navigation/native';

// Constants
import {SIZES} from '../Constants';

const Header = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.headerView}>
      <Text style={styles.LogoText}>𝓥𝓲𝓷𝓼𝓽𝓪𝓰𝓻𝓪𝓶</Text>
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.logoView}
        onPress={() => navigation.navigate('Profile')}>
        <Image
          source={require('../../assets/images/profile-pic.jpeg')}
          style={{width: '100%', height: '100%', borderRadius: 100}}
          resizeMode="cover"
        />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  LogoText: {
    color: '#141414',
    fontSize: 30,
  },
  headerView: {
    height: 70,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  logoView: {
    width: 60,
    height: 60,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: '#242424',
    overflow: 'hidden',
  },
});
