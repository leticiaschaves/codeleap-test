import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';
import { View, Text, StyleSheet, Pressable, Alert } from 'react-native';
import { IModalProps } from '../../types';
import CustomInput from '../form/customInput';
import CustomButton from '../form/customButton';
import { editPost } from '../../redux/postsSlice';
import { updatePost } from '../../services/codeleap';
import { modalContainerStyle, modalContentBaseStyle } from './styles';
import {FONT_SIZE_3XL, FONT_SIZE_4XL, PRIMARY_COLOR, SPACER_SM, TEXT_FIELD_HEIGHT} from "../theme";

const styles = StyleSheet.create({
  modalContent: {
    paddingVertical: SPACER_SM,
  },
  modal_header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: FONT_SIZE_3XL,
    color: PRIMARY_COLOR,
    fontWeight: '700',
  },
});

export default function EditPost(props: IModalProps) {
  const { post, handleCloseModal } = props;

  const dispatch = useDispatch();

  const [title, setTitle] = useState(post.title);
  const [loading, setLoading] = useState(false);
  const [content, setContent] = useState(post.content);

  const handleClose = () => {
    handleCloseModal();
  };

  const handleSave = () => {
    setLoading(true);

    const updatedPost = {
      ...post,
      title,
      content,
    };

    updatePost(updatedPost)
      .then(() => {
        dispatch(editPost(updatedPost));
        Alert.alert('Success', 'The post was edited successfully.');
        handleClose();
      })
      .catch(() => setLoading(false))
  };


  return (
    <View style={modalContainerStyle}>
      <View style={[modalContentBaseStyle, styles.modalContent]}>
        <View style={styles.modal_header}>
          <Text style={styles.title}>Edit item</Text>
          <Pressable onPress={handleClose}>
            <Ionicons name="md-close" size={FONT_SIZE_4XL} color={PRIMARY_COLOR} />
          </Pressable>
        </View>
        <CustomInput
          value={title}
          onChangeText={setTitle}
          label="Title"
          placeholder="Hello world"
        />
        <CustomInput
          value={content}
          onChangeText={setContent}
          inputStyle={{ height: TEXT_FIELD_HEIGHT }}
          inputProps={{ multiline: true }}
          containerStyle={{ marginTop: -SPACER_SM }}
          label="Content"
          placeholder="Content here"
        />
        <CustomButton
          text="SAVE"
          loading={loading}
          onPress={handleSave}
          disabled={!title || !content}
        />
      </View>
    </View>
  );
}
