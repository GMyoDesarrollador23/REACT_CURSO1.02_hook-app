import React, { useState } from "react";

import { MultiplesCustomHook } from "../03-examples/MultiplesCustomHook";

import "../02-useEffect/effects.css";

export const RealExampleref = () => {
   const [show, setShow] = useState(false);
   return (
      <div>
         <h1>RealExampleref</h1>
         <hr />

         {show && <MultiplesCustomHook />}

         <button
            className="btn btn-primary"
            onClick={() => {
               setShow(!show);
            }}
         >
            {show ? <div>hide</div> : <div>show</div>}
         </button>
      </div>
   );
};
