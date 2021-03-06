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
            ๐โ ๐ั๐๐๐๏ฝ๐ข โ ๐ฒโฆ
          </Text>
          <Text numberOfLines={1} ellipsizeMode="tail" style={styles.bioText}>
            ยฐโหหยจ ๐ ๐น๐ถ๐น๐น๐'๐ ๐๐๐๐๐ ๐ ยจหหโยฐยน~
          </Text>
          <Text numberOfLines={1} ellipsizeMode="tail" style={styles.bioText}>
            ๐๐ฒ๐ผ๐ฑ ๐ถ๐ฎ ๐ธ๐ท ๐ฏ๐ฎ๐ซ 30
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
