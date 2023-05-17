import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { ICustomInputProps } from '../../types';
import {FONT_SIZE_MD, FONT_SIZE_SM, PRIMARY_COLOR, SPACER_MD, SPACER_SM} from "../theme";

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    marginVertical: SPACER_MD,
  },
  label: {
    fontSize: FONT_SIZE_MD,
    color: PRIMARY_COLOR,
    marginBottom: SPACER_MD,
  },
  input: {
    borderWidth: 1,
    padding: SPACER_SM,
    color: PRIMARY_COLOR,
    fontSize: FONT_SIZE_SM,
    borderColor: '#777777',
  },
});

export default function CustomInput(props: ICustomInputProps) {
  const {
    label,
    value,
    placeholder,
    onChangeText,
    inputProps,
    inputStyle,
    containerStyle,
  } = props;

  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        value={value}
        placeholder={placeholder}
        onChangeText={onChangeText}
        style={[styles.input, inputStyle]}
        {...inputProps}
      />
    </View>
  );
}
