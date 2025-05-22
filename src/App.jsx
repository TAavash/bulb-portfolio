// App.js
import React, { useState } from "react";
import Hero from "./components/Hero";

function App() {
  const [mode, setMode] = useState("dark"); // 'light', 'dark', or 'red'

  return (
    <Hero mode={mode} setMode={setMode} />
  );
}

export default App;
