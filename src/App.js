import React from "react";
import Home from "./pages/home";
import { Route, Switch } from "react-router-dom";
import AddItem from "./pages/addItem";
import "antd/dist/antd.min.css";
import Login from "./pages/login";

function App() {
  return (
    <div className="">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/addItem" component={AddItem} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
