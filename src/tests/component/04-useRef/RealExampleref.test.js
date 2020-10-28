import React from "react";
import "@testing-library/jest-dom";

import { shallow } from "enzyme";

import { RealExampleref } from "../../../components/04-useRef/RealExampleref";

describe("Pruebas en <RealExampleref/>", () => {
   const wrapper = shallow(<RealExampleref />);
   
   // ----------------------------------------------------
   test("debe de mostrarso correctamente", () => {
      expect(wrapper).toMatchSnapshot();

      expect(
         wrapper.find("MultiplesCustomHook").exists()
      ).toBe(false);
   });

   // ----------------------------------------------------
   test("debe de mostrar el componente <RealExampleref/>", () => {
      wrapper.find("button").simulate("click");

      expect(
         wrapper.find("MultiplesCustomHook").exists()
      ).toBe(true);
   });
   // ----------------------------------------------------
});
