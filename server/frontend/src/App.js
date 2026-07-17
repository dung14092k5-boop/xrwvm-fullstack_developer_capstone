import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import LoginPanel from "./components/Login/Login";
import Dealers from "./components/Dealers/Dealers";
import Dealer from "./components/Dealers/Dealer";
import PostReview from "./components/Dealers/PostReview";

function App() {
  return (
    <Routes>
      {/* Default */}
      <Route path="/" element={<Navigate to="/dealers" replace />} />

      {/* Authentication */}
      <Route path="/login" element={<LoginPanel />} />

      {/* Dealer Pages */}
      <Route path="/dealers" element={<Dealers />} />
      <Route path="/dealer/:id" element={<Dealer />} />
      <Route path="/postreview/:id" element={<PostReview />} />

      {/* Unknown Route */}
      <Route path="*" element={<Navigate to="/dealers" replace />} />
    </Routes>
  );
}

export default App;