import Head from "next/head";
import Image from "next/image";
import Hamburger from "hamburger-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { InfinitySpin } from "react-loader-spinner";
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";
import { register } from "swiper/element/bundle";
register();
export default function Home() {
  const data = [
    {
      img: "/img4.webp",
      title: "Jogging Track",
      icon: "/running.svg",
    },
    {
      img: "/img6.webp",
      title: "Visitors Parking",
      icon: "/car.svg",
    },
    {
      img: "/img7.webp",
      title: "Swimming Pool",
      icon: "/swimming.svg",
    },
    {
      img: "/img9.webp",
      title: "Gym",
      icon: "/gym.svg",
    },
    {
      img: "/img11.webp",
      title: "Pet Corner",
      icon: "/pets.svg",
    },
    {
      img: "/img10.webp",
      title: "Mutli Purpose Hall",
      icon: "/home.svg",
    },
    {
      img: "/img12.webp",
      title: "Cycling Track",
      icon: "/cycling.svg",
    },
    {
      img: "/img14.webp",
      title: "Mini Theatre",
      icon: "/theatre.svg",
    },
    {
      img: "/img13.webp",
      title: "Cricket Pitch",
      icon: "/cricket.svg",
    },
  ];

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);

  const [isOpen, setOpen] = useState(false);
  const [contact, setContact] = useState(false);

  const submitForm = () => {
    setLoading(true);
    console.log("FORM GO BRRRRRRRRRR");
    console.log({
      name: name,
      email: email,
      phone: phone,
    });
    fetch("https://formsubmit.co/ajax/10xlistings@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        phone: phone,
      }),
    })
      .then((response) => response.json())
      .then((res) => {
        setLoading(false);
        setContact(false);
        console.log(res);
        setName("");
        setEmail("");
        setPhone("");
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    setTimeout(() => {
      setContact(true);
    }, 3000);
  }, []);

  return (
    <>
      <Head>
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.8.1/flowbite.min.css"
          rel="stylesheet"
        />
      </Head>
      {loading && (
        <div className="relative z-[899999999999999999]">
          <div className="fixed h-screen w-screen bg-black opacity-50"></div>
          <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <InfinitySpin width="200" color="#BF7301" />
          </div>
        </div>
      )}
      {contact && (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            submitForm();
          }}
          method="POST"
          className="transition-0.9s  fixed left-1/2 top-1/2 z-[9999999] flex w-[40vw] -translate-x-1/2 -translate-y-1/2 flex-col gap-6 rounded-md  bg-white p-6  opacity-[0.95] shadow-2xl transition-all max-md:w-auto"
        >
          <div className="relative text-center text-xl font-semibold text-primary">
            Contact us
            <a
              onClick={() => void setContact(false)}
              className="absolute right-1 cursor-pointer"
            >
              ❌
            </a>
          </div>
          <div className="flex flex-col">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              className="rounded-lg border-[1px] border-solid border-primary py-2 pl-3 outline-none "
              id="name"
              type="text"
              name="Name"
              required
            ></input>
          </div>
          <div className="flex flex-col">
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="rounded-lg border-[1px] border-solid border-primary py-2 pl-3  outline-none"
              id="name"
              type="text"
              name="Email"
              required
            ></input>
          </div>
          <div className="flex gap-6 max-md:gap-1">
            <select
              className="rounded-lg bg-[#F0F0F0] p-3 max-md:w-[30%]"
              name=""
              id=""
            >
              <option value="+91">+91</option>
            </select>
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Mobile"
              className="rounded-lg border-[1px] border-solid border-primary py-2 pl-3  outline-none max-md:w-2/3"
              id="name"
              type="text"
              required
            ></input>
          </div>

          <div className="flex h-full items-end justify-center">
            <button
              className="rounded-lg bg-primary p-3 text-white"
              disabled={false}
              type="submit"
            >
              Send
            </button>
          </div>
        </form>
      )}

      <nav className="fixed top-0 z-[9999999999999] flex w-full items-center justify-between bg-[#FFFFFF] p-2  text-regular max-md:bg-white max-md:py-2">
        <div>
          <img className="h-16" src="/logo.webp" alt="" />
        </div>
        <div className="flex items-center justify-center lg:hidden">
          <div>
            <Hamburger toggled={isOpen} toggle={setOpen} />
          </div>
          {isOpen && (
            <div className="fixed right-0 top-0 flex w-screen translate-y-16 flex-col items-end gap-2 bg-white pb-2">
              {/* <Hamburger toggled={isOpen} toggle={setOpen} /> */}
              <a
                onClick={() => void setOpen(false)}
                className={`w-full rounded-md border-b-2 border-solid border-primary p-2 text-center  text-xl font-semibold text-[#000]`}
                href={"#home"}
              >
                Home
              </a>
              <a
                onClick={() => void setOpen(false)}
                className={`w-full rounded-md border-b-2 border-solid border-primary p-2 text-center  text-xl font-semibold text-[#000]`}
                href={"#overview"}
              >
                Overview
              </a>
              <a
                onClick={() => void setOpen(false)}
                className={`w-full rounded-md border-b-2 border-solid border-primary p-2 text-center  text-xl font-semibold text-[#000]`}
                href={"#price"}
              >
                Price
              </a>
              <a
                onClick={() => void setOpen(false)}
                className={`w-full rounded-md border-b-2 border-solid border-primary p-2 text-center  text-xl font-semibold text-[#000]`}
                href={"#site"}
              >
                Site & Floor Plan
              </a>
              <a
                onClick={() => void setOpen(false)}
                className={`w-full rounded-md border-b-2 border-solid border-primary p-2 text-center  text-xl font-semibold text-[#000]`}
                href={"#amenities"}
              >
                Amenties
              </a>
              <a
                onClick={() => void setOpen(false)}
                className={`w-full rounded-md border-b-2 border-solid border-primary p-2 text-center  text-xl font-semibold text-[#000]`}
                href={"#gallery"}
              >
                Gallery
              </a>
              <a
                onClick={() => void setOpen(false)}
                className={`w-full rounded-md border-b-2 border-solid border-primary p-2 text-center  text-xl font-semibold text-[#000]`}
                href={"#tour"}
              >
                Tour
              </a>
              <a
                onClick={() => void setOpen(false)}
                className={`w-full rounded-md border-b-2 border-solid border-primary p-2 text-center  text-xl font-semibold text-[#000]`}
                href={"#location"}
              >
                Location
              </a>
              <a
                onClick={() => void setOpen(false)}
                className={`w-full rounded-md border-b-2 border-solid border-primary p-2 text-center  text-xl font-semibold text-[#000]`}
                href={"#contact"}
              >
                Contact
              </a>
              <a
                className={`w-full rounded-md border-b-2 border-solid border-primary p-2 text-center  text-xl font-semibold text-[#000]`}
                href={"link"}
              >
                Contact
              </a>
            </div>
          )}
        </div>
        <div className="hidden lg:flex lg:gap-5 xl:gap-12 ">
          <a
            className={`font-regular rounded-md p-3 text-[#757678]`}
            href={"#home"}
          >
            Home
          </a>
          <a
            className={`font-regular rounded-md p-3 text-[#757678]`}
            href={"#overview"}
          >
            Overview
          </a>
          <a
            className={`font-regular rounded-md p-3 text-[#757678]`}
            href={"#price"}
          >
            Price
          </a>
          <a
            className={`font-regular rounded-md p-3 text-[#757678]`}
            href={"#site"}
          >
            Site & Floor Plan
          </a>
          <a
            className={`font-regular rounded-md p-3 text-[#757678]`}
            href={"#amenities"}
          >
            Amenties
          </a>
          <a
            className={`font-regular rounded-md p-3 text-[#757678]`}
            href={"#gallery"}
          >
            Gallery
          </a>
          <a
            className={`font-regular rounded-md p-3 text-[#757678]`}
            href={"#tour"}
          >
            Tour
          </a>
          <a
            className={`font-regular rounded-md p-3 text-[#757678]`}
            href={"#location"}
          >
            Location
          </a>
          <a
            className={`font-regular rounded-md p-3 text-[#757678]`}
            href={"#contact"}
          >
            Contact
          </a>
        </div>
      </nav>
      <div className="fixed bottom-2 right-2 z-[9999999999999999] flex flex-col items-end gap-3">
        <div className=" flex w-full items-center justify-end max-md:justify-center">
          <button className="transition-.3s group relative flex items-center gap-3 rounded-md bg-primary p-3 text-white opacity-80 transition-all max-md:p-2">
            <img
              src="/wa.svg"
              className="transition-.3s w-[20px] transition-all group-hover:translate-x-[5.2em]"
              alt=""
            />
            <a
              href="https://wa.me/+919148434894?text=Hi"
              className="transition-.3s transition-all group-hover:opacity-0"
            >
              Text us on WhatsApp
            </a>
          </button>
        </div>
        <div className="flex w-full items-end justify-end ">
          <button className="transition-.3s group relative flex items-center gap-3 rounded-md bg-primary p-3 text-white opacity-80 transition-all max-md:p-2">
            <img
              src="/call.svg"
              className="transition-.3s w-[20px] transition-all group-hover:translate-x-[3.8em]"
              alt=""
            />
            <a
              href="tel:+919148434894"
              className="transition-.3s transition-all group-hover:opacity-0"
            >
              Give us a Call
            </a>
          </button>
        </div>
      </div>
      <section
        id="home"
        style={{
          backgroundImage: `url("/building.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="relative mb-16 flex h-screen w-full items-center justify-center pb-8 max-md:pt-16"
      >
        <div className="z-[999] flex h-full w-3/5 flex-col justify-center gap-4 text-white max-md:w-full max-md:items-center max-md:px-3">
          <h1 className="text-[52px] font-bold max-md:text-center max-md:text-[32px] max-sm:text-3xl ">
            Your Address Of Luxury
          </h1>
          <h3 className="text-[21px] font-semibold max-md:text-center max-md:text-[19px]">
            Book Now to Avail Special Price Offers!
          </h3>
          <p className="w-3/4 text-regular font-extralight max-md:w-full max-md:text-center md:text-[19px]">
            3 &amp; 4 BHK Luxury Flats <br /> 1.4 Cr Onwards
          </p>
          <div className="max-md:flex max-md:w-full max-md:items-center max-md:justify-center">
            <button
              onClick={() => setContact(true)}
              className="transition-.3s group relative flex items-center gap-3 rounded-md bg-primary p-3 text-white transition-all max-md:p-2 "
            >
              <img
                src="/down.svg"
                className="transition-.3s w-[20px] transition-all group-hover:translate-x-[5.5em]"
                alt=""
              />
              <span className="transition-.3s transition-all group-hover:opacity-0">
                Download Brouchure
              </span>
            </button>
          </div>
        </div>
      </section>

      <section
        id="overview"
        className="relative flex w-full max-md:flex max-md:flex-col-reverse max-md:items-center  max-md:gap-16 max-md:pb-16"
      >
        <div className="relative z-[99999] w-1/2 translate-y-16 max-md:translate-y-0">
          <img
            style={{
              filter: "drop-shadow(0 25px 25px rgb(0 0 0 / .5))",
            }}
            className="w-full rounded-xl"
            src="/b2.jpg"
            alt=""
          />
        </div>
        <div className="absolute -top-16 right-0 flex justify-end max-md:top-0">
          <img
            src="/Pattern.svg"
            className="translate-x-96 -scale-x-100 opacity-50 max-md:w-full"
            alt=""
          />
        </div>
        <div className="z-[99] flex w-1/2 flex-col justify-center gap-3 px-12 max-md:w-full max-md:items-center max-md:text-center ">
          <div className="h-1 w-44 bg-primary"></div>
          <h3 className="text-4xl font-bold">Overview</h3>
          <p className="text-regular font-extralight max-md:w-1/2 max-sm:w-full">
            Lodha is India’s largest real estate developer by residential sales
            value for the financial years 2014 to 2020 and the second largest
            developer by area delivered*. The company has clocked sales of
            approximately INR 6,570 crores with gross collections of over
            approximately INR 8,190 crores for FY 19-20. For FY 19-20, the brand
            recorded a completed developable area of 15.65 Million sq ft.*As per
            the report titled “Real Estate Industry Report” dated January 2021,
            issued by Anarock Property Consultant Private Limited
          </p>
          <div className="grid grid-cols-2 place-content-start max-md:text-xs md:grid-cols-4">
            <div className="grid place-items-center text-center">
              <img src="/mall.svg" alt="" className="h-8" />
              <p>
                Elements Mall
                <br />
                (200 Mts)
              </p>
            </div>
            <div className="grid place-items-center text-center">
              <img src="/metro.svg" alt="" className="h-8" />
              <p>
                Nagawara
                <br />
                Metro Station
                <br />
                (400 Mts)
              </p>
            </div>
            <div className="grid place-items-center text-center">
              <img src="/office.svg" alt="" className="h-8" />
              <p>
                Inside Manyata
                <br />
                Tech Park
              </p>
            </div>
            <div className="grid place-items-center text-center">
              <img src="/clubhouse.svg" alt="" className="h-8" />
              <p>
                5000 Sqft
                <br />
                Clubhouse
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="price"
        className="relative z-[9999] flex justify-center gap-3 bg-[#F5F5F5] bg-transparent  py-44"
      >
        <div className="flex w-3/5 flex-col gap-3 max-md:w-4/5 max-sm:w-full max-sm:px-3">
          <div className="h-1 w-44 bg-primary"></div>
          <h3 className="text-4xl font-bold">Price</h3>
          <div className="flex gap-12 max-lg:gap-3 max-md:flex-col">
            <div>
              <div className="my-3 rounded-2xl bg-white p-0 shadow-2xl">
                <div>
                  <img className="" src="/img1.webp" alt="" />
                </div>
                <div className="p-3 text-xl font-bold">3 BHK Flat</div>
                <div className="flex w-full">
                  <div className="font-regular flex w-1/2 items-center justify-center gap-1 border-[1px] border-solid border-gray-100 p-4 text-center max-sm:flex-col max-sm:gap-3">
                    <img className="w-[14px]" src="/area.svg" alt="" />
                    <span className="text-regular max-sm:text-sm">
                      1700-2000 Sq.ft
                    </span>
                  </div>
                  <div className="font-regular flex w-1/2 items-center justify-center gap-1 border-[1px] border-solid border-gray-100 p-4 text-center max-sm:flex-col max-sm:gap-3">
                    <img className="w-[14px]" src="/price.svg" alt="" />
                    <span className="text-regular max-sm:text-sm">
                      1.90 Cr Onwards
                    </span>
                  </div>
                </div>
                <div className="flex w-full items-center justify-center">
                  <button className="m-5 rounded-md bg-primary p-2 text-regular text-white">
                    Price Breakup
                  </button>
                </div>
              </div>
            </div>
            <div>
              <div className="my-3 rounded-2xl bg-white p-0 shadow-2xl">
                <div>
                  <img className="" src="/img2.webp" alt="" />
                </div>
                <div className="p-3 text-xl font-bold">3 BHK Flat</div>
                <div className="flex w-full">
                  <div className="font-regular flex w-1/2 items-center justify-center gap-1 border-[1px] border-solid border-gray-100 p-4 text-center max-sm:flex-col max-sm:gap-3">
                    <img className="w-[14px]" src="/area.svg" alt="" />
                    <span className="text-regular max-sm:text-sm">
                      1700-2000 Sq.ft
                    </span>
                  </div>
                  <div className="font-regular flex w-1/2 items-center justify-center gap-1 border-[1px] border-solid border-gray-100 p-4 text-center max-sm:flex-col max-sm:gap-3">
                    <img className="w-[14px]" src="/price.svg" alt="" />
                    <span className="text-regular max-sm:text-sm">
                      1.90 Cr Onwards
                    </span>
                  </div>
                </div>
                <div className="flex w-full items-center justify-center">
                  <button className="m-5 rounded-md bg-primary p-2 text-regular text-white">
                    Price Breakup
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="site" className="relative flex w-full justify-center py-32">
        <div className="absolute -top-16 left-0 flex justify-end">
          <img
            src="/Pattern.svg"
            className="-translate-x-96 scale-x-100 opacity-50"
            alt=""
          />
        </div>
        <div className="z-[9999] flex w-3/5 flex-col gap-8 max-md:w-4/5 max-sm:w-full">
          <div className="flex flex-col gap-3 max-md:items-center">
            <div className="h-1 w-44 bg-primary"></div>
            <h3 className="text-4xl font-bold max-md:text-center">
              Site & Floor Plan
            </h3>
          </div>
          <div className="z-[9999] flex w-full items-center justify-center gap-8 max-md:flex-col">
            <div className="group flex flex-col items-center gap-5">
              <div className="relative">
                <img
                  className="transition-0.3s blur-sm transition-all "
                  src="/image13.webp"
                  alt=""
                />
                <span className="transition-0.3s absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl font-semibold text-white transition-all group-hover:opacity-0">
                  Masterplan
                </span>
              </div>
              <button
                onClick={() => void setContact(true)}
                className="w-fit rounded-md bg-primary p-3 text-white"
              >
                Enquire Now
              </button>
            </div>

            <div className="group flex flex-col items-center gap-5">
              <div className="relative">
                <img
                  className="transition-0.3s rotate-180 blur-sm transition-all"
                  src="/image13.webp"
                  alt=""
                />
                <span className="transition-0.3s absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl font-semibold text-white transition-all group-hover:opacity-0">
                  3 BHK
                </span>
              </div>
              <button
                onClick={() => void setContact(true)}
                className="w-fit rounded-md bg-primary p-3 text-white"
              >
                Enquire Now
              </button>
            </div>
            <div className="group flex flex-col items-center gap-5">
              <div className="relative">
                <img
                  className="transition-0.3s -rotate-270 blur-sm transition-all"
                  src="/image13.webp"
                  alt=""
                />
                <span className="transition-0.3s absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl font-semibold text-white transition-all group-hover:opacity-0">
                  2 BHK
                </span>
              </div>
              <button
                onClick={() => void setContact(true)}
                className="w-fit rounded-md bg-primary p-3 text-white"
              >
                Enquire Now
              </button>
            </div>
          </div>
        </div>
      </section>
      <div
        id="amenities"
        className="relative z-[9999] mb-16 flex w-full items-center justify-center"
      >
        <div className="flex w-3/5 flex-col gap-12 max-md:w-4/5 max-md:text-center max-sm:w-full max-sm:px-2">
          <div className="flex flex-col gap-3 max-md:items-center">
            <div className="h-1 w-44 bg-primary"></div>
            <h3 className="text-4xl font-bold">Amenities</h3>
          </div>
          <div className="hidden max-sm:block">
            <swiper-container
              space-between="0"
              slides-per-view="1"
              speed="500"
              autoplay-delay="1000"
              autoplay-disable-on-interaction="false"
              navigation="true"
              pagination="true"
              loop="true"
            >
              {data.map(({ img, icon, title }) => {
                return (
                  <swiper-slide key={title}>
                    <div className="relative flex flex-col items-center gap-3 max-sm:w-full ">
                      <img className="max-w-[80vw]" src={img} alt="" />
                      <div className="absolute left-1/2 top-1/2 flex w-full -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center">
                        <img className="" src={icon} alt="" />
                        <span className="w-full text-center text-lg font-semibold text-white">
                          {title}
                        </span>
                      </div>
                    </div>
                  </swiper-slide>
                );
              })}
            </swiper-container>
          </div>
          <div className="grid grid-cols-3 gap-3 max-md:grid-cols-2 max-sm:hidden">
            {data.map(({ img, icon, title }) => {
              return (
                <div
                  className="relative flex flex-col items-center gap-3 max-sm:w-full "
                  key={title}
                >
                  <img
                    className="h-full w-full rounded-lg object-cover brightness-50"
                    src={img}
                    alt=""
                  />
                  <div className="absolute left-1/2 top-1/2 flex w-full -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center">
                    <img className="w-[35px]" src={icon} alt="" />
                    <span className="w-full text-center text-lg font-semibold text-white">
                      {title}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <section
        id="gallery"
        className="flex h-full w-full items-center justify-center max-sm:items-center"
      >
        {/* <div></div> */}
        <div className="flex w-3/5 flex-col justify-center gap-8 py-16 max-md:w-4/5 max-sm:w-full ">
          <div className="flex flex-col gap-3 max-sm:items-center">
            <div className="h-1 w-44 bg-primary"></div>
            <h3 className="text-4xl font-bold">Gallery</h3>
          </div>
          <div className="z-[99999] block h-full max-md:px-2">
            <swiper-container
              space-between="0"
              slides-per-view="1"
              navigation
              autoplay-delay="1000"
              speed="500"
              autoplay-disable-on-interaction="false"
              loop="true"
              pagination
            >
              {Array.from(Array(6)).map((_, idx) => (
                <swiper-slide key={idx}>
                  <img
                    src={`/b${idx + 1}.jpg`}
                    className="max h-[70vh] w-full rounded-lg object-cover shadow-lg max-md:h-full"
                    // className="absolute left-1/2 top-1/2 block max-w-[80vw]  -translate-x-1/2 -translate-y-1/2"
                    alt="..."
                  />
                </swiper-slide>
              ))}
              {Array.from(Array(4)).map((_, idx) => (
                <swiper-slide key={idx}>
                  <img
                    src={`/i${idx + 1}.png`}
                    className="max h-[70vh] w-full rounded-lg object-cover shadow-lg max-md:h-full"
                    // className="absolute left-1/2 top-1/2 block max-w-[80vw]  -translate-x-1/2 -translate-y-1/2"
                    alt="..."
                  />
                </swiper-slide>
              ))}
            </swiper-container>
          </div>
          {/* <div className="h-full">
            <div
              id="default-carousel"
              className="relative w-full"
              data-carousel="slide"
            >
              <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                <div
                  className="hidden duration-700 ease-in-out"
                  data-carousel-item
                >
                  <img
                    src="/img.png"
                    className="absolute left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2"
                    alt="..."
                  />
                </div>
                <div
                  className="hidden duration-700 ease-in-out"
                  data-carousel-item
                >
                  <img
                    src="/img2.png"
                    className="absolute left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2"
                    alt="..."
                  />
                </div>
                <div
                  className="hidden duration-700 ease-in-out"
                  data-carousel-item
                >
                  <img
                    src="/img3.png"
                    className="absolute left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2"
                    alt="..."
                  />
                </div>
                <div
                  className="hidden duration-700 ease-in-out"
                  data-carousel-item
                >
                  <img
                    src="/img4.png"
                    className="absolute left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2"
                    alt="..."
                  />
                </div>
                <div
                  className="hidden duration-700 ease-in-out"
                  data-carousel-item
                >
                  <img
                    src="/img.png"
                    className="absolute left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2"
                    alt="..."
                  />
                </div>
              </div>
              <div className="absolute bottom-5 left-1/2 z-30 flex -translate-x-1/2 space-x-3">
                <button
                  type="button"
                  className="h-3 w-3 rounded-full"
                  aria-current="true"
                  aria-label="Slide 1"
                  data-carousel-slide-to="0"
                ></button>
                <button
                  type="button"
                  className="h-3 w-3 rounded-full"
                  aria-current="false"
                  aria-label="Slide 2"
                  data-carousel-slide-to="1"
                ></button>
                <button
                  type="button"
                  className="h-3 w-3 rounded-full"
                  aria-current="false"
                  aria-label="Slide 3"
                  data-carousel-slide-to="2"
                ></button>
                <button
                  type="button"
                  className="h-3 w-3 rounded-full"
                  aria-current="false"
                  aria-label="Slide 4"
                  data-carousel-slide-to="3"
                ></button>
                <button
                  type="button"
                  className="h-3 w-3 rounded-full"
                  aria-current="false"
                  aria-label="Slide 5"
                  data-carousel-slide-to="4"
                ></button>
              </div>
              <button
                type="button"
                className="group absolute left-0 top-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none"
                data-carousel-prev
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70">
                  <svg
                    className="h-4 w-4 text-white dark:text-gray-800"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 1 1 5l4 4"
                    ></path>
                  </svg>
                  <span className="sr-only">Previous</span>
                </span>
              </button>
              <button
                type="button"
                className="group absolute right-0 top-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none"
                data-carousel-next
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70">
                  <svg
                    className="h-4 w-4 text-white dark:text-gray-800"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 9 4-4-4-4"
                    ></path>
                  </svg>
                  <span className="sr-only">Next</span>
                </span>
              </button>
            </div>
          </div> */}
        </div>
      </section>

      <section
        id="tour"
        className="relative flex w-full justify-center bg-[#F5F5F5] py-32"
      >
        <div className="absolute -top-16 left-0 flex justify-end">
          <img
            src="/Pattern.svg"
            className="-translate-x-96 scale-x-100 opacity-50"
            alt=""
          />
        </div>
        <div className="z-[9999] flex w-3/5 items-center gap-12 max-lg:flex max-lg:flex-col max-md:w-4/5 max-sm:w-full max-sm:px-3">
          <div className="flex flex-col gap-3 max-sm:items-center">
            <div className="h-1 w-44 bg-primary"></div>
            <h3 className="text-4xl font-bold">Virtual Site Tour</h3>
          </div>
          <div>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/aKFGwKauZiA?si=5DgIpeEZZxx0rBqg"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              className="rounded-lg shadow-md max-md:h-full max-md:w-full"
            ></iframe>
          </div>
        </div>
      </section>
      <section
        id="location"
        className="relative z-[9999] flex items-center justify-center max-lg:py-16 "
      >
        <div className="flex w-full justify-center gap-6 max-lg:flex-col max-lg:items-center">
          <div className="flex w-1/2 flex-col gap-8 px-20 max-lg:w-2/3 max-md:w-full max-md:items-center max-md:px-3">
            <div className="flex flex-col gap-3 max-md:items-center ">
              <div className="h-1 w-44 bg-primary"></div>
              <h3 className="text-4xl font-bold">Location</h3>
            </div>
            <div>
              <p>
                This Lodha Comin Soon project Behind Manyata Tech Park is a new
                exclusive ultra-luxury residential apartment project at Nagavara
                in North Bengaluru
              </p>
            </div>
            <div>
              <ul className="flex flex-col gap-3">
                <li className="flex items-center gap-3">
                  <img src="/loc.svg" alt="" className="h-[2.2em]" />
                  <span>
                    Intersection of Outer Ring Road (ORR) and Thanisandra Main
                    Road.
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <img src="/train.svg" alt="" className="h-[2.2em]" />
                  <span>
                    Hebbal Railway Station on the South Western Zone serves the
                    locale.
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <img src="/building.svg" alt="" className="h-[2.2em]" />
                  <span>
                    Only 5 km from Manyata Tech Park - Nagwara, Bangalore.
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <img src="/road.svg" alt="" className="h-[2.2em]" />
                  <span>
                    Hebbal Flyover is a vital point for commuters bound to and
                    fro North Bangalore.
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <img src="/factory.svg" alt="" className="h-[2.2em]" />
                  <span>
                    Yeshwanthpur Industrial Area is about 11 km from Hebbal via
                    Bengaluru-Mumbai Highway.
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <button
                onClick={() => setContact(true)}
                className="rounded-md bg-primary p-2 text-center text-white"
              >
                Get Directions
              </button>
            </div>
          </div>
          <div className="max-md:translate-0 w-1/2 -translate-y-16 max-md:w-full max-md:px-2">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7773.598729156945!2d77.62051469680607!3d13.048439338200492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae176ddc662065%3A0x57b2874f9023bb8!2sEmbassy%20Manyata%20Business%20Park!5e0!3m2!1sen!2sin!4v1695336499086!5m2!1sen!2sin"
              width="600"
              height="450"
              loading="lazy"
              className="rounded-xl shadow-xl max-md:h-full max-md:w-full "
            ></iframe>
          </div>
        </div>
      </section>
      <section
        id="contact"
        className="z-[999] flex items-center justify-center bg-white"
      >
        <div className="flex w-2/5 flex-col items-center gap-6 max-md:w-4/5 max-sm:w-full max-sm:px-3">
          <div className="flex flex-col gap-3">
            <div className="h-1 w-44 bg-primary"></div>
            <h3 className="text-4xl font-bold">Contact us</h3>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Book Site Visit</h3>
          </div>
          <div>
            <p>We’d love to hear from you. Please fill out this form.</p>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              submitForm();
            }}
            className="z-[5555] flex w-full flex-col gap-4"
            action=""
          >
            <div className="flex flex-col gap-3">
              <label htmlFor="name">Name</label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="rounded-lg border-2 border-gray-300"
                placeholder="Your Name"
                type="text"
              />
            </div>
            <div className="flex flex-col gap-3">
              <label htmlFor="name">Email</label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="rounded-lg border-2 border-gray-300"
                placeholder="Your Email"
                type="text"
              />
            </div>
            <div className="flex flex-col gap-3">
              <label htmlFor="name">Phone No.</label>
              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="rounded-lg border-2 border-gray-300"
                placeholder="Your Phone No."
                type="text"
              />
            </div>
            <div>
              <button className="my-2 w-full rounded-md bg-primary py-2 text-white">
                Register Now
              </button>
            </div>
          </form>
        </div>
      </section>
      <footer className="mt-16 bg-primary p-4">
        <div className="flex items-center justify-between px-3 max-md:flex-col max-md:items-center">
          <div>
            <img className="w-[120px]" src="/logo.webp" alt="" />
            <div className="text-sm text-white">
              Near Manyata Tech Park,
              <br />
              Nagawara, Bengaluru.
            </div>
          </div>
          <div className="flex gap-6 max-md:flex-col max-md:items-center">
            <a className="p-2 text-sm text-white" href="">
              Home
            </a>
            <a className="p-2 text-sm text-white" href="">
              Price
            </a>
            <a className="p-2 text-sm text-white" href="">
              Site & Floor Plan
            </a>
            <a className="p-2 text-sm text-white" href="">
              Gallery
            </a>
            <a className="p-2 text-sm text-white" href="">
              Walkthrough
            </a>
            <a className="p-2 text-sm text-white" href="">
              Location
            </a>
            <a className="p-2 text-sm text-white" href="">
              Brouche
            </a>
            <a className="p-2 text-sm text-white" href="">
              Contact
            </a>
          </div>
        </div>
        <hr className="my-12" />
        <div className="flex w-full items-center justify-between gap-4 py-5 max-md:flex-col max-md:items-center">
          <div className="flex items-center gap-4 max-md:flex-col max-md:items-center max-md:justify-center">
            <div className="flex items-center gap-4">
              <img src="/call.svg" alt="" />
              <a className="text-sm text-white" href="tel:+919148434894">
                Enquire Now
              </a>
            </div>
            <div className="h-[50px] w-[1px] bg-white max-md:h-[1px] max-md:w-3/4"></div>
            <div className="flex items-center gap-4">
              <img src="/call.svg" alt="" />
              <a href="tel:+919148434894" className="text-sm text-white">
                +91 9148434894
              </a>
            </div>
            <div className="h-[50px] w-[1px] bg-white max-md:h-[1px] max-md:w-3/4"></div>

            <div className="flex items-center gap-4">
              <img src="/call.svg" alt="" />
              <a className="text-sm text-white" href="tel:+919148434894">
                Organize Site Visit
              </a>
            </div>
          </div>
          <div>
            <p className="text-white">© Copyright 2022, All Rights Reserved</p>
          </div>
        </div>
      </footer>
    </>
  );
}
