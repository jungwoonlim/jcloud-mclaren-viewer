import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  checked: 'Reset',
  cameraPosition: { x: 2.5, y: 1.5, z: 2.5 },
  targetPosition: { x: 0.15, y: 0.5, z: 0.75 },
};

export const threeSlice = createSlice({
  name: 'three-slice',
  initialState,
  reducers: {
    reset: state => {
      state.checked = 'Reset';
      state.cameraPosition = initialState.cameraPosition;
      state.targetPosition = initialState.targetPosition;
    },
    front: state => {
      state.checked = 'Front';
      state.cameraPosition = { x: 0, y: 2, z: 4 };
      state.targetPosition = { x: 0, y: 0.5, z: 0 };
    },
    back: state => {
      state.checked = 'Back';
      state.cameraPosition = { x: 0, y: 2, z: -4 };
      state.targetPosition = { x: 0, y: 0.5, z: 0 };
    },
    inside: state => {
      state.checked = 'Seat';
      state.cameraPosition = { x: 0, y: 0.9, z: -0.2 };
      state.targetPosition = { x: 0.2, y: 0.6, z: 0.8 };
    },
    side: state => {
      state.checked = 'Side';
      state.cameraPosition = { x: 4, y: 1.5, z: 0 };
      state.targetPosition = { x: 0, y: 1, z: 0 };
    }
  }
});

export const { reset, front, back, inside, side } = threeSlice.actions;
export default threeSlice.reducer;
