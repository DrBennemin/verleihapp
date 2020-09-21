import React from "react";
import GlobalStyles from "./GlobalStyles";
import List from "./pages/List";
import ArticleDetail from "./pages/ArticleDetail";
import NewRent from "./pages/NewRent";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <GlobalStyles />
      <Router>
        <main>
          <Switch>
            <Route path="/article-detail">
              <ArticleDetail />
            </Route>
            <Route path="/new/rent">
              <NewRent />
            </Route>
            <Route path="/">
              <List />
            </Route>
          </Switch>
        </main>
        <Footer />
      </Router>
    </>
  );
}

export default App;
