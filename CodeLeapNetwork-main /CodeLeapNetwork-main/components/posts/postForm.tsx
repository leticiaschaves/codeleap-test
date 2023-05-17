import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, Text, StyleSheet, Alert } from 'react-native';
import Button from '../form/customButton';
import CustomInput from '../form/customInput';
import { addPost } from '../../redux/postsSlice';
import { createPost } from '../../services/codeleap';
import { RootState } from '../../types';
import {
  FONT_SIZE_MD,
  FONT_SIZE_XL,
  PRIMARY_COLOR,
  SECONDARY_COLOR,
  SPACER_MD,
  SPACER_SM,
  TEXT_FIELD_HEIGHT
} from "../theme";

const styles = StyleSheet.create({
  container: {
    padding: SPACER_MD,
    borderWidth: 1,
    borderColor: '#999999',
    marginBottom: SPACER_MD,
    flexDirection: 'column',
  },
  header: {
    fontSize: FONT_SIZE_XL,
    color: PRIMARY_COLOR,
    fontWeight: '700',
  },
  button: {
    alignSelf: 'flex-end',
    paddingVertical: SPACER_SM,
    paddingHorizontal: SPACER_MD,
    backgroundColor: PRIMARY_COLOR,
  },
  button_text: {
    fontWeight: '700',
    color: SECONDARY_COLOR,
    fontSize: FONT_SIZE_MD,
  },
});

export default function PostForm() {
  const dispatch = useDispatch();
  const username = useSelector((state: RootState) => state.user.username);

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);

  const clearStates = () => {
    setTitle('');
    setContent('');
  };

  const handleCreate = async () => {
    setLoading(true);
    await createPost({
      title,
      content,
      username,
    })
      .then(response => {
        dispatch(addPost(response));
        Alert.alert('Success', 'Your new post was created!');
        clearStates();
      })
      .finally(() => setLoading(false));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>What’s on your mind?</Text>
      <CustomInput
        value={title}
        onChangeText={setTitle}
        inputStyle={{ marginBottom: -SPACER_MD }}
        label="Title"
        placeholder="Hello world"
      />
      <CustomInput
        value={content}
        onChangeText={setContent}
        inputStyle={{ height: TEXT_FIELD_HEIGHT }}
        inputProps={{ multiline: true }}
        label="Content"
        placeholder="Content here"
      />
      <Button
        loading={loading}
        onPress={handleCreate}
        disabled={!title || !content}
        text="SAVE"
      />
    </View>
  );
}
