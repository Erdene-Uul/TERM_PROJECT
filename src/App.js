import React, { useState } from "react";
import Home from "./pages/home";
import { Route, Switch } from "react-router-dom";
import AddItem from "./pages/addItem";
import "antd/dist/antd.min.css";
import Login from "./pages/login";
import MyProducts from "./pages/myProducts";
import Header from "./components/header";
import Footer from "./components/footer";
import ProductDetail from "./pages/ProductDetail";

function App() {
  const [catVal, setCatVal] = useState("all");
  const onChange = (e) => {
    setCatVal(e);
  };
  return (
    <div className="">
      <Header onChange={onChange} />
      <Switch>
        <Route exact path="/" component={() => <Home catVal={catVal} />} />
        <Route exact path="/addItem" component={AddItem} />
        <Route exact path="/productDetail/:id" component={ProductDetail} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/myProducts" component={MyProducts} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
