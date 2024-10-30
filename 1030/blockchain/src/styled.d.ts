import "styled-components";

declare module "styled-components"{
  export interface ITheme{
    textColor: string;
    bgColor: string;
    accentColor: string;
  }
}
