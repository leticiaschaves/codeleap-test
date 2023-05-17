import React from 'react';
import { ICustomButtonProps } from '../../types';
import Loading from '../loading';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import {
  DISABLED_COLOR,
  FONT_SIZE_3XL,
  FONT_SIZE_MD,
  PRIMARY_COLOR,
  SECONDARY_COLOR,
  SPACER_MD,
  SPACER_SM
} from "../theme";

const styles = StyleSheet.create({
  button: {
    paddingVertical: SPACER_SM,
    paddingHorizontal: SPACER_MD,
    alignSelf: 'flex-end',
  },
  button_text: {
    fontSize: FONT_SIZE_MD,
    color: SECONDARY_COLOR,
    fontWeight: '700',
  },
  loading: {
    marginRight: SPACER_MD,
    alignSelf: 'flex-end',
  },
});

export default function CustomButton(props: ICustomButtonProps) {
  const {
    text,
    onPress,
    ghost = false,
    loading = false,
    disabled = false,
    buttonStyle = undefined,
  } = props;

  const NORMAL_BUTTON_STYLE = {
    backgroundColor: disabled ? DISABLED_COLOR : PRIMARY_COLOR,
  };
  const GHOST_BUTTON_STYLE = {
    borderColor: disabled ? DISABLED_COLOR : PRIMARY_COLOR,
    borderWidth: 2,
  };

  if (loading)
    return (
      <View style={styles.loading}>
        <Loading size={FONT_SIZE_3XL} color={PRIMARY_COLOR} thickness={2} />
      </View>
    );

  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={[
        styles.button,
        ghost ? GHOST_BUTTON_STYLE : NORMAL_BUTTON_STYLE,
        buttonStyle,
      ]}
    >
      <Text style={[styles.button_text, { color: ghost ? PRIMARY_COLOR : SECONDARY_COLOR }]}>
        {text}
      </Text>
    </Pressable>
  );
}
