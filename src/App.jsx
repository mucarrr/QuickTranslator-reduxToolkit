import Language from "./components/Language";
import Container from "./components/Container";
import Buttons from "./components/Buttons";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getLanguages } from "./redux/actions";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLanguages());
  }, []);

  return (
    <div className="bg-zinc-700 min-h-screen text-white grid place-items-center">
      <div className="w-[80vw] max-w-[1100px] flex flex-col justify-center py-5">
        <h1 className="text-center text-4xl font-semibold mb-7">
          QuickTranslator
        </h1>
        <Language />
        <Container />
        <Buttons />
      </div>
    </div>
  );
};

export default App;
