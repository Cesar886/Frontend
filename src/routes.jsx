// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HeaderMenu } from "./prymary/DoubleHeader";
import App from "./App";

function Routes() {
  return (
    <App>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HeaderMenu />} />
        </Routes>
      </BrowserRouter>
    </App>
  );
}

export default Routes;
