import { useEffect, useState, useRef } from "react";
import "./App.scss";
function App() {
  const [tabs, setTabs] = useState(["All", "Home", "Work"]);
  const [listItems, setListItems] = useState([
    "Побегать",
    "Полетать",
    "Стирать",
  ]);
  const [text, setText] = useState("");
  function handleSubmit() {
    let nextListItems = [...listItems];
    nextListItems.push(text);
    setListItems(nextListItems);
  }
  return (
    <div className="App">
      <form action="">
        <h1>ToDo App</h1>
        <button>+Tab</button>
        {tabs.map((el, i) => (
          <button className="tab">{el}</button>
        ))}
        <ol>
          {listItems.map((el, i) => (
            <li>
              <p>{el}</p>
              <button>🖊️</button>
              <button>❌</button>
            </li>
          ))}
        </ol>
        <input
          onChange={(event) => setText(event.target.value)}
          value={text}
          type="text"
          placeholder="Введите Текст"
        />
        <button type="button" onClick={() => handleSubmit()}>
          📌
        </button>
        <button>💣</button>
      </form>
    </div>
  );
}

export default App;
