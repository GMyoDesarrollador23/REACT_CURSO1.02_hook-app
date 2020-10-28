import React from "react";
import { mount } from "enzyme";
import "@testing-library/jest-dom";

import { LoginScreen } from "../../components/09-useContext/LoginScreen";
import { UserContext } from "../../components/09-useContext/UserContext";

describe("Pruebas en el <LoginScreen/>", () => {
   const setUser = jest.fn();

   const wrapper = mount(
      <UserContext.Provider value={{ setUser }}>
         <LoginScreen />
      </UserContext.Provider>
   );
   
   //    --------------------------------------------------
   test("debe de mostrarse correctamente", () => {
      expect(wrapper).toMatchSnapshot();
   });
   
   //    --------------------------------------------------
   test("debe de ejecutar el setUser con el argumente deserado", () => {
      //  wrapper.find("button").simulate("click");
      wrapper.find("button").prop("onClick")();

      expect(setUser).toHaveBeenCalledWith({
         id: 123,
         name: "Gerardo",
      });
   });
});
