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
          display: flex;
          flex-direction: column;
        }
        html {
        }
        body {
          margin: 0;
          padding: 0;
          background-color: #f6f6f6;
          overflow: auto;
          font-size: 1rem;
        }

        h1 {
          margin: 0;
          padding: 0;
        }
        label {
          display: block;
          font-size: 0.8rem;
        }
        input {
          display: block;
          min-width: 100%;
          padding: 8px 10px;
          border-radius: 50px;
          border: none;
          background-color: #fff;
          margin: 10px 0;
        }
        input:focus {
          outline: none;
        }
        ::placeholder {
          color: #9d9d9c;
        }
        select {
          min-width: 100%;
          padding: 8px 10px;
          border-radius: 50px;
          border: none;
          background-color: #fff;
          margin: 10px 0;
        }
        select:focus {
          outline: none;
        }
        code {
        }
      `}
    />
  );
};
export default GlobalCSS;
