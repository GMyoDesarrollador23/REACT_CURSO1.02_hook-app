import "@testing-library/jest-dom";
import { todoReducer } from "../../../components/08-useReducer/todoreducer";
import { demoTodos } from "../../fixtures/demoTodos";

describe("Pruebas sobre todoReducer", () => {
   // --------------------------------------------------------
   test("debe deretornar el estado por defecto", () => {
      const state = todoReducer(demoTodos, {});

      expect(state).toEqual(demoTodos);
   });

   // --------------------------------------------------------
   test("debe de agregar un todo", () => {
      const newTodo = {
         id: 3,
         desc: "aprender mongo",
         done: false,
      };
      const action = {
         type: "add",
         payload: newTodo,
      };

      const state = todoReducer(demoTodos, action);
      expect(state).toEqual([...demoTodos, newTodo]);
   });

   // --------------------------------------------------------
   test("debe de eliminar un TODO", () => {
      const action = {
         type: "delete",
         payload: 2,
      };
      
      const state = todoReducer(demoTodos, action);
      
      expect(state.length).toBe(1);
      expect(state).toEqual([demoTodos[0]]);
   });

   // --------------------------------------------------------
   test("debe de hacer el TOGGLE del TODO", () => {
      const action = {
         type: "toggle",
         payload: 1,
      };
      const state = todoReducer(demoTodos, action);
      
      expect(state[0].done).toBe(true);
      expect(state[1]).toEqual(demoTodos[1]);
   });
   // --------------------------------------------------------
});
