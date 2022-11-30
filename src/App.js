import React from "react";
import { Routes, Route } from "react-router";

import "./App.css";
// import GenderSelection from "./Pages/GenderSelectionPage/GenderSelection";
import asyncComponent from "./hoc/asyncComponent/asyncComponent";

const AsyncPreCheckout = asyncComponent(() => {
  return import("./Pages/Prepayment/Prepayment");
});

const AsyncCheckout = asyncComponent(() => {
  return import("./Pages/Checkout/Checkout");
});

const AsyncLogin = asyncComponent(() => {
  return import("./Pages/Login/login");
});

const AsyncQuiz = asyncComponent(() => {
  return import("./Pages/QuizPage/QuizPage");
});

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/preCheckout" element={<AsyncPreCheckout />} />
        <Route path="/checkout" element={<AsyncCheckout />} />
        <Route path="/signIn" element={<AsyncLogin />} />
        <Route path="/" exact element={<AsyncQuiz />} />
      </Routes>
    </div>
  );
}

export default App;
