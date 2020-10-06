import React from "react";
import GlobalStyles from "./GlobalStyles";
import List from "./pages/List";
import ListAvailable from "./pages/ListAvailable";
import ListNotAvailable from "./pages/ListNotAvailable";
import ListRent from "./pages/ListRent";
import Rentals from "./pages/Rentals";
import ItemDetail from "./pages/ItemDetail";
import NewRent from "./pages/NewRent";
import RentDetail from "./pages/RentDetail";
import NewItem from "./pages/NewItem";
import Footer from "./components/Footer";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import MainMenu from "./pages/MainMenu";
import ItemEdit from "./pages/ItemEdit";
import SearchResults from "./pages/SearchResults";

function App() {
  return (
    <>
      <GlobalStyles />
      <Router>
        <main>
          <Switch>
            <Route path="/item/detail/:id">
              <ItemDetail />
            </Route>
            <Route path="/rent/detail/:id">
              <RentDetail />
            </Route>
            <Route path="/item/edit/:id">
              <ItemEdit />
            </Route>
            <Route path="/new/rent">
              <NewRent />
            </Route>
            <Route path="/new/item">
              <NewItem />
            </Route>
            <Route path="/menu">
              <MainMenu />
            </Route>
            <Route path="/list/notavailable">
              <ListNotAvailable />
            </Route>
            <Route path="/list/available">
              <ListAvailable />
            </Route>
            <Route path="/list/rent">
              <ListRent />
            </Route>
            <Route path="/list">
              <List />
            </Route>
            <Route path="/rent">
              <Rentals />
            </Route>
            <Route path="/search">
              <SearchResults />
            </Route>
            <Route exact path="/">
              <Redirect to="/list" />
            </Route>
          </Switch>
        </main>
        <Footer />
      </Router>
    </>
  );
}

export default App;
