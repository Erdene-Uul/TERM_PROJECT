import React from "react";
import { Select } from "antd";
import { Link } from "react-router-dom";
import {
  UserOutlined,
  SearchOutlined,
} from "@ant-design/icons";

const { Option } = Select;
const Header = () => {
  const onChange = (e) => {
    console.log(e);
  };
  return (
    <div className="max-w-screen-2xl mx-50 bg-[#ffffff]">
      <div className="fixed bg-white text-black flex justify-left items-center w-full space-x-32 mx-auto h-24 shadow z-10">
        <div className="ml-40 flex items-center">
          <Link to="/">
            <img
              className="h-10"
              src={require(`../../assets/images/logo_seoultech.png`)}
            />
          </Link>
          <Link to="/">
            <div className="ml-2 font-bold text-lg text-black">STSP</div>
          </Link>
        </div>

        <div className=" bg-white h-[16px] flex items-center">
          <Select defaultValue="Category" onChange={onChange}>
            <Option value="product">Books</Option>
            <Option className="w-20" value="meat">Academic dress</Option>
            <Option value="vegetable">Electronic</Option>
        {/*    <Option value="fruit">Жимс</Option> */}
          </Select>
        </div>

        <div className="ml-20 flex items-center">
          <input
            className=" text-black w-55 px-10 rounded-full focus:outline-line"
            type={"text"}
            placeholder="Search . . ."
          />
          <div className="text-[#5F5F5F]">
            <SearchOutlined
              style={{
                fontSize: "16px",
                marginRight: 8,
                marginBottom: 5,
              }}
            />
          </div>
        </div>
        <div className="ml-20 flex items-center space-x-3">

          <Link to="/login">
            <div className=" bg-[#339CCC] py-2 px-6 rounded-full flex items-center space-x-2">
              <UserOutlined style={{ color: "white" }} />
              <span className=" text-white">Log in</span>
            </div>
          </Link>
          <button className=" bg-[#339CCC] flex items-center py-[5px] px-5 rounded-full space-x-2">
            <div className="text-xl"><img src={require('../../assets/images/icons8-plus-math-24.png')}/></div>
            <Link to="/login">
              <div className=" text-white">Add product</div>
            </Link>
          </button>
          <button className=" bg-[#339CCC] flex items-center py-[5px] px-5 rounded-full space-x-2">
            <div className="text-xl"><img src={require('../../assets/images/icons8-shopping-cart-24.png')}/></div>
            <Link to="/myProducts">
              <div className=" text-white">My Products</div>
            </Link>
          </button>
        </div>
      </div>
      
    </div>
  );
};
export default Header;
