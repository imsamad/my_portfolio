import PropTypes from "prop-types";
import Head from "next/head";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider } from "@emotion/react";

import theme from "../mui/theme";
import createEmotionCache from "../mui/createEmotionCache";
import Box from "@mui/system/Box";
import TopBtn from "../components/TopBtn";

const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>Abdus Samad</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box
          sx={{
            overflow: "hidden",
            maxWidth: "100vw",
          }}
        >
          <Component {...pageProps} />
          <TopBtn />
          <style>{`
          html{
            scroll-behavior: smooth;
          }
          `}</style>
        </Box>
      </ThemeProvider>
    </CacheProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};
