import React from "react";
import { Card } from "antd";
import { BorderOutlined } from "@ant-design/icons";

const Products = (props) => {
  return (
    <Card style={{ width: 210, margin: 10 }}>
      <div className="">
        <div className="flex flex-col h-60">
          <img className="rounded-md" src={props.img} />
          <div className="mt-5 mb-6 text-center">{props.name}</div>
        </div>
        <div className=" font-bold text-center">{props.price}</div>
      </div>
      <div className="mt-10 font-bold text-center">{props.price}</div>
  
  </Card>
  );
};
export default Products;
