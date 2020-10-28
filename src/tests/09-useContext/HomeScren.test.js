import React from "react";
import "@testing-library/jest-dom";
import { mount } from "enzyme";

import { UserContext } from "../../components/09-useContext/UserContext";
import { HomeScren } from "../../components/09-useContext/HomeScren";

describe("preubas sobre el <HomeScren/>", () => {
   const user = {
      name: "Gerardo",
      email: "gerardo@gerardo.com",
   };
   const wrapper = mount(
      <UserContext.Provider value={{ user }}>
         <HomeScren />
      </UserContext.Provider>
   );

   test("debe de mostrarse correctamente", () => {
      expect(wrapper).toMatchSnapshot();
   });
});
