import React from "react";
import { Link, useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import Header from "./Header";
import ArrowLeft from "../assets/arrow-left.svg";

HeaderGoBack.propTypes = {
  title: PropTypes.string,
};

function HeaderGoBack({ title }) {
  const history = useHistory();

  return (
    <Header
      title={<Link to="/">{title}</Link>}
      left={
        <Link onClick={() => history.goBack()}>
          <img src={ArrowLeft} alt="arrow-left" />
        </Link>
      }
    />
  );
}

export default HeaderGoBack;
