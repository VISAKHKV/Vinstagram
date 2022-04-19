import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import {SIZES} from '../Constants';

const sourceData = [
  {id: 1, name: 'test1', src: require('../../assets/images/post-image.jpeg')},
  {id: 2, name: 'test2', src: require('../../assets/images/post-image.jpeg')},
  {id: 3, name: 'test3', src: require('../../assets/images/post-image.jpeg')},
  {id: 4, name: 'test4', src: require('../../assets/images/post-image.jpeg')},
  {id: 5, name: 'test5', src: require('../../assets/images/post-image.jpeg')},
  {id: 6, name: 'test6', src: require('../../assets/images/post-image.jpeg')},
  {id: 7, name: 'test7', src: require('../../assets/images/post-image.jpeg')},
  {id: 8, name: 'test8', src: require('../../assets/images/post-image.jpeg')},
  {id: 9, name: 'test9', src: require('../../assets/images/post-image.jpeg')},
  {id: 10, name: 'tes10', src: require('../../assets/images/post-image.jpeg')},
];

const Photos = () => {
  return (
    <View style={styles.mainView}>
      <View style={styles.headerView}>
        <Text style={styles.headerText}>Header</Text>
      </View>
      <FlatList
        data={sourceData}
        renderItem={({item}) => (
          <View
            style={{
              //   flex: 1,
              flexDirection: 'column',
              margin: 1,
              width: SIZES.wp('33%'),
            }}>
            <Image style={styles.imageThumbnail} source={item.src} />
          </View>
        )}
        numColumns={3}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default Photos;

const styles = StyleSheet.create({
  mainView: {
    backgroundColor: 'white',
    // flex: 1,
  },
  headerView: {
    height: SIZES.hp('6%'),
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#141414',
  },
  imageThumbnail: {
    justifyContent: 'center',
    alignItems: 'center',
    height: SIZES.hp('20%'),
    width: '100%',
  },
});
