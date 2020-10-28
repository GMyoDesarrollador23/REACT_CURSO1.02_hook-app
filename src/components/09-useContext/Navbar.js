import React from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
   return (
      //   <nav>
      //      <ul>
      //         <li>
      //             <Link to="/">Home</Link>
      //         </li>
      //         <li>
      //             <Link to="./about">about</Link>
      //         </li>
      //         <li>
      //             <Link to="./login">Login</Link>
      //         </li>
      //      </ul>
      //   </nav>

      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
         <NavLink className="navbar-brand" to="/">
            Use Context
         </NavLink>

         <div
            className="collapse navbar-collapse"
            id="navbarNavAltMarkup"
         >
            <div className="navbar-nav">
               <NavLink
                  exact
                  activeClassName="active"
                  className="nav-item nav-link"
                  to="/"
               >
                  Home
               </NavLink>

               <NavLink
                  exact
                  activeClassName="active"
                  className="nav-item nav-link"
                  to="./about"
               >
                  About
               </NavLink>
               
               <NavLink
                  exact
                  activeClassName="active"
                  className="nav-item nav-link"
                  to="./login"
               >
                  Login
               </NavLink>
            </div>
         </div>
      </nav>
   );
};
