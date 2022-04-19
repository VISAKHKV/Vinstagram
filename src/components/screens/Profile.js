import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Image,
  StyleSheet,
  ScrollView,
} from 'react-native';
import React from 'react';

// Constants
import {SIZES} from '../Constants';
import Photos from './Photos';

const Profile = () => {
  return (
    <>
      <StatusBar
        animated={true}
        backgroundColor="#f1f1f1"
        barStyle="dark-content"
        StatusBarAnimation="fade"
      />
      <SafeAreaView style={{marginHorizontal: SIZES.wp('3%')}}>
        <Text style={styles.headingText}>@ profile1</Text>
        <View style={styles.topView}>
          <View style={styles.imageView}>
            <Image
              source={require('../../assets/images/profile-pic.jpeg')}
              style={{width: '100%', height: '100%', borderRadius: 100}}
              resizeMode="cover"
            />
          </View>
          <View style={styles.rightView}>
            <View style={styles.likeView}>
              <Text style={{fontSize: SIZES.wp('5%')}}>143</Text>
              <Text>Posts</Text>
            </View>
            <View style={styles.likeView}>
              <Text style={{fontSize: SIZES.wp('5%')}}>9999</Text>
              <Text>Followers</Text>
            </View>
            <View style={styles.likeView}>
              <Text style={{fontSize: SIZES.wp('5%')}}>1</Text>
              <Text>Following</Text>
            </View>
          </View>
        </View>
        <View style={styles.bioView}>
          <Text numberOfLines={1} ellipsizeMode="tail" style={styles.bioText}>
            💜★ 𝓟я𝕆𝒇𝓘ｌ𝔢 ➀ 😲♦
          </Text>
          <Text numberOfLines={1} ellipsizeMode="tail" style={styles.bioText}>
            °”ˆ˜¨ 🎀 𝒹𝒶𝒹𝒹𝓎'𝓈 𝓆𝓊𝑒𝑒𝓃 🎀 ¨˜ˆ”°¹~
          </Text>
          <Text numberOfLines={1} ellipsizeMode="tail" style={styles.bioText}>
            𝔀𝓲𝓼𝓱 𝓶𝓮 𝓸𝓷 𝓯𝓮𝓫 30
          </Text>
        </View>
        <View style={{marginTop: SIZES.hp('1%'), marginHorizontal: '-3%'}}>
          <Photos />
        </View>
      </SafeAreaView>
    </>
  );
};

export default Profile;

const styles = StyleSheet.create({
  headingText: {
    fontSize: SIZES.wp('7%'),
    marginBottom: SIZES.hp('2%'),
  },
  topView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageView: {
    width: 100,
    height: 100,
    borderRadius: 100,
    borderColor: '#242424',
    overflow: 'hidden',
  },
  rightView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: SIZES.wp('60%'),
    marginLeft: SIZES.wp('5%'),
  },
  likeView: {
    alignItems: 'center',
  },
  bioView: {
    marginTop: SIZES.hp('2%'),
  },
  bioText: {
    fontSize: 18,
  },
});
