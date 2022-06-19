import React from "react";
import Header from "./Header";
import Footer from "./Footer";

import "./index.scss";

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
      <Header
        navigation={[{ name: "Dashboard", href: "#", current: true }]}
        containerStyle={{ backgroundColor: "black" }}
      />
    </div>
  );
};

export default App;
