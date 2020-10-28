import { useState } from "react";

export const useCounter = (initialState = 10) => {
   const [state, setstate] = useState(initialState);

   const increment = (factor = 1) =>
      setstate(state + factor);

   const reset = () => setstate(initialState);

   const decrement = (factor = 1) =>
      setstate(state - factor);

   return {
      state,
      increment,
      decrement,
      reset,
   };
};
