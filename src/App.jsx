import { useEffect, useState, useRef } from "react";
import "./App.scss";
function App() {
  const [tabs, setTabs] = useState(["All"]);
  const [listItems, setListItems] = useState([]);
  const [text, setText] = useState("");
  const [editedItem, setEditedItem] = useState(null);
  const [activeTab, setActiveTab] = useState(0);
  const [tabCreation, setTabCreation] = useState(false);
  const [tabText, setTabText] = useState("");

  function createTab() {
    if (tabCreation) {
      let newTabs = [...tabs];
      newTabs.push(tabText);
      setTabs(newTabs);
    }
    setTabCreation((t) => !t);
  }

  function handleSubmit() {
    let nextListItems = [...listItems];
    nextListItems.push({ text: text, tab: activeTab, marked: false });
    setListItems(nextListItems);
  }

  function changeInput(newText, id) {
    let nextListItems = [...listItems];
    nextListItems[id].text = newText;
    setListItems(nextListItems);
  }

  function newTabs() {
    let nextTabs = [...tabs];
    nextTabs.push("NewTab");
    setTabs(nextTabs);
  }

  function removeItem(id) {
    let nextListItems = [...listItems];
    nextListItems.splice(id, 1);
    setListItems(nextListItems);
  }

  return (
    <div className="App">
      <form action="">
        <h1>ToDo App</h1>
        {tabCreation ? (
          <input
            type="text"
            onChange={(event) => setTabText(event.target.value)}
          />
        ) : null}
        <button type="button" onClick={() => createTab()}>
          +Tab
        </button>
        {tabs.map((el, i) => (
          <button
            type="button"
            className={activeTab === i ? "tab activeTab" : "tab"}
            onClick={() => setActiveTab(i)}
            key={i}
          >
            {el}
          </button>
        ))}
        <ol>
          {listItems.map((el, i) =>
            el.tab === activeTab ? (
              <li
              style={
                editedItem === i
                  ? {border: "1px solid black"}
                  : {border: "1px solid transparent"}
              }
                key={i}
                onClick={(event) => {
                  if (editedItem != i) {
                    let nextListItems = [...listItems];
                    if(nextListItems[i].marked) {
                      nextListItems[i].marked=false
                    } else {
                      nextListItems[i].marked=true
                    }
                    console.log(nextListItems);
                    setListItems(nextListItems);
                  }
                }}
              >
                <input
                  type="text"
                  value={el.text}
                  className={el.marked === true ? "rename marked" : "rename"}
                  size={1}
                  onChange={(event) => changeInput(event.target.value, i)}
                  // disabled={editedItem === i ? false : true}
                  style={

                    editedItem === i
                      ? { pointerEvents: "auto"}
                      : { pointerEvents: "none"}
                  }
                />
                <button
                  type="button"
                  onClick={(event) => {
                    setEditedItem(() => {
                      if(i === editedItem) {
                        return null
                      } else {
                        return i
                      }
                    });
                    event.stopPropagation();
                    let nextListItems = [...listItems];
                      nextListItems[i].marked=false
                    setListItems(nextListItems);
                  }}
                >
                  🖊️
                </button>
                <button
                  type="button"
                  onClick={(event) => {
                    removeItem(i);
                    event.stopPropagation();
                  }}
                >
                  ❌
                </button>
              </li>
            ) : null
          )}
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
