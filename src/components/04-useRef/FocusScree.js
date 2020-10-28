import React, { useRef } from "react";
import "../02-useEffect/effects.css";

export const FocusScree = () => {
   const inputRef = useRef();

   const handleClick = () => {
      inputRef.current.select();
      console.log(inputRef);
   };

   return (
      <div>
         <h1>Focus Scree</h1>
         <hr />
         <input
            ref={inputRef}
            className="form-control"
            placeholder="su nombre"
         />
         <button
            className="btn btn-outline-success mt-5"
            onClick={handleClick}
         >
            focus
         </button>
         c
      </div>
   );
};
