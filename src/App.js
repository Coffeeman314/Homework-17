import React from "react";
import Timer from "./Timer/Timer";
import "./App.css";

function App() {
  return <Timer autostart={true} delay={1000} time={1024} />;
}

export default App;
