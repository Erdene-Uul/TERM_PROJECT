import React from "react";
import { Select, Dropdown, Menu } from "antd";
import { Link } from "react-router-dom";
import {
  UserOutlined,
  SearchOutlined,
  LogoutOutlined,
} from "@ant-design/icons";

const { Option } = Select;
const Header = (props) => {
  const logOut = () => {
    localStorage.removeItem("user");
    window.location.reload();
    console.log("logout");
  };
  const menu = (
    <Menu>
      <Menu.Item>
        <div className="mx-2 my-2">
          <div>{props.user}</div>
          <div
            onClick={logOut}
            className="flex items-center justify-center bg-slate-500 rounded-2xl mt-3"
          >
            <div>Log out</div>
            <div className="ml-1 mb-1">
              <LogoutOutlined />
            </div>
          </div>
        </div>
      </Menu.Item>
    </Menu>
  );
  return (
    <div className="fixed bg-white text-black flex  items-center w-full  h-24 shadow-xl z-10">
      <div className="ml-14 flex items-center">
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

      <div className="ml-80">
        <Select
          style={{ width: 100 }}
          defaultValue="All"
          onChange={props.onChange}
        >
          <Option value="books">Books</Option>
          <Option value="academicDress">Academic dress</Option>
          <Option value="electronic">Electronic</Option>
          <Option value="all">All</Option>
        </Select>
      </div>

      <div className="flex items-center ml-3">
        <input
          className=" text-black w-55 px-10 py-[6px] border-2 border-slate-200 rounded-full focus:outline-line"
          type={"text"}
          placeholder="Search . . ."
        />
        <div className="ml-2  text-[#5F5F5F]">
          <SearchOutlined
            style={{
              fontSize: "20px",
              marginRight: 8,
              marginBottom: 5,
            }}
          />
        </div>
      </div>
      <div className="ml-52 flex items-center space-x-3">
        <Link to={"/addItem"}>
          <button className=" bg-[#339CCC] flex items-center py-[5px] px-5 rounded-full space-x-2">
            <div className="text-xl">
              <img
                src={require("../../assets/images/icons8-plus-math-24.png")}
              />
            </div>

            <div className=" text-white">Add product</div>
          </button>
        </Link>
        <Link to={"/myProducts"}>
          <button className=" bg-[#339CCC] flex items-center py-[5px] px-5 rounded-full space-x-2">
            <div className="text-xl">
              <img
                src={require("../../assets/images/icons8-shopping-cart-24.png")}
              />
            </div>
            <div className=" text-white">My Products</div>
          </button>
        </Link>
      </div>
      <div className=" bg-[#339CCC] ml-32 py-2 px-2 text-2xl rounded-full flex items-center ">
        <Dropdown overlay={menu} trigger={["click"]}>
          <UserOutlined style={{ color: "white" }} />
        </Dropdown>
      </div>
    </div>
  );
};
export default Header;
