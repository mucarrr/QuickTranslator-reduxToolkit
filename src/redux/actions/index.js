import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../utils/api";

export const getLanguages = createAsyncThunk(
  "language/getLanguages",
  async () => {
    const res = await api.get("/getLanguages");
    return res.data.data.languages;
  }
);

export const translateText = createAsyncThunk(
  "translate/translateText",
  async (arg, { getState }) => {
    const { translate } = getState(); //useselector gibi bisi. storedaki elemanlara ulasiyor. onlardan sadece translate i istedigim icin oldu const ederek aldim
    //** GET STATE AKSIYON ICINDE STORE A ABONE OLMAYI SAGLIYOR */
    const params = new URLSearchParams();
    params.set("source_language", translate.sourceLang.value);
    params.set("target_language", translate.targetLang.value);
    params.set("text", translate.textToTranslate);

    const res = await api.post("/translate", params);

    console.log(res.data.data.translatedText);

    return res.data.data.translatedText;
  }
);
