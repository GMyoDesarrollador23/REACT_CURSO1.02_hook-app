import React from "react";

import { useFetch } from "../../Hooks/useFetch";
import { useCounter } from "../../Hooks/useCounter copy";

import "../02-useEffect/effects.css";

export const MultiplesCustomHook = () => {
   const { counter, increment } = useCounter(1);

   const { loading, data } = useFetch(
      `https://www.breakingbadapi.com/api/quotes/${counter}`
   );

   const { author, quote } = !!data && data[0];

   return (
      <>
         <h1>BreakingBad Quotes</h1>
         <hr />

         {loading ? (
            <div className="alert alert-info text-center">
               Loading...
            </div>
         ) : (
            <blockquote className="blockquote text-right">
               <p className="mb-0"> {quote}</p>

               <footer className="blockquote-footer">
                  {author}
               </footer>
            </blockquote>
         )}

         <button
            className="btn btn-outline-primary"
            onClick={increment}
         >
            Next Quote
         </button>
         <hr />
      </>
   );
};
