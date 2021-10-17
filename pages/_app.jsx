import { ChakraProvider } from '@chakra-ui/react';
import { Global, css } from '@emotion/react';
import 'focus-visible/dist/focus-visible';
import theme from '../styles/theme';

const GlobalStyles = css`
  .js-focus-visible :focus:not([data-focus-visible-added]) {
    outline: none;
    box-shadow: none;
  }
`;

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Global styles={GlobalStyles} />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
