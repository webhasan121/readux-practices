import { dark_mode, light_mode } from "../types";

export const lightMode = () => {
  return {
    type: light_mode,
  };
};
export const darkMode = () => {
  return {
    type: dark_mode,
  };
};
