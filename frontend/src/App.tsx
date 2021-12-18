import { CssBaseline, ThemeProvider, Typography } from "@mui/material";
import { MainRoute } from "./routes/MainRoute";
import { darkTheme } from "./themes";

const App = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <MainRoute />
    </ThemeProvider>
  );
};

export default App;
