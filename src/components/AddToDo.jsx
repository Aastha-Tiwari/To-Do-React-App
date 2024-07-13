import { useRef } from "react";
import { FaPlus } from "react-icons/fa";

function AddToDo({onNewItem}){

    const toDoNameElement = useRef("");
    const toDoDateElement = useRef("");

    const handleAddButton = ()=>{
        const toDoName = toDoNameElement.current.value;
        const toDoDate = toDoDateElement.current.value;
        onNewItem(toDoName , toDoDate);
        toDoNameElement.current.value = "";
        toDoDateElement.current.value = "";
    }

    return (
        <div className="container container-css">
            <div className="row row-css">
                <div className="col-6"> 
                    <input type="text" placeholder="Enter To Do here..." className="input" ref={toDoNameElement}/> 
                </div>
                <div className="col-4"> 
                    <input type="date" className="input" ref={toDoDateElement}/>
                </div>
                <div className="col-2"> 
                    <button className="btn btn-success button" onClick={handleAddButton} ><FaPlus/></button> 
                </div>
            </div>
        </div>
    )
}

export default AddToDo;