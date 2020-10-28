import React, { useContext } from "react";
import { UserContext } from "./UserContext";

export const HomeScren = () => {
   const { user } = useContext(UserContext);

   return (
      <div>
         <h1>Home Screen</h1>
         <hr />
         <pre>{JSON.stringify(user, null, 3)}</pre>
      </div>
   );
};
