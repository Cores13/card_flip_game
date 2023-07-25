import {configureStore} from '@reduxjs/toolkit';
import orientationReducer from './slices/orientationSlice';

export default configureStore({
  reducer: {
    orientation: orientationReducer,
  },
});
