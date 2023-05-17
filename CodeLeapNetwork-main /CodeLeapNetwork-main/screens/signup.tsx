import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { View, Text, StyleSheet, StatusBar, Dimensions } from 'react-native';
import { setUsername } from '../redux/userSlice';
import CustomInput from '../components/form/customInput';
import CustomButton from '../components/form/customButton';
import { screenWidthbreakpoints } from '../components/utilities';
import {
  CONTENT_MAX_WIDTH,
  FONT_SIZE_LG,
  FULL_WIDTH,
  PRIMARY_COLOR,
  SECONDARY_COLOR,
  SPACER_MD,
  SPACER_SM
} from "../components/theme";

const screen = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#DDDDDD',
    paddingHorizontal: SPACER_MD,
  },
  signup_container: {
    padding: SPACER_MD,
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: SECONDARY_COLOR,
    width: screen.width >= screenWidthbreakpoints.sm ? CONTENT_MAX_WIDTH : FULL_WIDTH,
  },
  singup_title: {
    fontSize: 32,
    color: PRIMARY_COLOR,
    fontWeight: '700',
  },
  signup_button: {
    alignSelf: 'flex-end',
    paddingVertical: SPACER_SM,
    paddingHorizontal: SPACER_MD,
    backgroundColor: PRIMARY_COLOR,
  },
  signup_button_text: {
    fontWeight: '700',
    fontSize: FONT_SIZE_LG,
    color: SECONDARY_COLOR,
  },
});

export default function Signup() {
  const dispatch = useDispatch();

  const [name, setName] = useState('');

  const handleSubmit = () => {
    if (name) {
      dispatch(setUsername(name));
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.signup_container}>
        <Text style={styles.singup_title}>Welcome to CodeLeap network!</Text>
        <CustomInput
          value={name}
          onChangeText={setName}
          placeholder="John doe"
          label="Please enter your username"
        />
        <CustomButton text="ENTER" disabled={!name} onPress={handleSubmit} />
      </View>
    </View>
  );
}
