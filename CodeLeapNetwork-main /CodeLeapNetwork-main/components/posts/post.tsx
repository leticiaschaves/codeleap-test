import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Modal, Pressable, StyleSheet, Text, View } from 'react-native';
import { IPost, RootState } from '../../types';
import EditIcon from '../icons/edit';
import TrashIcon from '../icons/trash';
import EditPost from '../modals/editPost';
import DeletePost from '../modals/deletePost';
import { getTimeDifference } from '../utilities';
import {
  FONT_SIZE_3XL,
  FONT_SIZE_LG,
  FONT_SIZE_SM,
  FONT_SIZE_XS,
  PRIMARY_COLOR,
  SECONDARY_COLOR,
  SPACER_MD,
  SPACER_SM
} from "../theme";

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    marginBottom: SPACER_MD,
    borderColor: '#999999',
    flexDirection: 'column',
  },
  header: {
    padding: SPACER_SM,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: PRIMARY_COLOR,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: FONT_SIZE_LG,
    color: SECONDARY_COLOR,
    fontWeight: '700',
  },
  actions: {
    flexDirection: 'row',
  },
  icon: {
    marginLeft: SPACER_MD - 5,
  },
  body: {
    marginTop: SPACER_MD,
    flexDirection: 'column',
    paddingBottom: SPACER_MD,
    paddingHorizontal: SPACER_SM,
  },
  info_container: {
    marginBottom: SPACER_MD,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  info_text: {
    fontSize: FONT_SIZE_XS,
    color: '#777777',
    fontWeight: '700',
  },
  content: {
    fontSize: FONT_SIZE_SM,
    color: PRIMARY_COLOR,
    fontWeight: '400',
  },
});

export default function Post({ post }: { post: IPost }) {
  const username = useSelector((state: RootState) => state.user.username);

  const [modalVisible, setModalVisible] = useState(false);
  const [modalType, setModalType] = useState<null | 'edit' | 'delete'>(null);

  const handleCloseModal = () => {
    setModalType(null);
    setModalVisible(false);
  };

  const handleShowModal = (type: 'edit' | 'delete') => {
    setModalType(type);
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{post.title}</Text>
        {post.username === username && (
          <View style={styles.actions}>
            <Pressable
              style={styles.icon}
              onPress={() => handleShowModal('edit')}
            >
              <EditIcon size={FONT_SIZE_3XL} color={SECONDARY_COLOR} />
            </Pressable>
            <Pressable
              style={styles.icon}
              onPress={() => handleShowModal('delete')}
            >
              <TrashIcon size={FONT_SIZE_3XL} color={SECONDARY_COLOR} />
            </Pressable>
          </View>
        )}
      </View>
      <View style={styles.body}>
        <View style={styles.info_container}>
          <Text style={styles.info_text}>{`@${post.username}`}</Text>
          <Text>{getTimeDifference(post.created_datetime)}</Text>
        </View>
        <Text style={styles.content}>{post.content}</Text>
      </View>
      <Modal transparent animationType="fade" visible={modalVisible}>
        {modalType === 'edit' ? (
          <EditPost post={post} handleCloseModal={handleCloseModal} />
        ) : (
          <DeletePost post={post} handleCloseModal={handleCloseModal} />
        )}
      </Modal>
    </View>
  );
}
