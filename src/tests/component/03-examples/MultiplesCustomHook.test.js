import React from "react";
import { shallow } from "enzyme";
import "@testing-library/jest-dom";

import { MultiplesCustomHook } from "../../../components/03-examples/MultiplesCustomHook";
import { useFetch } from "../../../Hooks/useFetch";
import { useCounter } from "../../../Hooks/useCounter copy";

jest.mock("../../../Hooks/useFetch");
jest.mock("../../../Hooks/useCounter copy");

describe("Pruebas sobre <MultiplesCustomHook/>", () => {
   useCounter.mockReturnValue({
      counter: 10,
      increment: () => {},
   });

   // ---------------------------------------------------
   test("debe de mostrarse correctamente", () => {
      useFetch.mockReturnValue({
         data: null,
         loading: true,
         error: null,
      });

      const wrapper = shallow(<MultiplesCustomHook />);
      expect(wrapper).toMatchSnapshot();
   });

   // ---------------------------------------------------
   test("Debe de mostrar la informacion", () => {
      useFetch.mockReturnValue({
         data: [
            {
               author: "Gerardo",
               quote: "Hola mundo",
            },
         ],
         loading: false,
         error: null,
      });

      const wrapper = shallow(<MultiplesCustomHook />);

      expect(wrapper.find(".alert").exists()).toBe(false);
      expect(wrapper.find(".mb-0").text().trim()).toBe(
         "Hola mundo"
      );
      expect(wrapper.find("footer").text().trim()).toBe(
         "Gerardo"
      );
   });

   // ---------------------------------------------------
});
