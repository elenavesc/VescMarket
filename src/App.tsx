import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import AppRoutes from "./routes/AppRoutes";
import React from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <AppRoutes />
      </div>
    </BrowserRouter>
  );
}

export default App;
