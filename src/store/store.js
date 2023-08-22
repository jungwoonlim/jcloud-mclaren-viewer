import { configureStore } from '@reduxjs/toolkit';
import threeReducer from './threeSlice';

export default configureStore({
  reducer: {
    position: threeReducer
  },
});
