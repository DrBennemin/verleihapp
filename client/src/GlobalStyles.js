import React from "react";
import { Global, css } from "@emotion/core";
const GlobalCSS = () => {
  return (
    <Global
      styles={css`
        *,
        *:before,
        *:after {
          box-sizing: border-box;
        }
        #root {
          @import url("https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap");
          font-family: lato;
          width: 100vw;
          height: 100vh;
          display: grid;
          grid-template-rows: auto 1fr 10%;
        }
        html {
        }
        body {
          margin: 0;
          background-color: #f6f6f6;
        }
        h1 {
          margin: 0;
        }
        code {
        }
      `}
    />
  );
};
export default GlobalCSS;
