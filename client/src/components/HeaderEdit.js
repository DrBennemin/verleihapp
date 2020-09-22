import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import MoreSrc from "../assets/more.svg";
import ArrowLeft from "../assets/arrow-left.svg";
import Header from "./Header";

HeaderEdit.propTypes = {
  title: PropTypes.string,
};

function HeaderEdit({ title }) {
  const history = useHistory();
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <Header
      title={title}
      left={
        <Link onClick={() => history.goBack()}>
          <img src={ArrowLeft} alt="arrow-left" />
        </Link>
      }
      right={
        <More>
          <MoreButton onClick={() => setToggleMenu(!toggleMenu)}>
            <img src={MoreSrc} alt="more-button" />
          </MoreButton>
          {toggleMenu && (
            <Options>
              <li>
                <Link to="/edit/article">Bearbeiten</Link>
              </li>

              <li>Löschen</li>
            </Options>
          )}
        </More>
      }
    />
  );
}

const More = styled.div`
  display: grid;
  justify-self: center;
  align-self: center;
`;

const MoreButton = styled.button`
  background: transparent;
  border: none;
  outline: none;
`;

const Options = styled.ul`
  position: fixed;
  padding: 0;
  margin: 2em 0 0 -6em;
  background-color: white;
  color: black;
  border: 1px solid #ededed;
  border-radius: 5px;
  list-style: none;
  & li {
    padding: 0.8em 0.8em;
  }
  & a,
  a:hover,
  a:focus,
  a:visited,
  a:active {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: black;
  }
`;

export default HeaderEdit;
