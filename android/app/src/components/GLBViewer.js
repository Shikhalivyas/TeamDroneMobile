import React from 'react';
import { Platform, View, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

export default function GLBViewer() {
  const source = Platform.OS === 'android'
    ? { uri: 'file:///android_asset/3dviewer.html' }
    : require('../../src/main/assets/3dviewer.html');

  return (
    <View style={styles.container}>
      <WebView
        originWhitelist={['*']}
        source={source}
        allowFileAccess
        allowUniversalAccessFromFileURLs
        style={styles.webview}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 300, // or whatever height you want
    borderWidth: 1,
    borderColor: '#ccc',
    margin: 10,
  },
  webview: {
    flex: 1,
    backgroundColor: 'transparent',
  },
});
