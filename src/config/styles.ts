import styled, { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle<{}>`
    *{
        margin: 0;
        font-family: "Roboto","Helvetica","Arial",sans-serif;
        padding: 0;
    }
    `;
export default GlobalStyles;

export const theme = {
  colors: {
    primaryWhite: "#fff",
    primaryBlack: "#000",
    primaryGrey: "#918b7f",
    primaryDarkBlue: "#424379",
    primaryLightBlue: "#6ccff0",
    primaryBlue: "#4271dd",
  },
  fonts: {
    primary: "Montserrat",
    secondary: "Roboto",
  },
  fontSizes: {
    small: "1em",
    medium: "2em",
    large: "2.5em",
  },
};

export const ErrorSpan = styled.span`
  color: red;
  font-size: 0.8rem;
`;
