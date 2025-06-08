import { useState, useEffect } from "react";
import Loader from "./components/Loader";
import Hero from "./components/Hero";
import Experience from "./components/Experience";

function App() {
  const [mode, setMode] = useState("dark"); // Default is dark
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const html = document.documentElement;
    html.classList.remove("dark-theme", "light-theme", "red-theme");
    html.classList.add(`${mode}-theme`);
  }, [mode]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`${mode}-theme min-h-screen overflow-x-hidden`}>
      {/* Background layer */}
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-[var(--bg-color)]"></div>
      </div>

      <div className="container">
        {loading ? (
          <Loader />
        ) : (
          <>
            <Hero mode={mode} setMode={setMode} />
            {/* <Experience />  */}
          </>
        )}
      </div>
    </div>
  );
}

export default App;
