import AppName from "./components/AppName";
import AddToDo from "./components/AddToDo";
import WelcomeMessage from "./components/WelcomeMessage";
import ToDoItems from "./components/ToDoItems";
import { useState } from "react";

function App() { 

  const [toDoItems , setToDoItems] = useState([]);

  const onNewItem = (toDoName , toDoDate)=>{
    setToDoItems([...toDoItems , {name:toDoName , dueDate:toDoDate}]);
  }

  const onDeleteClick = (toDoName)=>{
    const newToDoItems = toDoItems.filter((toDoItem)=>toDoItem.name != toDoName);
    setToDoItems(newToDoItems);
  }

  return (
    <>
      <AppName></AppName>
      <AddToDo onNewItem={onNewItem} ></AddToDo>
      {toDoItems.length === 0 && <WelcomeMessage></WelcomeMessage>}
      <ToDoItems toDoItems={toDoItems} onDeleteClick={onDeleteClick} ></ToDoItems>
    </>
  );
}

export default App;
