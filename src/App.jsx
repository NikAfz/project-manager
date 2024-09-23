import "./App.css";
import Header from "./camponents/Header";
import ToDo from "./camponents/ToDo";
import AddToDo from "./camponents/AddToDo";
import data from "./data";
import { useEffect, useState } from "react";
import Blobs from "./camponents/blobs";

import { DndContext, closestCenter, closestCorners } from "@dnd-kit/core";
import {
  SortableContext,
  arrayMove,
  horizontalListSortingStrategy,
  useSortable,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

function App() {
  const [dataState, setDataState] = useState(data);

  const [render, setRender] = useState(false);

  const [notDragging, setNotDragging] = useState(true);

  useEffect(() => {
    localStorage.setItem("todoData", JSON.stringify(dataState));
  }, [render]);

  function RenderToDo(props) {
    const { attributes, listeners, setNodeRef, transform, transition } =
      useSortable({ id: props.id, disabled: notDragging });

    // style
    const style = {
      transition,
      transform: CSS.Transform.toString(transform),
    };

    return (
      <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
        <ToDo
          name={props.name}
          ToDo={props.todo}
          fullObject={props.object}
          rander={setRender}
          setNotDragging={setNotDragging}
        />
      </div>
    );
  }

  function onDragEnd(e) {
    const { active, over } = e;
    if (active.id === over.id) {
      return;
    }
    setDataState((dataState) => {
      const oldIndex = dataState.findIndex((i) => i.id === active.id);
      const newIndex = dataState.findIndex((i) => i.id === over.id);
      setRender((p) => !p);
      return arrayMove(dataState, oldIndex, newIndex);
    });
  }

  return (
    <>
      <Blobs />

      <Header />
      <div className="todo--container">
        <DndContext collisionDetection={closestCorners} onDragEnd={onDragEnd}>
          <SortableContext
            items={dataState}
            strategy={horizontalListSortingStrategy}
          >
            {dataState.map((item) => {
              return (
                <RenderToDo
                  key={item.id}
                  id={item.id}
                  object={item}
                  name={item.toDoName}
                  todo={item.innerToDo}
                />
              );
            })}
          </SortableContext>
        </DndContext>
      </div>

      <AddToDo data={dataState} rander={setRender} />
    </>
  );
}

export default App;
