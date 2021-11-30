import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { darkMode, lightMode } from "../redux/actions/themeAction";

function Theme() {
  const mode = useSelector((c) => c.themeReducer.mode);

  const dispatch = useDispatch();
  return (
    <div className={`layout ${mode}`}>
      <button type="button" onClick={() => dispatch(lightMode())}>
        Light
      </button>
      <button type="button" onClick={() => dispatch(darkMode())}>
        Dark
      </button>
    </div>
  );
}

export default Theme;
