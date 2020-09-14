import React from "react";
import GlobalStyles from "./GlobalStyles";
import Header from "./components/Header";
import List from "./pages/List";
import Footer from "./components/Footer";
/* import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"; */

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <List></List>
      <Footer />
    </>
  );
}

export default App;
