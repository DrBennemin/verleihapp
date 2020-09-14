import React from "react";
import GlobalStyles from "./GlobalStyles";
import styled from "@emotion/styled";
import Header from "./components/Header";
import List from "./pages/List";
import ArticleDetail from "./pages/ArticleDetail";
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
        <Switch>
          <Main>
            <Route path="/article-detail">
              <ArticleDetail />
            </Route>
            <Route path="/">
              <List />
            </Route>
          </Main>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
