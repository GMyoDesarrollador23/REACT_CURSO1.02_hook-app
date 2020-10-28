import React from "react";
import { shallow } from "enzyme";
import "@testing-library/jest-dom";

import { TodoList } from "../../../components/08-useReducer/TodoList";

import { demoTodos } from "../../fixtures/demoTodos";

describe("puebas en <TodoList/>", () => {
   const handleDelate = jest.fn();
   const handleToggle = jest.fn();

   const wrapper = shallow(
      <TodoList
         todos={demoTodos}
         handleDelate={handleDelate}
         handleToggle={handleToggle}
      />
   );

   // *------------------------------------------------------------
   test("debe de mostrarse correctamente", () => {
      expect(wrapper).toMatchSnapshot();
   });

   // *------------------------------------------------------------
   test("debe de toner dos todos", () => {
      expect(wrapper.find("TodoListItem").length).toBe(
         demoTodos.length
      );
      expect(
         wrapper
            .find("TodoListItem")
            .at(0)
            .prop("handleDelate")
      ).toEqual(expect.any(Function));
   });

   // *------------------------------------------------------------
});
