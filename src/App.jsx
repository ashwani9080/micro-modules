import React from "react";
import Header from "./Header";
import Footer from "./Footer";

import './index.scss';

const App = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        padding: 0,
        margin: 0,
      }}
    >
      <Header title="Header" containerStyle={{ backgroundColor: "blue" }} />
    </div>
  );
};

export default App;
