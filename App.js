import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

// Components
import LandingPage from './src/components/screens/LandingPage';
import Navigation from './src/components/Navigation';

const App = () => {
  return (
    <>
      <Navigation />
    </>
  );
};

export default App;
