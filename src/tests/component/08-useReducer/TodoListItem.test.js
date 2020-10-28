import React from "react";
import { shallow } from "enzyme";
import "@testing-library/jest-dom";

import { TodoListItem } from "../../../components/08-useReducer/TodoListItem";
import { demoTodos } from "../../fixtures/demoTodos";

describe("Pruebas sobre TodoListItem", () => {
   const handleDelate = jest.fn();
   const handleToggle = jest.fn();

   const wrapper = shallow(
      <TodoListItem
         todo={demoTodos[0]}
         index={0}
         handleDelate={handleDelate}
         handleToggle={handleToggle}
      />
   );
   //---------------------------------------------------------
   test("debe de mostrarse correctamete", () => {
      expect(wrapper).toMatchSnapshot();
   });

   //---------------------------------------------------------
   test("debe de llamar la funcion de borrar", () => {
      wrapper.find("button").simulate("click");

      expect(handleDelate).toHaveBeenCalledWith(
         demoTodos[0].id
      );
   });
   //---------------------------------------------------------

   test("debe llamar la funcion toggle", () => {
      wrapper.find("p").simulate("click");

      expect(handleToggle).toHaveBeenCalledWith(
         demoTodos[0].id
      );
   });

   //---------------------------------------------------------
   test("debe de mostrar el texto correntamente", () => {
      const p = wrapper.find("p");
      
      expect(p.text().trim()).toBe(
         `1.${demoTodos[0].desc}`
      );
   });

   //---------------------------------------------------------
   test("debe tener la clase complete si el todo.done esta en true", () => {
      const todo = demoTodos[0];
      todo.done = true;

      const wrapper = shallow(<TodoListItem todo={todo} />);
      // console.log(wrapper.html());
      const p = wrapper.find("p");
      expect(p.hasClass("complite")).toBe(true);
   });

   //---------------------------------------------------------
});
