import React from "react";
import "@testing-library/jest-dom";
import { act } from "@testing-library/react";
import { shallow, mount } from "enzyme";

import { demoTodos } from "../../fixtures/demoTodos";
import { TodoApp } from "../../../components/08-useReducer/TodoApp";

describe("pruebas en <TodoApp/>.", () => {
   const wrapper = shallow(<TodoApp />);

   Storage.prototype.setItem = jest.fn(() => {});

   //-----------------------------------------------
   test("debe e mostrarse corectamente", () => {
      expect(wrapper).toMatchSnapshot();
   });

   //-----------------------------------------------
   test("Debe agreger un TODO", () => {
      const wrapper = mount(<TodoApp />);

      act(() => {
         wrapper.find("TodoAdd").prop("handleAddTodo")(
            demoTodos[0]
         );
         wrapper.find("TodoAdd").prop("handleAddTodo")(
            demoTodos[1]
         );
      });

      expect(wrapper.find("h1").text().trim()).toBe(
         "TodoApp (2)"
      );
      expect(localStorage.setItem).toHaveBeenCalledTimes(2);
   });

   //-----------------------------------------------
   test("debe de eliminarun todo", () => {
      wrapper.find("TodoAdd").prop("handleAddTodo")(
         demoTodos[0]
      );

      wrapper.find("TodoList").prop("handleDelate")(
         demoTodos[0].id
      );
      expect(wrapper.find("h1").text().trim()).toBe(
         "TodoApp (0)"
      );
   });
   //-----------------------------------------------
});
