import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'
import linkReducer from '../features/links/linkSlice'
import profileReducer from '../features/profile/profileSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    links: linkReducer,
    profile: profileReducer
  },
});
