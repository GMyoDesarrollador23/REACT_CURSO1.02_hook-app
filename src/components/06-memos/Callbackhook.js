import React, { useState } from "react";
import "../02-useEffect/effects.css";
export const Callbackhook = () => {
   const [counter, setCounter] = useState(10);

   const increment = () => {
      setCounter(counter + 1);
   };

   return (
      <div>
         <h1>Use CallBack hook</h1>
         <p>{counter}</p>
         <button onClick={increment}>incrementar</button>
         <hr />
      </div>
   );
};
