import React, { useEffect, useState } from "react";
import { Message } from "./Message";
import "./effects.css";

export const SimpleForm = () => {
   const [FormState, setFormState] = useState({
      name: "",
      email: "",
   });

   const { name, email } = FormState;

   //   se dispara una sola vez cuando cambia el componente
   useEffect(() => {
      console.log("el componente cargo");
   }, []);

   //   se dispara cuando el forms state cambia
   useEffect(() => {
      console.log("el form cambio");
   }, [FormState]);

   //   se dispara cuando el forms state cambia
   useEffect(() => {
      console.log("el email cambio");
   }, [email]);

   const handleInputChange = ({ target }) => {
      setFormState({
         ...FormState,
         [target.name]: target.value,
      });
   };

   return (
      <>
         <h1>useEffect</h1>
         <hr />

         <div className="form-group">
            <input
               tyle="text"
               name="name"
               className="form-control"
               placeholder="Tu nombre"
               autoComplete="off"
               value={name}
               onChange={handleInputChange}
            />
         </div>

         <div className="form-group">
            <input
               tyle="email"
               name="email"
               className="form-control"
               placeholder="correo electonico"
               autoComplete="off"
               value={email}
               onChange={handleInputChange}
            />
         </div>
         {name === "123" && <Message />}
      </>
   );
};
