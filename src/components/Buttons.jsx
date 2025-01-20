import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { translateText } from "../redux/actions";

const Buttons = () => {
  const { textToTranslate } = useSelector((store) => store.translate);
  const dispatch = useDispatch();

  return (
    <button
      disabled={!textToTranslate.trim()}
      className="bg-zinc-200 text-center px-5 py-3 rounded-md font-semibold hover:ring-2 hover:bg-zinc-900 cursor-pointer transition mt-3 disabled:brightness-50 text-black hover:text-white"
      onClick={() => {
        dispatch(translateText());
      }}
    >
      Translate
    </button>
  );
};

export default Buttons;
