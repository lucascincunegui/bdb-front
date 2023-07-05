import { createTheme } from "@material-ui/core";

export const green = "#003c22";

export const yellow = "#fed227";

export const white = "#fff";

export const lightGray = "#d7d7d7";

export const black = "#000";

export const bgPage = "#f0f0f0d9";

export const Theme = createTheme({
  palette: {
    primary: {
      main: yellow,
    },
    secondary: {
      main: green,
    },
  },
});
