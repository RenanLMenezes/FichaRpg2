import React from "react";

export default function Fields(props) {
  return (
    <>
      <div className={props._class}>
        <input type={props.inputType} name={props.inputName} id={props.inputId} />
        <label htmlFor={props.inputId}>{props.children}</label>
      </div>
    </>
  );
}
