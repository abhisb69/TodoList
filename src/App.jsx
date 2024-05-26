import { useState } from "react";
import "./App.css";
let a = [];
function App() {
  const [list, setList] = useState("");
  const handleList = () => {
    if (list.length === 0) {
      alert("Cannot add empty task!!!");
    } else {
      a.push(list);
      setList("");
    }
  };
  const clearTask = () => {
    window.location.reload();
  };
  return (
    <div className="App">
      <div className="head-wrapper">
        <h1>Todo-List</h1>
      </div>
      <div className="input-wrapper">
        <input
          type="text"
          onChange={(e) => setList(e.target.value)}
          value={list}
        />
        <button onClick={handleList}>Add Task</button>
      </div>
      {a.length == 0 ? (
        <h3>No Task</h3>
      ) : (
        <>
          <div className="task-wrapper">
            {a.map((task, id) => (
              <>
                <li key={id}>
                  <input type="checkbox" name={task} id={id} />
                  <span id={id}> {task}</span>
                </li>
              </>
            ))}
            <button className="clear-Btn" onClick={clearTask}>
              Clear All
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
