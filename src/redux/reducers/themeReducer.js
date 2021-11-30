import {
  dark_mode,
  light_mode
} from "../types";

const initialState = {
  mode: "light",
};

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case light_mode:
      return {
        ...state,
        mode: "light",
      };
    case dark_mode:
      return {
        ...state,
        mode: "dark",
      };

    default:
      return state;
  }
};
export default themeReducer;