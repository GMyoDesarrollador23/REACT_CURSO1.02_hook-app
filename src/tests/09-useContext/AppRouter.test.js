import React from "react";
import "@testing-library/jest-dom";
import { AppRouter } from "../../components/09-useContext/AppRouter";
import { mount } from "enzyme";
import { UserContext } from "../../components/09-useContext/UserContext";

describe("Pruebas sobre el <AppRouter/>", () => {
   const user = {
      id: 1,
      name: "Gerardo",
   };

   const wrapper = mount(
      <UserContext.Provider value={{ user }}>
         <AppRouter />
      </UserContext.Provider>
   );

   test("debe de mostrarse correctamente", () => {
      expect(wrapper).toMatchSnapshot();
   });
});
