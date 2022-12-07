import { async } from "@firebase/util";
import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Config from "../../database";

function ProductDetail() {
  const [data, setData] = useState({});
  const params = useParams();
  const id = params.id;

  useEffect(async () => {
    const res = await Config.get(`/advertises.json`);
    const temp = res.data;
    setData(temp[id]);
  }, []);
  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="mt-20">{data.name}</h1>
      <h1 className="mt-20">{data.price}</h1>
      <div>{data.about}</div>
      <img src={data.image} />
    </div>
  );
}

export default ProductDetail;
