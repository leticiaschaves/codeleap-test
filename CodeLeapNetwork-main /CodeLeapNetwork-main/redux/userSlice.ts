import { createSlice } from '@reduxjs/toolkit';
import { IUserState } from '../types';

const initialState: IUserState = {
  username: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUsername: (state, action) => {
      state.username = action.payload;
    },
  },
});

export const { setUsername } = userSlice.actions;

export default userSlice.reducer;
