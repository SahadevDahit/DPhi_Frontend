import React from "react";
import Dashboard from "./components/dashboard";
import About from "./components/about";
import Services from "./components/services";
import Events from "./components/challenge";

function App() {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.6.3/css/all.css"
        integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/"
        crossOrigin="anonymous"
      />
      <div
        style={{
          backgroundColor: "#003145",
          fontFamily: "Inter, sans-serif",
        }}
      >
        <Dashboard />
        <About />
        <Services />
        <Events />
      </div>
    </>
  );
}

export default App;
