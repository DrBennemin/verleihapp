import React from "react";
import GlobalStyles from "./GlobalStyles";
import List from "./pages/List";
import ItemDetail from "./pages/ItemDetail";
import NewRent from "./pages/NewRent";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainMenu from "./pages/MainMenu";
import ItemEdit from "./pages/ItemEdit";

function App() {
  return (
    <>
      <GlobalStyles />
      <Router>
        <main>
          <Switch>
            <Route path="/item-detail">
              <ItemDetail />
            </Route>
            <Route path="/edit/item">
              <ItemEdit />
            </Route>
            <Route path="/new/rent">
              <NewRent />
            </Route>
            <Route path="/menu">
              <MainMenu />
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
