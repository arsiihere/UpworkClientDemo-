import React from "react";

function Button(props) {
  return (
    <button className={props.buttonClass}>
      {props.text}

      {props.icon ? props.icon : null}
    </button>
  );
}

export default Button;
