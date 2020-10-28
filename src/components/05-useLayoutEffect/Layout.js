import React, {
   useLayoutEffect,
   useRef,
   useState,
} from "react";

import { useFetch } from "../../Hooks/useFetch";
import { useCounter } from "../../Hooks/useCounter copy";

import "./layout.css";

export const Layout = () => {
   const { counter, increment } = useCounter(1);

   const { data } = useFetch(
      `https://www.breakingbadapi.com/api/quotes/${counter}`
   );

   const { quote } = !!data && data[0];

   const pTag = useRef();

   useLayoutEffect(() => {
      setBoxSize(pTag.current.getBoundingClientRect());
      console.table(pTag.current.getBoundingClientRect());
   }, [quote]);

   const [boxSize, setBoxSize] = useState({});

   return (
      <>
         <h1>LayoutEffect</h1>
         <hr />

         <blockquote className="blockquote text-right">
            <p ref={pTag} className="mb-0">
               {quote}
            </p>
         </blockquote>

         <pre>{JSON.stringify(boxSize, null, 3)}</pre>

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
