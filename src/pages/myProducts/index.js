import React from "react";
import Products from "../../components/products";

function MyProducts() {
  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="ml-4 text-xl">Books</h1>
      <h1 className="mt-20 ml-4 text-xl">Books</h1>
      <div className="mt-25 flex flex-wrap">
        <Products name="The Dutch House" img="book10" price="5000W" />
        <Products name="Bird box" img="book2" price="3000W" />
        <Products name="Everything is fucked" img="book3" price="5000W" />
        <Products name="To kill a Mockingbird" img="book4" price="7000W" />
        <Products name="Ninth house" img="book5" price="3500W" />
        <Products name="Water dancer" img="book6" price="5000W" />
        <Products name="The help" img="book7" price="4000W" />
        <Products name="Water dancer" img="book6" price="5000W" />
        <Products name="The help" img="book7" price="4000W" />
      </div>

      <div className="inline-block">
        <nav aria-label="Page navigation example">
          <ul class="mt-10 inline-flex items-center -space-x-px">
            <li>
              <a
                href="#"
                class="rounded-l-lg block px-3 py-2 ml-0 leading-tight bg-white border border-gray-300"
              ></a>
            </li>
            <li>
              <a
                href="#"
                class="px-3 py-2 leading-tight text-black bg-white border border-gray-300"
              >
                1
              </a>
            </li>
            <li>
              <a
                href="#"
                class="px-3 py-2 leading-tight text-black bg-white border border-gray-300"
              >
                2
              </a>
            </li>
            <li>
              <a
                href="#"
                aria-current="page"
                class="z-10 px-3 py-2 leading-tight text-blue-600 border border-blue-300"
              >
                3
              </a>
            </li>
            <li>
              <a
                href="#"
                class="px-3 py-2 leading-tight text-black bg-white border border-gray-300"
              >
                4
              </a>
            </li>
            <li>
              <a
                href="#"
                class="px-3 py-2 leading-tight text-black bg-white border border-gray-300"
              >
                5
              </a>
            </li>
            <li>
              <a
                href="#"
                class="block px-3 py-2 leading-tight text-black bg-white border border-gray-300 rounded-r-lg"
              ></a>
            </li>
          </ul>
        </nav>
        <button className=" bg-[#339CCC] flex py-[5px] px-5 rounded-full space-x-2">
          <div className="text-xl"></div>
          <div className=" text-black">Edit</div>
        </button>
        <button className=" bg-[#339CCC] flex py-[5px] px-5 rounded-full space-x-2">
          <div className="text-xl"></div>
          <div className=" text-black">Delete</div>
        </button>
      </div>
    </div>
  );
}
export default MyProducts;
