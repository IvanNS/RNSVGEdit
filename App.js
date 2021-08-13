import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { CanvasContextProvider } from './components/CanvasContext';
import ColorButton from './components/ColorButton';
import IconButton from './components/IconButton'
import LeftBar from './components/LeftBar';
import TopBar from './components/TopBar';
import Icon from './components/Icon';

export default function App() {
  return (
    <View style={styles.container}>
      <LeftBar></LeftBar>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});