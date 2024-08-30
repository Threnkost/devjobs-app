import "@/styles/globals.css";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { theme } from '@/theme/chakraTheme'
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>DevJobs</title>
      </Head>
      <ChakraProvider theme={theme}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  )
}
