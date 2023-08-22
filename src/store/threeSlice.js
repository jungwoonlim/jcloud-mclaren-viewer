import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cameraPosition: { x: 2.5, y: 1.5, z: 2.5 },
  targetPosition: { x: 0.15, y: 0.5, z: 0.75 },
};

export const threeSlice = createSlice({
  name: 'three-slice',
  initialState: {
    cameraPosition: { x: 2.5, y: 1.5, z: 2.5 },
    targetPosition: { x: 0.15, y: 0.5, z: 0.75 },
  },
  reducers: {
    reset: state => {
      state.cameraPosition = initialState.cameraPosition;
      state.targetPosition = initialState.targetPosition;
    },
    front: state => {
      state.cameraPosition = { x: 0, y: 0, z: 2.5 };
      state.targetPosition = { x: 0.15, y: 0.5, z: 0.75 };
    },
    back: state => {
      state.cameraPosition = { x: 0, y: 0, z: -2.5 };
      state.targetPosition = { x: 0.15, y: 0.5, z: 0.75 };
    },
    left: state => {
      state.cameraPosition = { x: -2.5, y: 0, z: 0 };
      state.targetPosition = { x: 0.15, y: 0.5, z: 0.75 };
    },
    right: state => {
      state.cameraPosition = { x: 2.5, y: 0, z: 0 };
      state.targetPosition = { x: 0.15, y: 0.5, z: 0.75 };
    },
  }
});

export const { reset, front, back, left, right } = threeSlice.actions;
export default threeSlice.reducer;
