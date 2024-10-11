"use client";

import Image from "next/image";
import Icon from "./component/Icon";
import Navbar from "./component/Navbar";
import IconMiddle from "./component/IconMiddle";
import SideBar from "./component/SideBar";
import Account from "./component/Account";
import Event from "./component/Event";
import Card from "./component/Card";
import iconku from "@/assets/logo_gtlive.svg";
import icon2 from "@/assets/logo_gt7.svg";
import gambar22 from "@/assets/i1JUTs1hkUxuv7c.jpg";
import png from "@/assets/logo-gt.png";
import gambar23 from "@/assets/i1I5PxBYMA3kgz.png";
import gambar24 from "@/assets/icon-country-us.svg";
import gambar2 from "@/assets/i1IkegzNFUf4fb.jpg";
import CardEvent from "./component/CardEvent";
import Fotter from "./component/Fotter";
import second from "@/assets/logo-psn.svg";
import threed from "@/assets/logo-ps.svg";
import threeds from "@/assets/logo-pdi.svg";
import Logo from "./component/Logo";
import SliderImage from "./component/SliderImage";

export default function Home() {
  return (
    <>
      <div>
        <SideBar />
        <Navbar />
      </div>

      {/* Top Icons Section */}
      <div className="flex justify-between p-2 mx-8">
        <Icon />
        <div className="flex gap-2 p-4">
          <Account gambar={gambar24} />
        </div>
      </div>

      {/* Middle Icon */}
      <IconMiddle gambar={png} />

      {/* Event Section */}
      <div className="flex flex-wrap lg:flex-row justify-center gap-10 mt-4 border-b border-gray-500 ">
        <Event tombol={icon2} />
        <Event tombol={icon2} />
        <Event tombol={icon2} />
        <Event tombol={icon2} />
      </div>

      {/* Card Section */}
      <div className="flex gap-10 m-10 p-10 flex-col lg:flex-row text-2xl md:text-lg">
        <Card
          card="World Series"
          gambar={gambar2}
          desc="The Gran Turismo World Series 2024 Special Page Now Open! Round 3 - Tokyo Event Streamed Live from the Venue on September 28!"
        />
        <Card
          card="World Series"
          gambar={gambar22}
          desc="Earn up to 2,000,000 In-game Credits with the Gran Turismo World Series 2024 Round 3 Tokyo Predict the Winners Campaign!"
        />
      </div>

      <div className="flex flex-row lg:flex-row justify-between p-10 gap-3 text-xl sm:group ">
        <Card
          card="World Series"
          desc="Round 3 - Tokyo Driver Profiles"
          gambar={gambar23}
        />
        <Card
          card="World Series"
          desc="Round 3 - Tokyo Driver Profiles"
          gambar={gambar23}
        />
        <Card
          card="World Series"
          desc="Round 3 - Tokyo Driver Profiles"
          gambar={gambar23}
        />
      </div>

      {/* Card event */}
      <div className="m-0 p-0 bg-[url('/images/line_white.png')] bg-cover bg-center bg-fixed w-full overflow-x-hidden overflow-y-hidden">
        <div className="flex justify-center gap-2 p-10 sm:max-w-full">
          <SliderImage gambarList={[gambar22, gambar23, gambar22, gambar23]} />
        </div>

        {/* Card Event 2 */}
        <h1 className="font-bold text-2xl px-20 mt-4  text-left md:text-center">
          Latest Information
        </h1>
        <div className=" lg:flex md:grid-cols-2  p-20 gap-4 text-xl flex-row lg:flex-row justify-between">
          <a href="#">
            <CardEvent
              gambar={gambar23}
              infor="Hallo"
              describe="Win Two Race Cars With the Gran Turismo World Series 2024 Round 3 – Tokyo Viewers Gift"
            />
          </a>
          <a href="#">
            <CardEvent
              gambar={gambar23}
              infor="Hallo"
              describe="Win Two Race Cars With the Gran Turismo World Series 2024 Round 3 – Tokyo Viewers Gift"
            />
          </a>
          <a href="#">
            <CardEvent
              gambar={gambar23}
              infor="Hallo"
              describe="Win Two Race Cars With the Gran Turismo World Series 2024 Round 3 – Tokyo Viewers Gift"
            />
          </a>
          <a href="#">
            <CardEvent
              gambar={gambar23}
              infor="Hallo"
              describe="Win Two Race Cars With the Gran Turismo World Series 2024 Round 3 – Tokyo Viewers Gift"
            />
          </a>
        </div>
      </div>

      {/* Content Card Event 2 */}
      <div className="m-0 p-0 bg-[url('/images/line_Black.png')] bg-cover bg-center bg-fixed w-full overflow-x-hidden overflow-y-hidden">
        <h1 className="font-bold text-2xl px-16 mt-4 inline-block text-left md:text-center">
          Latest Information
        </h1>
        <div className=" lg:flex md:grid-cols-3 p-16 gap-4 md:max-w-full  text-xl">
          <a href="#">
            <CardEvent
              gambar={gambar2}
              infor="Hallo"
              describe="Win Two Race Cars With the Gran Turismo World Series 2024 Round 3 – Tokyo Viewers Gift"
            />
          </a>
          <a href="#">
            <CardEvent
              gambar={gambar2}
              infor="Hallo"
              describe="Win Two Race Cars With the Gran Turismo World Series 2024 Round 3 – Tokyo Viewers Gift"
            />
          </a>
          <a href="#">
            <CardEvent
              gambar={gambar2}
              infor="Hallo"
              describe="Win Two Race Cars With the Gran Turismo World Series 2024 Round 3 – Tokyo Viewers Gift"
            />
          </a>
        </div>

        <div className="m-0 p-0 bg-[url('/images/line_Black.png')] bg-cover bg-center bg-fixed w-full overflow-x-hidden overflow-y-hidden">
          <div className="p-20">
            <Icon />
            <button>Team of Services ~</button>
            <button>Privacy Policy ~</button>
            <div className="flex gap-4 mt-2 ">
              <Fotter gambar={threed} />
              <Fotter gambar={second} />
            </div>
            <div className="max-w-lg text-xs font-bold mt-4 lg:flex-col">
              Manufacturers, cars, names, brands and associated imagery featured
              in this game in some cases include trademarks and/or copyrighted
              materials of their respective owners. All rights reserved. Any
              depiction or recreation of real world locations, entities,
              businesses, or organizations is not intended to be or imply any
              sponsorship or endorsement of this game by such party or parties.
              "Gran Turismo" logos are registered trademarks or trademarks of
              Sony Interactive Entertainment Inc.
            </div>
            <div className="flex justify-end lg:flex-row">
              <Logo gambar={threeds} />
              <Logo gambar={iconku} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
