import React, { useEffect } from "react";
import ScrollText from "./components/ScrollText";
import Workflow from "./components/Workflow";
import "./App.css";

const App = () => {

  return (
    <div className="body">
      <div className="some-content">
        <h1>Some content</h1>
        <h1>Some content</h1>
        <h1>Some content</h1>
        <h1>Some content</h1>
      </div>
      <div className="line"></div>
      <div className="container" onScroll={console.log(1)}>
        <ScrollText />
      </div>
      <div className="line"></div>
      <div className="container">
        <Workflow />
      </div>
      <div className="line"></div>
      <div className="some-content">
        <h1>Some content</h1>
        <h1>Some content</h1>
        <h1>Some content</h1>
        <h1>Some content</h1>
      </div>
    </div>
  );
};

export default App;
