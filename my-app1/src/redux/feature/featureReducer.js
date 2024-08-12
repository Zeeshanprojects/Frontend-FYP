import { createSlice } from '@reduxjs/toolkit'

export const featureSlice = createSlice({
  name: 'feature',
  initialState: {
    allFeatures: [],
  },
  reducers: {
    addFeatures: (state, action) => {
      state.allFeatures = action.payload;
    },
    removeAllFeatures: (state) => {
      state.allFeatures = [];
    }
  },
})
export const { addFeatures, removeAllFeatures } = featureSlice.actions;
// Action creators are generated for each case reducer function
export default featureSlice.reducer