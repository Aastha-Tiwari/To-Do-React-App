import { MdDeleteForever } from "react-icons/md";

function ToDoItem({toDoName , toDoDate , onDeleteClick}){
    
    return (
        <div className="container container-css">
            <div className="row row-css">
                <div className="col-6"> {toDoName} </div>
                <div className="col-4"> {toDoDate} </div>
                <div className="col-2"> <button className="btn btn-danger button" onClick={()=>onDeleteClick(toDoName)} ><MdDeleteForever /></button> </div>
            </div>
        </div>
    )
}

export default ToDoItem;