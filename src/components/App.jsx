import React, { useState } from "react";

function App() {
  const [items, setItems] = useState([]);
  const [tempItem, settempItem] = useState("");

  function handleChange(event) {
    settempItem(event.target.value);
  }

  function handleItem() {
    if (tempItem.trim() != "") {
      setItems((prevValue) => [...prevValue, tempItem]);
      settempItem("");
    }
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input
          onChange={handleChange}
          type="text"
          value={tempItem}
          placeholder="Enter an item"
        />
        <button onClick={handleItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
