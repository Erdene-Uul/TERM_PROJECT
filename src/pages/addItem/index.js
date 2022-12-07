import React, { useEffect, useState } from "react";
import storage from "../../firebase";
import Header from "../../components/header";
import { getDownloadURL, listAll, ref, uploadBytes } from "firebase/storage";
import ImageUploader from "react-images-upload";
import { useHistory } from "react-router-dom";
import Config from "../../database";
import { v4 } from "uuid";
import Footer from "../../components/footer";
import { Form, Input, Select } from "antd";

const { Option } = Select;

const AddItem = () => {
  const history = useHistory();
  const [imageUpload, setImageUpload] = useState(null);
  const [imageList, setImageList] = useState([]);
  const imageListRef = ref(storage, "image/");
  const uploadImage = () => {
    if (imageUpload === null) return;
    const imageRef = ref(storage, `image/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload)
      .then(() => alert("Added your product on site!"))
      .then(() => history.push("/"));
  };
  const onFinish = (e) => {
    e.image = imageUpload.name;
    Config.post("/advertises.json", e);
    uploadImage();
    console.log(e);
    console.log(imageUpload);
  };
  const onChange = (e) => {
    console.log(e);
  };

  useEffect(() => {
    listAll(imageListRef).then((res) => {
      res.items.forEach((items) => {
        getDownloadURL(items).then((url) => {
          setImageList((prev) => [...prev, url]);
        });
      });
    });
  }, []);
  return (
    <div>
      {" "}
      <Header />
      <div className=" text-center font-bold mt-14 text-3xl">Add product</div>
      <div className="flex max-w-6xl mx-auto">
        <div className="w-1/2 flex flex-col justify-center items-center">
          <div className="">
            <ImageUploader
              buttonText="Insert an image"
              style={{
                width: 450,
                height: 300,
              }}
              withPreview={true}
              onChange={(e) => setImageUpload(e[0])}
            />
          </div>
        </div>
        <div className="w-1/2 py-16 mt-10 px-12 max-w-xl mx-auto">
          <Form onFinish={onFinish} className="flex flex-col space-y-1 ">
            <label className="font-bold text-black">Title</label>
            <Form.Item name={"name"}>
              <Input />
            </Form.Item>

            <label className="font-bold">Category</label>
            <Form.Item name={"category"}>
              <Select defaultValue="Сонгох" onChange={onChange}>
                <Option value="product">Book1</Option>
                <Option value="meat">Book2</Option>
                <Option value="vegetable">Book3</Option>
                <Option value="fruit">Book4</Option>
              </Select>
            </Form.Item>

            <label className="font-bold">Location</label>
            <Form.Item name={"location"}>
              <Select defaultValue="Choose" onChange={onChange}>
                <Option value="Mirae hall">Mirae hall</Option>
                <Option value="Архангай">Архангай</Option>
                <Option value="Баян-Өлгий	">Баян-Өлгий </Option>
                <Option value="Баянхонгор">Баянхонгор</Option>
                <Option value="Булган">Булган</Option>
                <Option value="Говь-Алтай">Говь-Алтай</Option>
                <Option value="Говьсүмбэр">Говьсүмбэр</Option>
                <Option value="Дархан-Уул">Дархан-Уул</Option>
                <Option value="Дорноговь">Дорноговь</Option>
                <Option value="Дорнод">Дорнод</Option>
                <Option value="	Дундговь"> Дундговь</Option>
                <Option value="Завхан">Завхан</Option>
                <Option value="Орхон">Орхон</Option>
                <Option value="Өвөрхангай">Өвөрхангай</Option>
                <Option value="Өмнөговь">Өмнөговь</Option>
                <Option value="Сүхбаатар">Сүхбаатар</Option>
                <Option value="Сэлэнгэ">Сэлэнгэ</Option>
                <Option value="Төв">Төв</Option>
                <Option value="Увс">Увс</Option>
                <Option value="Ховд">Ховд</Option>
                <Option value="Хөвсгөл">Хөвсгөл</Option>
                <Option value="Хэнтий">Хэнтий</Option>
              </Select>
            </Form.Item>

            <label className="font-bold">Хаяг</label>
            <Form.Item name={"address"}>
              <Input />
            </Form.Item>

            <label className="font-bold">Price</label>
            <Form.Item name={"price"}>
              <Input />
            </Form.Item>

            <label className="font-bold">Phone</label>
            <Form.Item name={"phone"}>
              <Input />
            </Form.Item>

            <label className="font-bold">Хүргэлт</label>
            <Form.Item name={"delivery"}>
              <Select defaultValue="Сонгох" onChange={onChange}>
                <Option value="withDelivery">Хүргэлттэй</Option>
                <Option value="noDelivery">Хүргэлтгүй</Option>
                <Option value="companyDelivery">Компаны хүргэлт</Option>
              </Select>
            </Form.Item>

            <label className="font-bold">Description</label>
            <Form.Item name={"about"}>
              <Input.TextArea />
            </Form.Item>
            <Form.Item>
              <button
                htmltype="submit"
                className="bg-[#E28025] px-7 py-1 rounded-lg text-white mt-5 "
              >
                Submit
              </button>
            </Form.Item>
          </Form>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default AddItem;
