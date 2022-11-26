import React from "react";
import { Routes, Route } from "react-router";

import "./App.css";
// import GenderSelection from "./Pages/GenderSelectionPage/GenderSelection";
import QuizPage from "./Pages/QuizPage/QuizPage";
import Checkout from "./Pages/Checkout/Checkout";
import PrePayment from "./Pages/Prepayment/Prepayment";
import Login from "./Pages/Login/login";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/mint/generated-questionary" element={<QuizPage />} />
        <Route path="/preCheckout" element={<PrePayment />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<QuizPage />} />
        <Route path="*" element={<QuizPage />} />
      </Routes>
    </div>
  );
}

export default App;
