import { useEffect, useState, useRef } from "react";
import "./App.scss";
function App() {
  const [tabs, setTabs] = useState([]);
  const [listItems, setListItems] = useState([]);
  const [text, setText] = useState("");
  const [editedItem, setEditedItem] = useState(null);
  function handleSubmit() {
    let nextListItems = [...listItems];
    nextListItems.push(text);
    setListItems(nextListItems);
  }

  function changeInput(text, id) {
    let nextListItems = [...listItems];
    nextListItems[id] = text;
    setListItems(nextListItems);
  }

  // function changeItem(id) {
  //   setEditedItem(id);
  // }

  // Удаление по нажатии на бомбочку

  // function deleteListItems() {
  //   let deleteItems = [...listItems];
  //   deleteItems = [];
  //   setListItems(deleteItems);
  // }

  // onClick={() => deleteListItems()}

  function removeItem(id) {
    let nextListItems = [...listItems];
    nextListItems.splice(id, 1);
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
              <input
                type="text"
                value={el}
                className="rename"
                size={1}
                onChange={(event) => changeInput(event.target.value, i)}
                onClick={(event) => {
                  if (editedItem != i) {
                    event.target.style.textDecoration = "line-through";
                  }
                }}
              />
              <button type="button" onClick={() => setEditedItem(i)}>
                🖊️
              </button>
              <button type="button" onClick={() => removeItem(i)}>
                ❌
              </button>
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
        <button type="button" onClick={() => setListItems([])}>
          💣
        </button>
      </form>
    </div>
  );
}

export default App;
