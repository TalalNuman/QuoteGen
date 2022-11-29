import { createSlice } from "@reduxjs/toolkit";

export const generatorSlice = createSlice({
  name: "generator",
  initialState: {
    name: "",
    username: "",
    description: "",
    imgUrl: "",
    nameColor: "",
    contentColor: "",
    innerColor: "#fff",
    outerColor: "#000",
    social: 0,
  },
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setUsername: (state, action) => {
      state.username = action.payload;
    },
    setDescription: (state, action) => {
      state.description = action.payload;
    },
    setImgUrl: (state, action) => {
      state.imgUrl = action.payload;
    },
    setNameColor: (state, action) => {
      state.nameColor = action.payload;
    },
    setContentColor: (state, action) => {
      state.contentColor = action.payload;
    },
    setInnerColor: (state, action) => {
      state.innerColor = action.payload;
    },
    setOuterColor: (state, action) => {
      state.outerColor = action.payload;
    },
    setSocial: (state, action) => {
      state.social = action.payload;
    },
  },
});

// For Dispatch
export const {
  setName,
  setUsername,
  setDescription,
  setImgUrl,
  setNameColor,
  setContentColor,
  setInnerColor,
  setOuterColor,
  setSocial,
} = generatorSlice.actions;

// For ConfigureStore
export default generatorSlice.reducer;
