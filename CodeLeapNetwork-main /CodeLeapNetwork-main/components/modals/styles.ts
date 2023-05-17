import { Dimensions, StyleProp, ViewStyle } from 'react-native';
import { screenWidthbreakpoints } from '../utilities';
import {CONTENT_MAX_WIDTH, FULL_WIDTH, SECONDARY_COLOR, SPACER_MD} from "../theme";

const screenWidth = Dimensions.get('screen').width;

export const modalContainerStyle: StyleProp<ViewStyle> = {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  paddingHorizontal: SPACER_MD,
  backgroundColor: 'rgba(0, 0, 0, 0.6)',
};

export const modalContentBaseStyle: StyleProp<ViewStyle> = {
  padding: SPACER_MD,
  flexDirection: 'column',
  backgroundColor: SECONDARY_COLOR,
  width: screenWidth >= screenWidthbreakpoints.sm ? CONTENT_MAX_WIDTH : FULL_WIDTH,
};
