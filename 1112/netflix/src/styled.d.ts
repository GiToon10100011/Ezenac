import "styled-components";
declare module "styled-components" {
  export interface DefaultTheme {
    red: string;
    black: {
      veryDark: string;
      bitDark: string;
      dark: string;
    };
    white: {
      veryLight: string;
      bitLight: string;
    };
    fonts: {
      raleway: string;
    };
  }
}
