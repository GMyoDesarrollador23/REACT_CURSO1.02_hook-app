import React from "react";

import { useCounter } from "../../Hooks/useCounter";
import "./counter.css";

export const CounterWithCustomHook = () => {
   const {
      state,
      increment,
      decrement,
      reset,
   } = useCounter(23);
   
   let factor = 2;
   
   return (
      <>
         <h1>Counter With Hook: {state}</h1>
         <hr />
         <button
            onClick={() => increment(factor)}
            className="btn btn-primary"
         >
            +{factor}
         </button>

         <button onClick={reset} className="btn btn-info">
            Reset
         </button>

         <button
            onClick={() => decrement(factor)}
            className="btn btn-danger"
         >
            -{factor}
         </button>
      </>
   );
};
