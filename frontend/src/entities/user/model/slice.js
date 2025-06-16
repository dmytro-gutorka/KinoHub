import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: 'dima',
  bookmarks: [],
  fakeAuth: {
    login: 1111,
    password: 2222,
  },
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {},
    toggleBookmark(state, action) {
      const movieId = action.payload;

      if (state.user && !state.bookmarks.includes(movieId)) state.bookmarks.push(movieId);
      else state.bookmarks = state.bookmarks.filter((id) => id !== movieId);
    },
  },
});

export const { toggleBookmark } = userSlice.actions;

export default userSlice.reducer;
