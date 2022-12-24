import {ColorSchemeProvider,MantineProvider,Paper,ColorScheme,} from "@mantine/core";
import { useHotkeys, useLocalStorage } from "@mantine/hooks";
import "./App.css";
import "./index.css";
import AppShellDesign from "./components/AppShell/AppShellDesign";
import "./styles.css";
import React from "react";


export default function App() {
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: "mantine-color-scheme",
    defaultValue: "light",
    getInitialValueInEffect: true,
  });

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  useHotkeys([["mod+J", () => toggleColorScheme()]]);

  return (
    <>
      <div className="App">
        <ColorSchemeProvider
          colorScheme={colorScheme}
          toggleColorScheme={toggleColorScheme}
        >
          <MantineProvider theme={{ colorScheme }}>
            <Paper>
              <AppShellDesign />
            </Paper>
          </MantineProvider>
        </ColorSchemeProvider>
      </div>
    </>
  );
}
