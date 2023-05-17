import {
  StyleProp,
  ViewStyle
} from 'react-native';
import store from "../redux/store";

export interface ICustomButtonProps {
  text: string;
  ghost?: boolean;
  loading?: boolean;
  disabled?: boolean;
  onPress: () => void;
  buttonStyle?: StyleProp<ViewStyle>;
}

export interface ICustomInputProps {
  label: string;
  value: string;
  inputProps?: any;
  placeholder: string;
  inputStyle?: StyleProp<ViewStyle>;
  onChangeText: (text: string) => void;
  containerStyle?: StyleProp<ViewStyle>;
}

export interface IIconProps {
  size: number;
  color: string;
  thickness?: number;
}

export interface IPrePost {
  title: string;
  content: string;
  username: string;
}

export interface IPost extends IPrePost{
  id: number;
  created_datetime: string;
}

export interface IModalProps {
  post: IPost;
  handleCloseModal: () => void;
}

export interface IPostFooterProps {
  showLoading: boolean;
}

export interface IPostState {
  posts: IPost[];
  offset: number;
  status: 'loading' | 'error' | 'success' | 'idle';
}

export interface IUserState {
  username: string;
}

export type StackParamList = {
  Feed: undefined;
  Signup: undefined;
}

export interface ApiPostsResponse {
  count: number;
  next: string | null;
  previuous: string | null;
  results: IPost[]
}

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch