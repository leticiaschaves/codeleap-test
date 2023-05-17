import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { IModalProps } from '../../types';
import CustomButton from '../form/customButton';
import { removePost } from '../../redux/postsSlice';
import { deletePost } from '../../services/codeleap';
import { modalContainerStyle, modalContentBaseStyle } from './styles';
import {FONT_SIZE_XL, SPACER_MD} from "../theme";

const styles = StyleSheet.create({
  message: {
    fontSize: FONT_SIZE_XL,
    fontWeight: '400',
  },
  buttons_container: {
    marginTop: SPACER_MD,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
});

export default function DeletePost(props: IModalProps) {
  const { post, handleCloseModal } = props;

  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);

  const handleClose = () => {
    handleCloseModal();
  };

  const handleDelete = () => {
    setLoading(true);
    deletePost(post.id)
      .then(() => {
        dispatch(removePost(post.id));
        Alert.alert('Success', 'The post was deleted successfully.');
        handleCloseModal();
      })
      .catch(() => setLoading(false))
  };

  return (
    <View style={modalContainerStyle}>
      <View style={modalContentBaseStyle}>
        <Text style={styles.message}>
          Are you sure you want to delete {post.title} ?
        </Text>
        <View style={styles.buttons_container}>
          {!loading && (
            <CustomButton ghost text="Cancel" onPress={handleClose} />
          )}
          <CustomButton
            ghost
            text="OK"
            loading={loading}
            onPress={handleDelete}
            buttonStyle={{ marginLeft: 20 }}
          />
        </View>
      </View>
    </View>
  );
}
