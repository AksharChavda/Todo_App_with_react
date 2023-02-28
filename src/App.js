import React, { useState } from "react";
import "./styles.css";
import bb from "./bb.jpg";
import chalk from "./chalk.svg";
import erase from "./erase.svg";
import redo from "./redo.svg";

function App() {
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);
  const [toggle, setToggle] = useState(true);
  const [edit, setEdit] = useState(null);
  function addItem() {
    if (!newItem) {
      alert("Come on, Add a task , You will do it !!! ");
      return;
    } else if (newItem && !toggle) {
      setItems(
        items.map((item) => {
          if (item.id === edit) {
            return { ...item, value: newItem };
          }
          return item;
        })
      );
      setNewItem("");
      setToggle(true);
      setEdit(null);
    } else {
      const item = {
        id: Math.floor(Math.random() * 1000),
        value: newItem
      };
      setItems((oldList) => [...oldList, item]);
      setNewItem("");
    }
  }
  function deleteItem(id) {
    const newArray = items.filter((item) => item.id !== id);
    setItems(newArray);
  }
  function updateItem(id) {
    const filtitem = items.filter((item) => item.id !== id);
    const finditem = items.find((item) => item.id == id);
    setNewItem(finditem.value);
    setToggle(false);
    setEdit(id);
  }

  return (
    // <>

    <div className="app">
      <img className="appbg" src={bb} />
      <div className="iinnerapp">
        <div className="iiapp">
          <label>D</label>
          <label>O</label>
          <label>i</label>
          <label>T</label>
        </div>
        <div className="innerapp">
          <div className="add">
            <form onSubmit={(event) => event.preventDefault()}>
              <input
                type="text"
                placeholder="                                                                                                     Add an item..."
                value={newItem}
                onChange={(event) => setNewItem(event.target.value)}
              />
              {toggle ? (
                <button className="aa" onClick={() => addItem()}>
                  <img className="btn-bg" src={chalk} />
                </button>
              ) : (
                <button className="update" onClick={() => addItem()}>
                  <img className="redo" src={redo} />
                </button>
              )}
            </form>
          </div>
          <ul>
            {items.map((item) => {
              return (
                <li key={item.id}>
                  {item.value}
                  <button
                    className="update"
                    onClick={() => updateItem(item.id)}
                  >
                    <img className="redo" src={redo} />
                  </button>
                  <button className="hh" onClick={() => deleteItem(item.id)}>
                    <img className="erase-bg" src={erase} />
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {/* <h1>D </h1>
      <h1>O</h1> <h1>i</h1>
      <h1>T</h1>
      <span>Add-Act-Achieve</span>
      <div className="Wrapper">
        <div className="Input-Wrapper">
          
         
        </div>
      </div> */}
    </div>
  );
}

export default App;
