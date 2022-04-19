import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import React, {useEffect, useState} from 'react';

//Constants
import {SIZES} from '../Constants';

// Images and Icons
import like from '../../assets/images/like.png';

// demmy Details
const userPosts = [
  {id: 1, name: 'test1'},
  {id: 2, name: 'test2'},
  {id: 3, name: 'test3'},
  {id: 4, name: 'test4'},
  {id: 5, name: 'test5'},
  {id: 6, name: 'test6'},
  {id: 7, name: 'test7'},
  {id: 8, name: 'test8'},
  {id: 9, name: 'test9'},
  {id: 10, name: 'test10'},
];

const Posts = () => {
  const [isLiked, setLiked] = useState(false);
  const [selectedId, setSelectedId] = useState([]);
  const [likedId, setLikedId] = useState([]);
  const [lastTap, setLastTap] = useState(null);

  // Double-tap handler
  handleDoubleTap = post => {
    const now = Date.now();
    const DOUBLE_PRESS_DELAY = 300;
    if (lastTap && now - lastTap < DOUBLE_PRESS_DELAY) {
      setLiked(!isLiked);
      likeHandling(post);
    } else {
      setLastTap(now);
    }

    return lastTap;
  };

  const unHiding = post => {
    let arr = [];
    arr = selectedId.filter(item => {
      return item !== post;
    });
    setSelectedId(arr);

    return selectedId;
  };

  const likeHandling = like => {
    let arr = [];
    arr = likedId.filter(item => {
      return item !== like;
    });
    likedId.includes(like) ? setLikedId(arr) : setLikedId([...likedId, like]);

    return likedId;
  };

  return userPosts.map(post => (
    <View style={styles.mainView} key={post.id}>
      <View style={styles.topView}>
        <Text style={styles.userName}>@ {post.name}</Text>
        {selectedId.includes(post.id) && (
          <TouchableOpacity
            style={styles.hideButton}
            activeOpacity={0.8}
            onPress={() => {
              unHiding(post.id);
            }}>
            <Text>UN HIDE</Text>
          </TouchableOpacity>
        )}
      </View>
      {!selectedId.includes(post.id) && (
        <>
          <TouchableWithoutFeedback
            style={styles.postView}
            onPress={() => {
              handleDoubleTap(post.id);
            }}>
            <Image
              source={require('../../assets/images/post-image.jpeg')}
              style={{width: '100%'}}
              resizeMode="cover"
            />
          </TouchableWithoutFeedback>
          <View style={styles.likeBox}>
            <TouchableOpacity
              style={[styles.likeButton]}
              activeOpacity={0.8}
              onPress={() => {
                setLiked(!isLiked);
                likeHandling(post.id);
              }}>
              {likedId.includes(post.id) ? (
                <Image
                  source={require('../../assets/images/unlike.png')}
                  style={{width: '100%'}}
                  resizeMode="contain"
                />
              ) : (
                <Image
                  source={require('../../assets/images/like.png')}
                  style={{width: '100%'}}
                  resizeMode="contain"
                />
              )}
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.hideButton}
              activeOpacity={0.8}
              onPress={() => {
                setSelectedId([...selectedId, post.id]);
              }}>
              <Text>HIDE</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  ));
};

export default Posts;

const styles = StyleSheet.create({
  mainView: {
    marginHorizontal: SIZES.wp('2%'),
    padding: SIZES.wp('2%'),
    backgroundColor: '#f7f3e4',
    borderRadius: 5,
    marginBottom: SIZES.hp('4%'),
  },
  topView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: SIZES.hp('1%'),
  },
  userName: {
    fontSize: SIZES.wp('5%'),
  },
  postView: {
    width: SIZES.wp('90%'),
  },
  likeBox: {
    marginTop: SIZES.hp('1%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  likeButton: {
    width: SIZES.hp('5%'),
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'orange',
  },
  hideButton: {
    width: SIZES.wp('20%'),
    height: SIZES.hp('5%'),
    borderRadius: 4,
    alignItems: 'center',
    backgroundColor: 'orange',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'orange',
  },
});
