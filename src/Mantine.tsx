import { MantineProvider } from "@mantine/core";
import App from "./App";
import "./fonts.css";

function Wrapper() {
  return (
    <MantineProvider
      theme={{
        colorScheme: "dark",
        fontFamily: "Dina, sans-serif",
        fontFamilyMonospace: "Dina, monospace, sans-serif",
        headings: {
          fontFamily: "SpaceMono, Dina, sans-serif",
        },
      }}
      withGlobalStyles
      withNormalizeCSS
    >
      <App />
    </MantineProvider>
  );
}

export default Wrapper;
