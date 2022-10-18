import React from "react";
import logo from "./logo.svg";
import Navbar from "../src/components/Navbar";
import Hero from "../src/components/Hero";
import "./App.css";

function App() {
  return (
    <React.StrictMode>
      <main>
        <Navbar />
        <Hero />
      </main>
    </React.StrictMode>
  );
}

export default App;
