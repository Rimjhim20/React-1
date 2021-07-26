import React from "react";
import "./App.css";


const Image = (props) => {
  return (
    <div>
      <img src={props.poster} alt="img" />
     
    </div>
  );
};

export default Image;
