import type { AppProps } from "next/app";
import { GlobalStyle } from "../components";
import { ThemeProvider } from "styled-components";
import { theme } from "../config/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
