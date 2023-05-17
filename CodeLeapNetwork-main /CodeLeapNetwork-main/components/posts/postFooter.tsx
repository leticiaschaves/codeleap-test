import React from 'react';
import { View, StyleSheet } from 'react-native';
import Loading from '../loading';
import { IPostFooterProps } from '../../types';
import {PRIMARY_COLOR} from "../theme";

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
});

export default function PostFooter(props: IPostFooterProps) {
  const { showLoading } = props;

  if (showLoading)
    return (
      <View style={styles.container}>
        <Loading size={60} color={PRIMARY_COLOR} />
      </View>
    );

  return null;
}
