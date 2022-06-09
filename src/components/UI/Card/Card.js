import React from "react";

function Card(props) {
  return (
    <div
      className={
        props.class
          ? props.class
          : `bg-white w-full ${props.isFlex ? "flex" : null}`
      }
    >
      {props.children}
    </div>
  );
}

export default Card;
