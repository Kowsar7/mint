import React from "react";
import { Routes, Route } from "react-router";
import ReactGA from "react-ga";

import "./App.css";
// import GenderSelection from "./Pages/GenderSelectionPage/GenderSelection";
import QuizPage from "./Pages/QuizPage/QuizPage";
import Checkout from "./Pages/Checkout/Checkout";
import PrePayment from "./Pages/Prepayment/Prepayment";
import Login from "./Pages/Login/login";

ReactGA.initialize("UA-200586481-1");
ReactGA.pageview(window.location.pathname + window.location.search);

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/preCheckout" element={<PrePayment />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" exact element={<QuizPage />} />
      </Routes>
    </div>
  );
}

export default App;
