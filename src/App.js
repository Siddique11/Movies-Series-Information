import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import Landing from "./components/home/Landing";

import Movie from "./components/home/Movie";

import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Navbar />
          <Route exact path="/" component={Landing} />
          <Route exact path="/movie/:id" component={Movie} />
          <Footer />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
