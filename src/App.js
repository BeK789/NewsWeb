import "./App.css";
import News from "./Mycomponents/News";
import Navbar from "./Mycomponents/Navbar";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  return (
    <div>
          <Router>
      <Navbar/>
      <News/>
      <Switch>
      <Route exact path="/"><News key="g" country ="in" category ="general"/></Route>
          <Route exact path="/business"><News key="b" country ="in" category = "business"/></Route>
          <Route exact path="/entertainment"><News key="e" country ="in" category = "entertainment"/></Route>
          <Route exact path="/general"><News key="g" country ="in" category ="general"/></Route>
          <Route exact path="/sports"><News key="s" country ="in" category = "sports"/></Route>
          <Route exact path="/health"><News key="h" country ="in" category = "health"/></Route>
          <Route exact path="/science"><News key="s" country ="in" category = "science"/></Route>
          <Route exact path="/technolog"><News key="t" country ="in" category = "technology"/></Route>
      </Switch>
    </Router>
 </div>
  );
}

export default App;
