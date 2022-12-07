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
    //fetchAds();
    fetchImg();

    // listAll(imageListRef)
    //   .then((res) => {
    //     res.items.forEach((items) => {
    //       getDownloadURL(items).then((url) => {
    //         setImageList((prev) => [...prev, url]);
    //       });
    //     });
    //   })
    //   .finally(console.log(imageList));
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
                  <Link to={`/productDetail/${e.id}`}>
                    <Products
                      name={e.about}
                      img={imageList[0]}
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
                    {console.log(e.image)}
                    <Link to={`/productDetail/${e.id}`}>
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
                  <Link to={`/productDetail/${e.id}`}>
                    <Products
                      name={e.about}
                      img={imageList[0]}
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
              <Link to={`/productDetail/${e.id}`}>
                <Products name={e.about} img={imageList[0]} price={e.price} />
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
              <Link to={`/productDetail/${e.id}`}>
                <Products name={e.about} img={imageList[0]} price={e.price} />
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
              <Link to={`/productDetail/${e.id}`}>
                <Products name={e.about} img={imageList[0]} price={e.price} />
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
      <div className="max-w-6xl mx-auto">
        {comp}
        {/* <h1 className="mt-20 ml-4 m-3 text-xl">Books</h1>
        <div className=" flex flex-wrap m-5">
          <Products name="The Dutch House" img="book10" price="5000W" />
          <Products name="Bird box" img="book2" price="3000W" />
          <Products name="Everything is fucked" img="book3" price="5000W" />
          <Products name="To kill a Mockingbird" img="book4" price="7000W" />
          <Products name="Ninth house" img="book5" price="3500W" />
          <Products name="Water dancer" img="book6" price="5000W" />
          <Products name="The help" img="book7" price="4000W" />
        </div>

        <h1 className="mt-20 ml-4 m-3 text-xl">Academic dresses</h1>
        <div className=" flex flex-wrap m-5">
          <Products name="Spring Jacket" img="clothes1" price="20000W" />
          <Products name="Sweater" img="clothes3" price="10000W" />
          <Products name="Summer Jacket" img="clothes2" price="14000W" />
          <Products name="Hoodie" img="clothes4" price="8000W" />
          <Products name="Coat" img="clothes6" price="35000W" />
          <Products name="T-shirt" img="clothes5" price="5000W" />
          <Products name="Teddy" img="clothes7" price="14000W" />
        </div>

        <h1 className="mt-20 ml-4 m-3 text-xl">Electronics</h1>
        <div className="flex flex-wrap m-5">
          <Products name="IPad" img="Ipad" price="5000W" />
          <Products name="Bird box" img="book2" price="3000W" />
          <Products name="Everything is fucked" img="book3" price="5000W" />
          <Products name="To kill a Mockingbird" img="book4" price="7000W" />
          <Products name="Ninth house" img="book5" price="3500W" />
          <Products name="Water dancer" img="book6" price="5000W" />
          <Products name="The help" img="book7" price="4000W" />
        </div> */}
      </div>
    </div>
  );
};

export default Home;
