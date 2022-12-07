import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Category from "../../components/category";
import Products from "../../components/products";
const Home = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="bg-white">
      <Header />
      <div className="max-w-6xl mx-auto">

        <h1 className="mt-20 ml-4 m-3 text-xl">Books</h1>
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
        <div className=" flex flex-wrap m-5">
          <Products name="The Dutch House" img="book10" price="5000W" />
          <Products name="Bird box" img="book2" price="3000W" />
          <Products name="Everything is fucked" img="book3" price="5000W" />
          <Products name="To kill a Mockingbird" img="book4" price="7000W" />
          <Products name="Ninth house" img="book5" price="3500W" />
          <Products name="Water dancer" img="book6" price="5000W" />
          <Products name="The help" img="book7" price="4000W" />
        </div>

      </div>
      <Footer />
    </div>
  );
};

export default Home;
