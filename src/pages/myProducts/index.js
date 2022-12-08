import React, { useContext } from "react";
import Products from "../../components/products";
import { getDownloadURL, listAll, ref } from "firebase/storage";
import storage from "../../firebase";
import Config from "../../database";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";

function MyProducts() {
  const myProduct = [];
  const { currentUser } = useContext(AuthContext);
  const [imageList, setImageList] = React.useState([]);
  const imageListRef = ref(storage, "image/");
  const [advertises, setAdvertises] = React.useState([]);
  advertises?.map((e) => {
    myProduct.push(e);
    console.log("myproducts-->", myProduct);
  });
  console.log("imgList--->", imageList);

  console.log("advertises--->", advertises);
  const fetchImg = async () => {
    const res = await listAll(imageListRef);
    res.items.map(async (e) => {
      const url = await getDownloadURL(e);
      setImageList((prev) => [...prev, url]);
    });
  };

  React.useEffect(() => {
    console.log(currentUser.uid);
    window.scrollTo(0, 0);
    Config.get("/advertises.json").then((res) => {
      const fetchedAds = [];
      for (let key in res.data) {
        fetchedAds.unshift({ ...res.data[key], id: key });
      }
      setAdvertises(fetchedAds);
    });
    fetchImg();
  }, []);
  return (
    <div className="max-w-7xl mx-auto pt-32">
      <h1 className="ml-4 text-xl">My Products</h1>
      <div className="mt-25 flex flex-wrap">
        {myProduct?.map((e) => {
          <Link
            to={`/productDetail/${e.id}`}
            state={{
              imgUrl: imageList.filter((el) => el.includes(e.image))[0],
            }}
          >
            <Products
              name={e.about}
              price={e.price}
              img={imageList.filter((el) => el.includes(e.image))[0]}
            />
          </Link>;
        })}
      </div>
    </div>
  );
}
export default MyProducts;
