import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Products from "../../components/products";
import { getDownloadURL, listAll, ref } from "firebase/storage";
import storage from "../../firebase";
import Config from "../../database";

const Home = (props) => {
  const [imageList, setImageList] = useState([]);
  const imageListRef = ref(storage, "image/");
  const [advertises, setAdvertises] = useState([]);
  console.log(imageList.filter((e) => e.includes("obj.jpg")));

  const fetchAds = async () => {
    const res = await Config.get("/advertises.json");
    let fetchedAds = [];
    for (let key in res.data) {
      fetchedAds.push({ ...res.data[key] });
    }
    setAdvertises(fetchedAds);
  };
  const fetchImg = async () => {
    const res = await listAll(imageListRef);
    res.items.map(async (e) => {
      const url = await getDownloadURL(e);
      setImageList((prev) => [...prev, url]);
    });
  };
  useEffect(() => {
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
  const helper = (arr, n) => {
    let bool;
    arr.map((e) => {
      if (e.category == n) {
        bool = true;
      }
    });
    if (bool) return true;
    else return false;
  };
  let comp;
  if (props.catVal == "all") {
    comp = (
      <>
        {helper(advertises, "books") ? (
          <>
            {" "}
            <h1 className="mt-24 ml-4 text-xl">Books</h1>
            <div className=" flex flex-wrap ">
              {advertises?.map((e) =>
                e.category == "books" ? (
                  <Link
                    to={`/productDetail/${e.id}`}
                    state={{
                      imgUrl: imageList.filter((el) => el.includes(e.image))[0],
                    }}
                  >
                    <Products
                      name={e.about}
                      img={imageList.filter((el) => el.includes(e.image))[0]}
                      price={e.price}
                    />
                  </Link>
                ) : null
              )}
            </div>
          </>
        ) : null}
        {helper(advertises, "academicDress") ? (
          <>
            {" "}
            <h1 className="mt-4 ml-4 text-xl">Academic dresses</h1>
            <div className=" flex flex-wrap ">
              {advertises?.map((e) =>
                e.category == "academicDress" ? (
                  <>
                    {console.log(
                      imageList.filter((el) => el.includes(e.image))
                    )}
                    <Link
                      to={`/productDetail/${e.id}`}
                      state={{
                        imgUrl: imageList.filter((el) =>
                          el.includes(e.image)
                        )[0],
                      }}
                    >
                      <Products
                        name={e.about}
                        img={imageList.filter((el) => el.includes(e.image))[0]}
                        price={e.price}
                      />
                    </Link>
                  </>
                ) : null
              )}
            </div>
          </>
        ) : null}
        {helper(advertises, "electronic") ? (
          <>
            {" "}
            <h1 className="mt-4 ml-4 text-xl">Electronics</h1>
            <div className=" flex flex-wrap ">
              {advertises?.map((e) =>
                e.category == "electronic" ? (
                  <Link
                    to={`/productDetail/${e.id}`}
                    state={{
                      imgUrl: imageList.filter((el) => el.includes(e.image))[0],
                    }}
                  >
                    <Products
                      name={e.about}
                      img={imageList.filter((el) => el.includes(e.image))[0]}
                      price={e.price}
                    />
                  </Link>
                ) : null
              )}
            </div>
          </>
        ) : null}
      </>
    );
  } else if (props.catVal == "books" && helper(advertises, "books")) {
    comp = (
      <>
        {" "}
        <h1 className="mt-24 ml-4 text-xl">Books</h1>
        <div className=" flex flex-wrap ">
          {advertises?.map((e) =>
            e.category == "books" ? (
              <Link
                to={`/productDetail/${e.id}`}
                state={{
                  imgUrl: imageList.filter((el) => el.includes(e.image))[0],
                }}
              >
                <Products
                  name={e.about}
                  img={imageList.filter((el) => el.includes(e.image))[0]}
                  price={e.price}
                />
              </Link>
            ) : null
          )}
        </div>
      </>
    );
  } else if (
    props.catVal == "academicDress" &&
    helper(advertises, "academicDress")
  ) {
    comp = (
      <>
        <h1 className="mt-4 ml-4 text-xl">Academic Dresses</h1>
        <div className=" flex flex-wrap ">
          {advertises?.map((e) =>
            e.category == "academicDress" ? (
              <Link
                to={`/productDetail/${e.id}`}
                state={{
                  imgUrl: imageList.filter((el) => el.includes(e.image))[0],
                }}
              >
                <Products
                  name={e.about}
                  img={imageList.filter((el) => el.includes(e.image))[0]}
                  price={e.price}
                />
              </Link>
            ) : null
          )}
        </div>
      </>
    );
  } else if (props.catVal == "electronic" && helper(advertises, "electronic")) {
    comp = (
      <>
        <h1 className="mt-4 ml-4 text-xl">Electronics</h1>
        <div className=" flex flex-wrap ">
          {advertises?.map((e) =>
            e.category == "electronic" ? (
              <Link
                to={`/productDetail/${e.id}`}
                state={{
                  imgUrl: imageList.filter((el) => el.includes(e.image))[0],
                }}
              >
                <Products
                  name={e.about}
                  img={imageList.filter((el) => el.includes(e.image))[0]}
                  price={e.price}
                />
              </Link>
            ) : null
          )}
        </div>
      </>
    );
  }
  return (
    <div className="bg-white">
      <div>
        <img
          className="opacity-50 backdrop-blur-sm w-screen h-5/6"
          src={require(`../../assets/images/seoultech.jpg`)}
        />
        <h2 className="absolute text-4xl text-black top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-25">
          Welcome to SeoulTech's e-shop! You can sell or buy something that is
          used in SeoulTech with this website...
        </h2>
      </div>
      <div className="max-w-6xl mx-auto">{comp}</div>
    </div>
  );
};

export default Home;
