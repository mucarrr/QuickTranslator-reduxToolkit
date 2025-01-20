import React from "react";
import { FaExchangeAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import ReactSelect from "react-select";
import { setSource, setTarget, swap } from "../redux/slices/translateSlice";
import { translateText } from "../redux/actions";

const Language = () => {
  const dispatch = useDispatch();

  const { isLoading, languages } = useSelector((store) => store.language);

  const { sourceLang, targetLang, textToTranslate } = useSelector(
    (store) => store.translate
  );

  const formatted = languages.map((language) => ({
    value: language.code,
    label: language.name,
  }));
  return (
    <div className="flex gap-2 text-black">
      <ReactSelect
        options={formatted.filter((i) => i.value !== targetLang.value)}
        isLoading={isLoading}
        isDisabled={isLoading}
        value={sourceLang}
        className="flex-1"
        onChange={(selected) => {
          dispatch(setSource(selected));
        }}
      />
      <button
        className="bg-zinc-700 py-2 px-6 hover:bg-zinc-800 transition rounded text-white"
        onClick={() => {
          dispatch(swap());
        }}
      >
        <FaExchangeAlt />
      </button>
      <ReactSelect
        options={formatted.filter((i) => i.value !== sourceLang.value)}
        isLoading={isLoading}
        isDisabled={isLoading}
        value={targetLang}
        className="flex-1"
        onChange={(selected) => {
          dispatch(setTarget(selected));
          if (textToTranslate) {
            dispatch(translateText());
          }
        }}
      />
    </div>
  );
};

export default Language;
