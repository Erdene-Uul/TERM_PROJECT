import React from "react";
import { Card } from "antd";
import { BorderOutlined } from "@ant-design/icons";

const Products = (props) => {
  return (
    <Card style={{ width: 130, height: 170 , margin: 10, background: BorderOutlined }}>
      <div className="">
        <div className="flex flex-col h-40">
          <img
            className="rounded-md"
            src={require(`../../assets/images/${props.img}.png`)}
          />
          <div className="mt-6 text-center">{props.name}</div>
        </div>
        <div className="mt-5 font-bold text-center">{props.price}</div>
      </div>
    </Card>
  );
};
export default Products;
