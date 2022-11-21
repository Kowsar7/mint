import React from "react";
import { Routes, Route } from "react-router";

import "./App.css";
import Layout from "./hoc/Layout/Layout";
import GenderSelection from "./Pages/GenderSelectionPage/GenderSelection";
import QuizPage from "./Pages/QuizPage/QuizPage";
import Checkout from "./Pages/Checkout/Checkout";
import Login from "./Pages/Login/login";

function App() {
  return (
    <div className="App">
      <Layout />
      <Routes>
        <Route path="/mint/generated-questionary" element={<QuizPage />} />
        <Route path="/mint/checkout" element={<Checkout />} />
        <Route path="/mint/login" element={<Login />} />
        <Route path="/" element={<GenderSelection />} />
        <Route path="*" element={<GenderSelection />} />
      </Routes>
    </div>
  );
}

export default App;
