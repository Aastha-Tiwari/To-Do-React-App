import ToDoItem from "./ToDoItem";

function ToDoItems({toDoItems , onDeleteClick}){
    return(
        <>
            {toDoItems.map((toDoItem)=><ToDoItem key={toDoItem.name} toDoName={toDoItem.name} toDoDate={toDoItem.dueDate} onDeleteClick={onDeleteClick} ></ToDoItem>)}
        </>
    )
}

export default ToDoItems;