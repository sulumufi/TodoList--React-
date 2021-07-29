import React from "react";
import List from "./List";

function App() {
  const [listItems, setListItems] = React.useState([]);

  const [textTyped, setTextTyped] = React.useState("");

  function handleChange(event) {
    const newValue = event.target.value;
    setTextTyped(newValue);
  }

  function handleClick() {
    setListItems((prev) => {
      console.log([...prev, textTyped]);
      return [...prev, textTyped];
    });

    setTextTyped("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text"  value={textTyped} />
        <button onClick={handleClick} >
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          <List list={listItems} useState_set = {setListItems} />
        </ul>
      </div>
    </div>
  );
}

export default App;
