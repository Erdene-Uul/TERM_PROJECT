import { async } from "@firebase/util";
import React, { useState } from "react";
import { useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import Config from "../../database";

function ProductDetail(props) {
  const location = useLocation();
  const [data, setData] = useState({});
  const params = useParams();
  const id = params.id;
  console.log(location);
  useEffect(async () => {
    window.scrollTo(0, 0);
    const res = await Config.get(`/advertises.json`);
    const temp = res.data;
    setData(temp[id]);
  }, []);
  return (
    <div className="max-w-7xl mx-auto pt-32">
      <h1 className="">{data?.name}</h1>
      <h1 className="">{data?.price}</h1>
      <div>{data?.about}</div>
      <img src={location.state?.imgUrl} />
    </div>
  );
}

export default ProductDetail;
