import { MantineProvider } from "@mantine/core";
import App from "./App";
import "./fonts.css";

const MantineWrapper = () => {
  return (
    <MantineProvider
      theme={{
        colorScheme: "dark",
        fontFamily: "Dina, sans-serif",
        fontFamilyMonospace: "Dina, monospace, sans-serif",
        headings: {
          fontFamily: "ChakraPetch, Dina, sans-serif",
        },
      }}
      withGlobalStyles
      withNormalizeCSS
    >
      <App />
    </MantineProvider>
  );
};

export default MantineWrapper;
