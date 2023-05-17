import React from 'react';
import { useSelector } from 'react-redux';
import {
  Keyboard,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import PostForm from './postForm';
import { getAllPosts, getPostsStatus } from '../../redux/postsSlice';
import {FONT_SIZE_LG, FULL_WIDTH, PRIMARY_COLOR, SPACER_MD} from "../theme";

const styles = StyleSheet.create({
  loading_container: {
    marginTop: SPACER_MD,
    alignItems: 'center',
  },
  empty_container: {
    width: FULL_WIDTH,
    marginTop: SPACER_MD,
    alignItems: 'center',
  },
  empty_text: {
    fontSize: FONT_SIZE_LG,
    color: PRIMARY_COLOR,
    fontWeight: '500',
    textAlign: 'center',
  },
});

export default function PostHeader() {
  const posts = useSelector(getAllPosts);
  const status = useSelector(getPostsStatus);

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View>
        <PostForm />
        {status !== 'loading' && posts.length === 0 && (
          <View style={styles.empty_container}>
            <Text style={styles.empty_text}>No posts found 😟</Text>
          </View>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
}
