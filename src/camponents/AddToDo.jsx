import { useState , useRef } from "react";
import data from "../data";
// import data from "../data";

function AddToDo(props) {
  const [addingList, setAddingList] = useState(false)
  const [listNameInput, setListNameInput] = useState()



  function handleAddingList() {
    setAddingList((prev)=>!prev)
  }
  function handleAddingNameSubmit(e) {
    e.preventDefault();
    const arrayLength = (data.length)+1 ;
    const listDataStructure = {
      id : Date.now(),
      toDoName : listNameInput? listNameInput: 'Project ' + arrayLength,
      innerToDo : []
    };

    props.data.push(listDataStructure);
    props.rander((p) => !p )
    setAddingList(false);
    setListNameInput('');
  }


  return(
    addingList ? 
    <form onSubmit={handleAddingNameSubmit}>
      <button className="add--btn" title="add" type="submit" >&#10004;</button>
      <input className="todo--name-inp" autoFocus placeholder="Project name" value={listNameInput} onChange={e => setListNameInput(e.target.value)}/>
    </form>
    : 
    <button className="add--btn" title="add project" onClick={handleAddingList}>
      &#43;
    </button>
    
    
  )
}

export default AddToDo;