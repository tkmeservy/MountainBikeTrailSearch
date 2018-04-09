import React from "react";
import {Switch, Route} from "react-router-dom";
import NavBar from "./NavBar"
import SearchBar from "./SearchBar"
import Home from "./pages/Home"
import Linked from "./pages/Linked"
import "./app.css"




function App(props){
   return (
       <div className="bigWrapper">
           <NavBar></NavBar>
           <Switch>
           
                <Route exact path="/trailsearch" component = {Home}></Route>
                <Route path = "/trailsearch/searchbar" component = {SearchBar}></Route>
                <Route path = "/trailsearch/linked" component = {Linked}></Route>

           </Switch>
          
       </div>
   ) 
}

export default App;