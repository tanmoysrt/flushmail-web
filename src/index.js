import "@fontsource/nunito/400.css";
import "@fontsource/nunito/600.css";
import "@fontsource/nunito/700.css";

import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import MailContainer from "./components/container"

import "./sass/main.scss"

const theme = extendTheme({
  fonts:{
    heading : `'Nunito', sans-serif`,
    body : `'Nunito', sans-serif`
  },
})



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <ChakraProvider theme={theme}>
      <MailContainer/>
    </ChakraProvider>
  // </React.StrictMode>
);