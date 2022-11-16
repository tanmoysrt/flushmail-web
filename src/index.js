import "@fontsource/nunito/400.css";
import "@fontsource/nunito/600.css";
import "@fontsource/nunito/700.css";

import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider, extendTheme } from '@chakra-ui/react'

import "./sass/main.scss"

import Navbar from "./components/navbar";
import MailBox from "./components/mailbox";

const theme = extendTheme({
  fonts:{
    heading : `'Nunito', sans-serif`,
    body : `'Nunito', sans-serif`
  },
})


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Navbar />
      <MailBox />
    </ChakraProvider>
  </React.StrictMode>
);