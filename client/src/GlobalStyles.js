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
          grid-template-rows: 10% 1fr 10%;
        }
        html {
        }
        body {
          margin: 0;
          background-color: #d8d8d8;
        }
        code {
        }
      `}
    />
  );
};
export default GlobalCSS;
