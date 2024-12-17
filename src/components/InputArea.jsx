import React from "react";

function InputArea(props) {
  return (
    <div className="form">
      <input
        onChange={props.callHandleChange}
        type="text"
        value={props.valueText}
      />
      <button onClick={props.callAdd}>
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
