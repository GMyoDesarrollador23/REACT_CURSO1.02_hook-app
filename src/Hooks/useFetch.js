import { useState, useEffect, useRef } from "react";

export const useFetch = (url) => {
   const isMounter = useRef(true);

   const [state, setstate] = useState({
      data: null,
      loading: true,
      error: null,
   });

   useEffect(() => {
      return () => {
         isMounter.current = false;
      };
   }, []);

   useEffect(() => {
      setstate({
         data: null,
         loading: true,
         error: null,
      });

      fetch(url)
         .then((resp) => resp.json())
         .then((data) => {
            if (isMounter.current) {
               setstate({
                  data,
                  loading: false,
                  error: null,
               });
            } else {
               console.log("Subcrition canceled");
            }
         })
         .catch(() => {
            setstate({
               data: null,
               loading: false,
               error: "no se pudo cargar la info",
            });
         });
   }, [url]);

   return state;
};
