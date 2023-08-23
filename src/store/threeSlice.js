import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  checked: 'Main',
  cameraPosition: { x: 2.5, y: 1.5, z: 2.5 },
  targetPosition: { x: 0.15, y: 0.5, z: 0.75 },
};

export const threeSlice = createSlice({
  name: 'three-slice',
  initialState,
  reducers: {
    main: state => {
      state.checked = 'Main';
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
    inside: (state, { payload }) => {
      state.checked = 'Seat';
      state.cameraPosition = { x: 0, y: payload < 400 ? 0.5 : 0.9, z: payload < 400 ? -0.2 : -0.2 };
      state.targetPosition = { x: 0.2, y: payload < 400 ? 0.3 : 0.6, z: payload < 400 ? 1.2 : 0.8 };
    },
    side: state => {
      state.checked = 'Side';
      state.cameraPosition = { x: 4, y: 1.5, z: 0 };
      state.targetPosition = { x: 0, y: 1, z: 0 };
    }
  }
});

export const { main, front, back, inside, side } = threeSlice.actions;
export default threeSlice.reducer;
