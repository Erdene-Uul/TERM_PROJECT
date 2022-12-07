import React from "react";

import { Link } from "react-router-dom";

const footer = () => {
  return (
    <div className=" bg-[#175b7a] ">
      <div className="h-80 mt-20 max-w-7xl flex text-white/90   mx-auto  flex-col py-10 ">
        <div className="flex">
          <img
            className="h-9 mt-55 rounded-3xl"
            src={require(`../../assets/images/logo_seoultech.png`)}
            alt="gerLogo"
          />

          <div>
            <div className="mt-50 font-bold text-2xl">STSP</div>
            <p className="text-xs">It's forbidden to use for SeoulTech students</p>
          </div>
        </div>


        <div className="flex justify-evenly items-end">
          {" "}
          <div className="flex flex-col text-sm justify-center">
            <p className="text-lg">Help?</p>
            <ul className="space-y-1">
              <li>
                {" "}
                <Link>Common question and answer</Link>
              </li>
              <li>
                <Link>Service of Registration</Link>
              </li>
            </ul>
          </div>
        </div>

          <div className="flex flex-col text-sm space-y-1 justify-evenly items-end">
            <p className="text-lg">Contact us</p>
            <div className="flex">
              <img
                className="h-4 mr-2"
                alt="loca"
                src={require(`../../assets/images/place.png`)}
              />
              <p>
                {" "}
                CS department, Building 60, Mirae hall of SeoulTech {" "}
              </p>
            </div>
            <div className="flex">
              <img
                className="h-4 mr-2"
                alt="phone"
                src={require(`../../assets/images/phone_in_talk.png`)}
              />
              <p>010-1234-5678</p>
            </div>
          </div>

        <ul className="flex justify-center space-x-10">
          <li>
            <Link>
              <img
                alt="iglogo"
                className="h-5"
                src={require(`../../assets/images/Instagram.png`)}
              />
            </Link>
          </li>
          <li>
            <Link>
              <img
                className="h-5"
                alt="ytblogo"
                src={require(`../../assets/images/YouTube.png`)}
              />
            </Link>
          </li>
          <li>
            <Link>
              <img
                className="h-5"
                alt="twitterLogo"
                src={require(`../../assets/images/Twitter.png`)}
              />
            </Link>
          </li>
          <li>
            <img
              className="h-5"
              alt="fbLogo"
              src={require(`../../assets/images/Facebook.png`)}
            />
          </li>
        </ul>
      </div>
    </div>
  );
};
export default footer;
