import { createTheme } from "@mui/material";
import { blue } from "@mui/material/colors";
import "../fonts/fonts.css";

export const darkTheme = createTheme({
  palette: {
    primary: blue,
    mode: "dark",
  },
  typography: {
    fontFamily: "Inkfree",
  },
});

export const lightTheme = createTheme({
  palette: {
    primary: blue,
    mode: "light",
  },
  typography: {
    fontFamily: "Inkfree",
  },
});
