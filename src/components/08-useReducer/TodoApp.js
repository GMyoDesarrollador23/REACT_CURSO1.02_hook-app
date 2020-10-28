import React, { useReducer, useEffect } from "react";

import { todoReducer } from "./todoreducer";
import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";

import "./style.css";

const init = () => {
   return JSON.parse(localStorage.getItem("todos")) || [];
};

export const TodoApp = () => {
   const [todos, dispatch] = useReducer(
      todoReducer,
      [],
      init
   ); 

   useEffect(() => {
      localStorage.setItem("todos", JSON.stringify(todos));
   }, [todos]);

   const handleDelate = (todoId) => {
      const action = {
         type: "delete",
         payload: todoId,
      };

      dispatch(action);
   };

   const handleToggle = (todoId) => {
      dispatch({
         type: "toggle",
         payload: todoId,
      });
   };

   const handleAddTodo = (newTodo) => {
      dispatch({
         type: "add",
         payload: newTodo,
      });
   };

   return (
      <div>
         <h1>TodoApp ({todos.length})</h1>
         <hr />

         <div className="row">
            <div className="col-7">
               todos
               <TodoList
                  todos={todos}
                  handleDelate={handleDelate}
                  handleToggle={handleToggle}
               />
            </div>

            <div className="col-5">
               <TodoAdd handleAddTodo={handleAddTodo} />
            </div>
         </div>
      </div>
   );
};
