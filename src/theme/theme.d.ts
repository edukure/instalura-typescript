// https://styled-components.com/docs/api#create-a-declarations-file

// import original module declarations
import 'styled-components';

import typography from './typographyVariants';
import colors from './colors';
import breakpoints from './breakpoints';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string;
    fontFamily: string;
    transition: string;

    colors: typeof colors;
    breakpoints: typeof breakpoints;
    typographyVariants: typeof typography;
  }
}
