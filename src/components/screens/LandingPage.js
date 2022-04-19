import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Image,
  StatusBar,
} from 'react-native';
import React from 'react';

// components
import Header from '../includes/Header';
import Posts from './Posts';

const LandingPage = () => {
  return (
    <>
      <StatusBar
        animated={true}
        backgroundColor="#fff"
        barStyle="dark-content"
        StatusBarAnimation="fade"
      />
      <SafeAreaView style={{backgroundColor: '#fff'}}>
        <Header />
        <ScrollView showsVerticalScrollIndicator={false}>
          <Posts />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default LandingPage;
