import React from "react";

export const TodoListItem = ({
   todo,
   index,
   handleDelate,
   handleToggle,
}) => {
   return (
      <li key={todo.id} className="list-group-item">
         <p
            className={`${todo.done && "complite"}`}
            onClick={() => {
               handleToggle(todo.id);
            }}
         >
            {index + 1}.{todo.desc}
         </p>
 
         <button
            value={todo.id}
            onClick={() => {
               handleDelate(todo.id);
            }}
            className="btn btn-outline-danger"
         >
            Borrar
         </button>
      </li>
   );
};
