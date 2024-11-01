import "styled-components";

declare module "styled-components" {
  export interface ITheme {
    bgColor: string;
    textColor: string;
    accentColor: string;
    cardBgColor: string;
  }
}
