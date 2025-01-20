import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setText } from "../redux/slices/translateSlice";
import Loader from "./Loader";

const Container = () => {
  const dispatch = useDispatch();

  const { isLoading, textToTranslate, translatedText } = useSelector(
    (store) => store.translate
  );

  return (
    <div className="flex gap-3 mt-5 md:gap-[105px] max-md:flex-col">
      <div className="flex-1">
        <textarea
          onChange={(e) => {
            dispatch(setText(e.target.value));
          }}
          value={textToTranslate}
          className="w-full min-h-[250px] max-h-[500px] text-black text-[20px] rounded p-[10px]"
        ></textarea>
      </div>
      <div className="flex-1 relative">
        <textarea
          disabled
          className="w-full min-h-[250px] max-h-[500px] text-black text-[20px] rounded p-[10px] bg-zinc-400"
          value={translatedText}
        ></textarea>

        {isLoading && <Loader />}
      </div>
    </div>
  );
};

export default Container;
