import { createSlice } from "@reduxjs/toolkit";
import { translateText } from "../actions";

const initialState = {
  sourceLang: {},
  targetLang: {},
  textToTranslate: "",
  translatedText: "",
  isLoading: false,
};

const translateSlice = createSlice({
  name: "translate",
  initialState,
  reducers: {
    setSource: (state, action) => {
      state.sourceLang = action.payload;
    },
    setTarget: (state, action) => {
      state.targetLang = action.payload;
    },
    setText: (state, action) => {
      state.textToTranslate = action.payload;
    },
    swap: (state) => {
      const currentSource = state.sourceLang;
      const currentTarget = state.targetLang;
      const currentText = state.textToTranslate;
      const currentTranslatedText = state.translatedText;
      state.sourceLang = currentTarget;
      state.targetLang = currentSource;
      state.textToTranslate = currentTranslatedText;
      state.translatedText = currentText;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(translateText.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(translateText.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.translatedText = payload;
    });
    builder.addCase(translateText.rejected, (state, { error }) => {
      state.isLoading = false;
      alert("A problem occurred while translating");
      alert(error.message);
    });
  },
});

export const { setSource, setTarget, setText, swap } = translateSlice.actions;

export default translateSlice.reducer;
