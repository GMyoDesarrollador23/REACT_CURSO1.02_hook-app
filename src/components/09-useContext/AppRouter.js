import React from "react";
import {
   BrowserRouter as Router,
   Switch,
   Route,
   Redirect,
} from "react-router-dom";

import { Navbar } from "./Navbar";
import { AboutScreem } from "./AboutScreem";
import { LoginScreen } from "./LoginScreen";
import { HomeScren } from "./HomeScren";

export const AppRouter = () => {
   return (
      <Router>
         <div>
            <Navbar />

            <div className="container">
               <Switch>
                  <Route
                     exact
                     path="/"
                     component={HomeScren}
                  />
                  <Route
                     exact
                     path="/about"
                     component={AboutScreem}
                  />
                  <Route
                     exact
                     path="/login"
                     component={LoginScreen}
                  />

                  <Redirect to="/" />
               </Switch>
            </div>
         </div>
      </Router>
   );
};
