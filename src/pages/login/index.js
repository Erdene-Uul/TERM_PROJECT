import React from "react";
import { Form, Input, Button } from "antd";
import Config from "../../database";
import { Link } from "react-router-dom";

const Login = () => {
  const [vals, setVals] = React.useState([]);
  const [allUser, setAllUser] = React.useState([]);
  React.useEffect(() => {
    Config.get("/user.json")
      .then((res) => setAllUser(res.data))
      .then(() => {
        const values = Object.values(allUser);
        setVals(values);
      });
  }, []);
  vals.map((e) => console.log(e.name));
  //   const onFinish = (el) => {
  //     console.log(el);
  //     vals.map((e) => {
  //       console.log(e);
  //       if (e.name === el.name && e.password === el.password)
  //         return () => alert("success");
  //       else alert("Error");
  //     });
  //   };
  return (
    <div
      className="flex h-screen bg-cover bg-local justify-center items-center"
      style={{
        backgroundImage: `url(${require(`../../assets/images/seoultech.jpg`)}) `,
      }}
    >
      <div class=" bg-white/30 backdrop-blur-sm max-w-7xl rounded-2xl py-10 px-5 grid grid-cols-5">
        <div className="col-span-2 flex flex-col items-center">
          <img
            className="h-14 rounded-3xl"
            src={require(`../../assets/images/logo_seoultech.png`)}
            alt="gerLogo"
          />
          <Form className="w-full  px-3" layout="vertical">
            <div className=" flex justify-start w-full ">
              <p className="text-3xl font-semibold text-white mt-2 flex text-left">
                Log in
              </p>
            </div>
            <Form.Item label="Phone number" name="phone">
              <Input
                name="phone"
                placeHolder="Phone number to log in . . ."
                className="w-full"
              />
            </Form.Item>
            <Form.Item label="Password" name="password">
              <Input.Password
                name="password"
                allowClear
                type="password"
                placeholder="*******"
              />
            </Form.Item>
            <div className="flex justify-end  ">
              <a className="underline">Forget a password?</a>
            </div>
            <Link to="/addItem">
              <Button
                className="mt-4 w-32 rounded-xl"
                type="primary"
                htmlType="submit"
              >
                Log in
              </Button>
            </Link>
            <p className="text-2xl font-semibold mt-6 w-80 text-white">
              It is forbidden to use for SeoulTech students.
            </p>
          </Form>
        </div>
        <div className="col-span-3 ml-10">
          <img
            alt="bgl"
            className="h-[500px]"
            src={require(`../../assets/images/seoultech1.jpg`)}
          />
        </div>
      </div>
    </div>
  );
};
export default Login;
