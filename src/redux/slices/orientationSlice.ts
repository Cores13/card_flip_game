import {createSlice} from '@reduxjs/toolkit';

export const orientationSlice = createSlice({
  name: 'orientation',
  initialState: {
    orientation: 'portrait',
  },
  reducers: {
    flip: (state, action) => {
      state.orientation = action.payload.orientation;
    },
  },
});

// Action creators are generated for each case reducer function
export const {flip} = orientationSlice.actions;

export const selectOrientation = (state: any) => state.orientation;

export default orientationSlice.reducer;
