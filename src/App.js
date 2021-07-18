import React from "react";
import "./App.css";
import { useState } from "react";

function App() {
  const [toDos, setToDos] = useState([]);
  const [toDo, setToDo] = useState("");
  const [cancelled, setCancelled] = useState([]);

  const handleItem = () => {
    setToDos([...toDos, { id: Date.now(), text: toDo, status: false }]);
    setToDo("");
  };

  return (
    <div className="app">
      <div className="mainHeading">
        <h1>To-Do List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Make your day productive</h2>
      </div>
      <div className="input">
        <input
          value={toDo}
          type="text"
          placeholder="Add item..."
          onChange={(e) => setToDo(e.target.value)}
          onKeyPress={(event) => {
            if (event.key === "Enter") {
              handleItem();
            }
          }}
        />
        <i onClick={handleItem} className="fas fa-plus"></i>
      </div>
      <div className="todos">
        {toDos.map((obj) => {
          if (obj.deleted !== true) {
            return (
              <div key={obj.id} className="todo">
                <div className="left">
                  <input
                    onChange={(e) => {
                      setToDos(
                        toDos.filter((toDoItem) => {
                          if (toDoItem.id === obj.id) {
                            toDoItem.status = e.target.checked;
                          }
                          return toDoItem;
                        })
                      );
                    }}
                    onClick={() => {
                      setToDos(
                        toDos.filter((toDoItem) => {
                          if (toDoItem.id === obj.id) {
                            toDoItem.deleted = true;
                            !toDoItem.status &&
                              setCancelled([...cancelled, toDoItem.text]);
                          }
                          return toDoItem;
                        })
                      );
                    }}
                    value={obj.status}
                    className="strike-through"
                    type="checkbox"
                    name=""
                    id=""
                  />
                  <p>{obj.text}</p>
                </div>
                <div className="right">
                  <i
                    className="fas fa-times"
                    onClick={() => {
                      setToDos(
                        toDos.filter((toDoItem) => {
                          if (toDoItem.id === obj.id) {
                            toDoItem.deleted = true;
                            !toDoItem.status &&
                              setCancelled([...cancelled, toDoItem.text]);
                          }
                          return toDoItem;
                        })
                      );
                    }}
                  ></i>
                </div>
              </div>
            );
          }
          return null;
        })}
        <br></br>
        <h2>Completed Tasks</h2>
        {toDos.map((obj) => {
          if (obj.status) {
            return (
              <div key={obj.id} className="todo">
                <div className="left">
                  <p>{obj.text}</p>
                </div>
                <div className="right">
                  <i
                    className="fas fa-times"
                    onClick={() => {
                      setToDos(
                        toDos.filter((toDoItem) => {
                          if (toDoItem.id === obj.id) {
                            toDoItem.deleted = true;
                            !toDoItem.status &&
                              setCancelled([...cancelled, toDoItem.text]);
                          }
                          return toDoItem;
                        })
                      );
                    }}
                  ></i>
                </div>
              </div>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
}

export default App;
