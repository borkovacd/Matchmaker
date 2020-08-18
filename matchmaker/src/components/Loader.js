import React from "react";

const Loader = () => (
  <div
    id="loader"
    style={{
      width: "100vw",
      height: "100vh",
      position: "fixed",
      zIndex: 999999999999999999,
      background: "rgba(3, 24, 86, 1)",
      top: 0,
      left: 0
    }}
  >
    <div
      style={{
        position: "absolute",
        width: "60%",
        height: "60%",
        left: "20%",
        top: "20%",
        background: "url('../../images/logo.png')",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain"
      }}
    ></div>
  </div>
);

export default Loader;
