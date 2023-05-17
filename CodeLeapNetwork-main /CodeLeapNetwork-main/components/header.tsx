import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import { screenWidthbreakpoints } from './utilities';
import {FONT_SIZE_3XL, FULL_WIDTH, HEADER_MAX_WIDTH, PRIMARY_COLOR, SECONDARY_COLOR, SPACER_MD} from "./theme";

const screen = Dimensions.get('screen');

const styles = StyleSheet.create({
  background: {
    width: FULL_WIDTH,
    backgroundColor: PRIMARY_COLOR,
    alignItems:
      screen.width >= screenWidthbreakpoints.sm ? 'center' : 'stretch',
  },
  container: {
    padding: SPACER_MD,
    width: screen.width >= screenWidthbreakpoints.sm ? HEADER_MAX_WIDTH : FULL_WIDTH,
  },
  title: {
    fontSize: FONT_SIZE_3XL,
    color: SECONDARY_COLOR,
    fontWeight: '700',
  },
});

export default function Header() {
  return (
    <SafeAreaView style={styles.background}>
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Text style={styles.title}>CodeLeap Network</Text>
      </View>
    </SafeAreaView>
  );
}
