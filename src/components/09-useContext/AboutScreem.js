import React, { useContext } from "react";
import { UserContext } from "./UserContext";

export const AboutScreem = () => {
   const { user, setUser } = useContext(UserContext);

   const hanleClick = () => {
      setUser({});
   };
   return (
      <div>
         <h1>About Screen</h1>
         <hr />
         <pre>{JSON.stringify(user, null, 3)}</pre>
         <button
            onClick={hanleClick}
            className="btn btn-outline-warning"
         >
            Logout
         </button>
      </div>
   );
};
