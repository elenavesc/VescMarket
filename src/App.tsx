import { useState } from 'react';
import Navbar from "./components/navbar";
import AppRoutes from "./routes/AppRoutes";
import React from 'react';

function App() {
  const [count, setCount] = useState(0)

  return (
     <div>
          <Navbar />
          <AppRoutes />
        </div>
  )
}

export default App
