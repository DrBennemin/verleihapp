import React from "react";
import GlobalStyles from "./GlobalStyles";
import styled from "@emotion/styled";
import Header from "./components/Header";
import List from "./pages/List";
import ArticleDetail from "./pages/ArticleDetail";
import RentalProcess from "./pages/RentalProcess";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
  padding: 10px 0 30px 0;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Header />
        <Main>
          <Switch>
            <Route path="/article-detail">
              <ArticleDetail />
            </Route>
            <Route path="/new/rent">
              <RentalProcess />
            </Route>
            <Route path="/">
              <List />
            </Route>
          </Switch>
        </Main>
        <Footer />
      </Router>
    </>
  );
}

export default App;
