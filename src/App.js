import React from "react";
import Home from "./pages/home";
import { Route, Switch } from "react-router-dom";
import AddItem from "./pages/addItem";
import "antd/dist/antd.min.css";
import Login from "./pages/login";
import MyProducts from "./pages/myProducts";
import Header from "./components/header";
import Footer from "./components/footer";

function App() {
  return (
    <div className="">
      <Header/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/addItem" component={AddItem} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/myProducts" component={MyProducts} />
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
