import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material";
import Layout from "components/layout/Layout";
import { createContext, useMemo, useState } from "react";
import App from "App";

const ColorModeContext = createContext({ toggleColorMode: () => {} });

function Root() {
  const [mode, setMode] = useState<"light" | "dark">("dark");
  const colorMode = useMemo(
    () => ({
      // The dark mode switch would invoke this method
      toggleColorMode: () => {
        setMode((prevMode: "light" | "dark") =>
          prevMode === "light" ? "dark" : "light"
        );
      },
    }),
    []
  );

  const theme = useMemo(
    () =>
      createTheme({
        typography: {
          fontFamily: "Red Hat Display",
        },
        palette: {
          mode,
        },
      }),
    [mode]
  );

  return (
    <Router>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <Layout theme={theme} colorMode={colorMode}>
            <App />
          </Layout>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </Router>
  );
}

export default Root;
