import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Loader from "./components/Loader";

import Timer from "./components/Timer";
import Tasks from "./components/Tasks";
import Stats from "./components/Stats";
import Progress from "./components/Progress";
import ShareButton from "./components/ShareButton";

import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";

function App() {
  const [loading, setLoading] = useState(true);
  const [mode, setMode] = useState("pomodoro");

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 600);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="app">
      <Header />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Timer mode={mode} setMode={setMode} />

              <ShareButton />
              <Tasks />
              <Stats />
              <Progress />
              <Blog />
            </>
          }
        />

        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
