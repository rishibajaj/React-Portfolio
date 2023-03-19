import React from "react";
import "./wrapper.css";

const Wrapper = (props) => {
  return <main className="wrapper">{props.children}</main>;
};

export default Wrapper;