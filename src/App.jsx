import { useState, useEffect } from "react";
import "./App.css";
import ToDo from "./components/ToDo";
import { getAllToDo, addToDo, updateToDo, deleteToDo } from "./utils/handleApi";
function App() {
  const [toDo, setToDo] = useState([]);
  const [text, setText] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);
  const [toDoId, setToDoId] = useState("false");
  useEffect(() => {
    getAllToDo(setToDo);
  }, []);
  const updateMode = (_id, text) => {
    setIsUpdating(true);
    setText(text);
    setToDoId(_id);
  };

  return (
    <>
      <div className="App">
        <div className="container">
          <h1 className="heading">TODO-APP</h1>
          <div className="top">
            <input
              type="text"
              className="input"
              placeholder="Add ToDos..."
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <div
              className="add"
              onClick={
                isUpdating
                  ? () => {
                      updateToDo(toDoId, text, setText, setToDo, setIsUpdating);
                    }
                  : () => addToDo(text, setText, setToDo)
              }
            >
              {isUpdating ? "Update" : "Add"}
            </div>
          </div>
          <div className="list">
            {toDo.map(({ _id, text }) => (
              <ToDo
                text={text}
                key={_id}
                updateMode={() => {
                  updateMode(_id, text, setText, setToDo, setIsUpdating);
                }}
                deleteMode={() => {
                  deleteToDo(_id, setToDo);
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
