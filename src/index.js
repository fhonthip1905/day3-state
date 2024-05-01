import React from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";
import "./index.css";

function AddItem(props) {
  const [addItem, setAddItem] = useState("");
  // const [clickAddItem, setClickAddItem] = useState();

  const handleInputItem = (event) => setAddItem(event.target.value);
  const handleAddItem = (event) =>
    props.handleItem((oldData) => {
      return [...oldData, { id: oldData.length + 1, value: addItem }];
    });

  return (
    <div className="add">
      <input
        type="text"
        placeholder="Add a new item"
        onChange={handleInputItem}
        value={addItem}
      />
      <button onClick={handleAddItem}>Add</button>
    </div>
  );
}

function App() {
  const [inputData, setInputData] = useState([
    { id: 1, value: "Banana" },
    { id: 2, value: "Apple" },
  ]);
  const handleDeleteItem = (id) => {
    setInputData((c) => c.filter((item) => item.id !== id));
  };
  const dataList = inputData.map((item) => {
    return (
      <li className="item_list" key={item.id}>
        <p>{item.value}</p>
        <button onClick={(e) => handleDeleteItem(item.id)}>X</button>
      </li>
    );
  });

  return (
    <div className="app">
      <h1>Item to Buy</h1>
      <AddItem handleItem={setInputData} />
      <div className="task_list">{dataList}</div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

//


