import { configureStore } from "@reduxjs/toolkit";
import generatorReducer from "./features/generatorSlice";
export default configureStore({
  reducer: {
    generator: generatorReducer,
  },
});
