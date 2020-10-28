import React from "react";
import { TodoListItem } from "./TodoListItem";

export const TodoList = ({
   todos,
   handleDelate,
   handleToggle,
}) => {
   return (
      <ul className="list-group list-group-flush">
         {todos.map((todo, i) => (
            <TodoListItem
               key={todo.id}
               todo={todo}
               index={i}
               handleDelate={handleDelate}
               handleToggle={handleToggle}
            />
         ))}
      </ul>
   );
};
