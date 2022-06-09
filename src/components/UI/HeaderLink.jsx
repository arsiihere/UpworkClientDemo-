import React from "react";

function HeaderLink(props) {
  return (
    <button className="text-gray-400 duration-300 text-sm font-normal hover:font-bold hover:text-gray-700 ">
      {props.text}
    </button>
  );
}

export default HeaderLink;
