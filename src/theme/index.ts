import { DefaultTheme } from 'styled-components';

import typographyVariants from './typographyVariants';
import breakpoints from './breakpoints';
import colors from './colors';

const theme: DefaultTheme = {
  colors,
  typographyVariants,
  breakpoints,
  borderRadius: '8px',
  fontFamily: "'Rubik', sans-serif",
  transition: '200ms ease-in-out',
};

export default theme;
