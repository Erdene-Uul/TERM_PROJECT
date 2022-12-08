import React from "react";
import { Card } from "antd";
import { BorderOutlined } from "@ant-design/icons";

const Products = (props) => {
  return (
    <Card style={{ width: 210, margin: 10 }}>
      <div className="">
        <div className="flex flex-col h-60">
          <img className="h-44 rounded-md" src={props.img} />
          <div className="mt-5 mb-6 text-center">{props.name}</div>
        </div>
        <div className=" font-bold text-center">{props.price}</div>
        <button className="ml-28 mt-2 inline">
            <div><span className=" text-white"><img src={require("../../assets/images/icons8-edit-24.png")}/></span></div>
      </button>

      <button>
            <div><span className=" text-white"><img src={require("../../assets/images/icons8-remove-24.png")}/></span></div>
      </button>
      </div>
  
  </Card>
  );
};
export default Products;
