import React from "react";
import data from "../data";
import { useState } from "react";

function ToDo(props) {
  const [toDoInput, setToDoInput] = useState('')

  const [addToDoOpener, setAddToDoOpener] = useState(false)


  
  function handleSubmit(e) {
    e.preventDefault();
    props.ToDo.push(toDoInput)
    props.rander((p) => !p )
    setToDoInput('')
    setAddToDoOpener(false)
  }
  
  
  function handleAddingToDo() {
    setAddToDoOpener(prev => !prev);
  };

  function handleSetNotDragging(insideOutside) {
    if (insideOutside === "inSide") {
      props.setNotDragging(false)
    }
    if(insideOutside !== "inSide"){
      props.setNotDragging(true)
    }

  }
  
  

  const removeProjectList = () => {
    
    let Object = props.fullObject ;
    const i = data.indexOf(Object);
    if (i !== -1) {
      data.splice(i, 1);
    }
    props.rander((p) => !p )

  };

  const removeToDo = (index) => {
    
    let ToDoArray = props.ToDo ;
    if (index !== -1) {
      ToDoArray.splice(index, 1);
    }
    props.rander((p) => !p )

  };



  const renderToDo = props.ToDo.map((item, index) => {
    return (
      <p className="todo" key={index} title="remove" onClick={() => removeToDo(index)}>
        {item}
      </p>
    );
  });
  



  return(
    <>
      <div className="dnd--div" 
      onPointerOver={() => handleSetNotDragging("inSide")} 
      onPointerOut={() => handleSetNotDragging("outSide")}
      >
        <img src="src\assets\drag_handle_FILL0_wght400_GRAD0_opsz24.png" 
          alt="drag here" 
          width={35} 
        />
      </div>
      <div className="todo--list" onPointerOut={() => handleSetNotDragging("outSide")}>
        
        <div className="todo--list-header" >
          <h2 className="todo--list-name" title={props.name} >{props.name}</h2>
          <div className="remove" title="remove" onClick={() => removeProjectList()}>&#215;</div>
        </div>

        <div className="todo--list-content">
          {renderToDo}
          
        </div>
        <div className="add-todo--container">
          {addToDoOpener ? (
            <form className="add-todo--form" onSubmit={handleSubmit}>
              <input className="todo--inp" autoFocus placeholder="Add ToDo" value={toDoInput} onChange={e => setToDoInput(e.target.value)}/>
              <button className="add-todo--btn" title="add" type="submit"  >&#10004;</button>
            </form> 
          ) : (
            <button className="add-todo--btn" title="add todo" onClick={handleAddingToDo}>
              &#43;
            </button>
          )}
        </div>

      </div>
    </>
  )  
}

export default ToDo;