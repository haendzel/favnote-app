import React from 'react';
import GlobalStyle from '../src/theme/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from '../src/theme/mainTheme'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  (Story) => (
  <>
  <GlobalStyle />
  <ThemeProvider theme={theme}>
  <Story />
  </ThemeProvider>
  </>
  ),
];