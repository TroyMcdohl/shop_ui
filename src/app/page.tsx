"use client";
import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import {
  faArrowLeft,
  faArrowRight,
  faLocationDot,
  faPhone,
  faQrcode,
} from "@fortawesome/free-solid-svg-icons";
import {
  faCcAmazonPay,
  faCcPaypal,
  faFacebook,
  faInstagram,
  faTelegram,
  faTwitter,
  faViber,
} from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";
import DispalyCard from "./components/DispalyCard";
import ReleaseCard from "./components/ReleaseCard";

const page = () => {
  const [slide, setSlide] = useState(0);
  const [slideOne, setSlideOne] = useState(0);
  const [slideTwo, setSlideTwo] = useState(0);
  const [slideThree, setSlideThree] = useState(0);
  const [move, setMove] = useState(0);

  const [styleState, setStyleState] = useState(
    "gap-1  flex justify-center items-center translate-x-[0vw] transition-all duration-500 ease-linear w-[240vw] h-full"
  );

  const faLArrowLeftIcon = faArrowLeft as IconProp;
  const faLArrowRightIcon = faArrowRight as IconProp;
  const faFacebookIcon = faFacebook as IconProp;
  const faInstagramIcon = faInstagram as IconProp;
  const faViberIcon = faViber as IconProp;
  const faTelegramIcon = faTelegram as IconProp;
  const faTwitterIcon = faTwitter as IconProp;
  const faLocationIcon = faLocationDot as IconProp;
  const faPhoneIcon = faPhone as IconProp;
  const faQrIcon = faQrcode as IconProp;
  const faPaypalIcon = faCcPaypal as IconProp;
  const faAmazonIcon = faCcAmazonPay as IconProp;

  const moveHandler = (way: any) => {
    way === "left"
      ? setMove(move > 0 ? move - 1 : 2)
      : setMove(move > 1 ? 0 : move + 1);
  };

  const clickHandler = () => {
    setSlide((prev) => (prev == 2 ? (prev = 0) : prev + 1));
  };

  const slideClickHandler = () => {
    setSlideOne((prev) => (prev == 2 ? (prev = 0) : prev + 1));
  };

  console.log(slide);

  useEffect(() => {
    if (slide == 1) {
      setStyleState(
        "gap-1  flex justify-center items-center translate-x-[-80vw] transition-all duration-500 ease-linear w-[240vw] h-full"
      );
    } else if (slide == 2) {
      setStyleState(
        "gap-1  flex justify-center items-center translate-x-[-160vw] transition-all duration-500 ease-linear w-[240vw] h-full"
      );
    } else {
      setStyleState(
        "gap-1  flex justify-center items-center translate-x-[-0vw] transition-all duration-500 ease-linear w-[240vw] h-full"
      );
    }
  }, [slide]);

  const data = [
    {
      src: "https://source.unsplash.com/woman-holding-a-paper-bag-walking-on-street-Xn7GvimQrk8",
      title: "Anytime Anywhere One",
    },
    {
      src: "https://source.unsplash.com/brown-henry-paper-bag-jo8C9bt3uo8",
      title: "Anytime Anywhere Two",
    },
    {
      src: "https://source.unsplash.com/woman-holding-bag-beside-mural-painting-7qCeFo19r24",
      title: "Anytime Anywhere Three",
    },
  ];

  return (
    <>
      <Navbar />

      <div className="h-[70vh] ">
        <div className="z-10 bg-opacity-75 rounded-lg absolute top-1/4 mx-2 h-[100px] flex justify-center items-center w-8 bg-stone-500 ">
          <FontAwesomeIcon
            icon={faLArrowLeftIcon}
            className="w-[20px] h-[20px] text-white opacity-100  cursor-pointer"
            onClick={moveHandler.bind(this, "left")}
          />
        </div>
        {data.map((d, i) => (
          <>
            {move == i && (
              <div className="relative w-full h-full object-cover ">
                <Image fill className="object-cover" alt="" src={d.src} />
                <div className="absolute left-0 right-0 mx-auto bottom-10 flex justify-center items-center flex-col">
                  <h4 className="text-3xl text-white my-4 ">The Best Look</h4>
                  <h2 className="text-3xl sm:text-6xl font-bold text-white my-4 ">
                    {d.title}
                  </h2>
                  <h6 className="text-2xl text-white my-4 ">
                    Start from 10,000 MMK
                  </h6>
                  <button className=" my-4 py-2 px-4 bg-opacity-75 bg-slate-500 text-white rounded-full  ">
                    View
                  </button>
                </div>
              </div>
            )}
          </>
        ))}
        <div className="z-10 opacity-[0.5] rounded-lg absolute top-1/4 right-0 mx-2 h-[100px]  flex justify-center items-center w-8 bg-stone-500 ">
          <FontAwesomeIcon
            icon={faLArrowRightIcon}
            className="w-[20px] h-[20px] text-white opacity-100 cursor-pointer"
            onClick={moveHandler.bind(this, "right")}
          />
        </div>
      </div>
      <div className="h-[2vh] flex justify-center items-center">
        {data.map((d, i) => (
          <>
            <div
              className={
                move == i
                  ? " mx-1 w-[10px] h-[10px] rounded-full bg-green-500"
                  : " mx-1 w-[10px] h-[10px] rounded-full bg-black"
              }
            ></div>
          </>
        ))}
      </div>
      <div className="h-[200vh]  sm:h-[110vh]">
        <div className="flex justify-center items-center flex-col h-[10%] ">
          <h3 className="text-5xl font-bold ">Best Deals</h3>
          <h5 className="text-xl">Just For You</h5>
        </div>
        <div className="  w-[80%] sm:flex-nowrap flex-wrap items-center mx-auto flex justify-around gap-2 sm:overflow-hidden overflow-scroll h-[35%] ">
          <DispalyCard discount="true" />
          <DispalyCard discount="true" />
          <DispalyCard discount="true" />
          <DispalyCard discount="true" />
          <DispalyCard discount="true" />
          <DispalyCard discount="true" />
        </div>
        <div className="h-[5%] flex justify-center items-center">
          <button className="font-semibold px-20 py-2 rounded-full  bg-gray-300">
            View More {`>`}
          </button>
        </div>
        <div className="h-1/2 w-full">
          <div className="sm:w-[80%] w-[90%] h-full flex-col sm:flex-row flex mx-auto">
            <div className="sm:w-[60%] w-full flex justify-center items-center h-full ">
              <div className="relative rounded-lg overflow-hidden h-[90%] w-[95%] ">
                <Image
                  className="object-cover"
                  alt=""
                  fill
                  src="https://source.unsplash.com/a-blue-and-pink-letter-sitting-on-top-of-a-table-SldY9V1g3k4"
                />
                <div className="absolute left-4 bottom-10 text-white">
                  <h6 className="py-2 text-4xl">Membership Program</h6>
                  <p className="py-2 text-xl w-[60%]">
                    Be a Vape Pi member and getrr our special exclusive offer
                  </p>
                  <button className="px-4 py-2 text-white opacity-50 bg-black rounded-full">
                    View
                  </button>
                </div>
              </div>
            </div>
            <div className="sm:w-[40%] w-full h-full flex ">
              <div className="w-[45%] h-full flex justify-center items-center ">
                <div className="h-[90%] w-full rounded-lg overflow-hidden  ">
                  <div className="h-[70%] relative">
                    <Image
                      alt=""
                      fill
                      src="https://source.unsplash.com/light-bulb-illustration-_kdTyfnUFAc"
                    />
                  </div>
                  <div className="h-[30%] w-full flex justify-around items-center bg-black">
                    <div className="sm:p-0 p-2 text-white">
                      <h4 className="m-0 p-0 sm:text-xl text-lg">Devices</h4>
                      <p className="w-1/2 sm:text-lg text-sm">
                        Find the best for you here!
                      </p>
                    </div>
                    <div className="text-white sm:p-0 p-2">{">"}</div>
                  </div>
                </div>
              </div>
              <div className="w-[55%] gap-2 flex justify-center items-center flex-col h-full ">
                <div className="h-[44%] w-[90%] rounded-lg overflow-hidden  ">
                  <div className="h-[50%] relative">
                    <Image
                      className="object-cover"
                      alt=""
                      fill
                      src="https://source.unsplash.com/light-bulb-illustration-_kdTyfnUFAc"
                    />
                  </div>
                  <div className="h-[50%] w-full flex justify-around items-center bg-black">
                    <div className="text-white sm:p-0 p-2">
                      <h4 className="m-0 p-0 sm:text-xl text-lg">Pods</h4>
                      <p className="w-[80%] sm:text-xl text-sm">
                        Verity of choices avaliable
                      </p>
                    </div>
                    <div className="text-white sm:p-0 p-2">{">"}</div>
                  </div>
                </div>

                <div className="h-[44%] w-[90%] rounded-lg overflow-hidden  ">
                  <div className="h-[50%] relative">
                    <Image
                      className="object-cover"
                      alt=""
                      fill
                      src="https://source.unsplash.com/light-bulb-illustration-_kdTyfnUFAc"
                    />
                  </div>
                  <div className="h-[50%] w-full flex justify-around items-center bg-black">
                    <div className="text-white sm:p-0 p-2">
                      <h4 className="m-0 p-0 sm:text-xl text-lg">Disposable</h4>
                      <p className="w-[80%] sm:text-lg text-sm">
                        Easy,clean & superb flavour
                      </p>
                    </div>
                    <div className="text-white sm:p-0 p-2">{">"}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="h-[200vh]  sm:h-[250vh]   w-full ">
        <div className=" h-[40%] w-full ">
          <div className="h-[15%]  flex justify-center items-center flex-col">
            <h3 className="text-5xl text-center font-bold p-2">
              <span className="text-red-500">New</span> Released
            </h3>
            <h5 className="text-2xl font-medium mb-6">
              Try our latest favour here
            </h5>
          </div>
          <div className="gap-2 h-[40%]  flex sm:flex-nowrap flex-wrap sm:overflow-hidden overflow-scroll justify-center items-center sm:w-[80%] w-full sm:mx-auto">
            <ReleaseCard />
            <ReleaseCard />
            <ReleaseCard />
            <ReleaseCard />
          </div>
          <div className="h-[5%]  my-6 flex justify-center items-center">
            <button className="font-semibold px-20 py-4 rounded-full  bg-gray-300">
              View More {`>`}
            </button>
          </div>
          <div className="relative h-[40%] w-full my-6 flex justify-end ">
            <div className="  w-[90%]   overflow-hidden ">
              <div className="z-10 opacity-[0.5] rounded-lg absolute top-[40%] right-0 mx-2 h-[100px]  flex justify-center items-center w-8 bg-stone-500 ">
                <FontAwesomeIcon
                  icon={faLArrowRightIcon}
                  className="w-[20px] h-[20px] text-white opacity-100 cursor-pointer"
                  onClick={clickHandler}
                />
              </div>
              <div className={styleState}>
                <div className="relative w-[100%] h-[90%] rounded-lg overflow-hidden">
                  <Image
                    alt=""
                    fill
                    className="object-cover"
                    src="https://source.unsplash.com/clear-drinking-glass-with-brown-liquid-9PyQwwmZxpI"
                  />
                  <div className="absolute w-1/2 flex justify-center items-center flex-col h-full right-0">
                    <h4 className="text-4xl font-bold ">Try New Flavour</h4>
                    <h6 className="text-2xl text-center my-2">
                      Citrus Monster
                    </h6>
                    <button className=" my-4 py-3 px-6 bg-opacity-75 bg-slate-500 text-white rounded-full  ">
                      View
                    </button>
                  </div>
                </div>
                <div className="relative w-[100%] h-[90%] rounded-lg overflow-hidden">
                  <Image
                    alt=""
                    fill
                    className="object-cover"
                    src="https://source.unsplash.com/clear-drinking-glass-with-brown-liquid-9PyQwwmZxpI"
                  />
                  <div className="absolute w-1/2 flex justify-center items-center flex-col h-full right-0">
                    <h4 className="text-4xl font-bold ">Try New Flavour</h4>
                    <h6 className="text-2xl text-center my-2">
                      Lime Combination
                    </h6>
                    <button className=" my-4 py-3 px-6 bg-opacity-75 bg-slate-500 text-white rounded-full  ">
                      View
                    </button>
                  </div>
                </div>
                <div className="relative w-[100%] h-[90%] rounded-lg overflow-hidden">
                  <Image
                    alt=""
                    fill
                    className="object-cover"
                    src="https://source.unsplash.com/clear-drinking-glass-with-brown-liquid-9PyQwwmZxpI"
                  />
                  <div className="absolute w-1/2 flex justify-center items-center flex-col h-full right-0">
                    <h4 className="text-4xl font-bold ">Try New Flavour</h4>
                    <h6 className="text-2xl text-center my-2">
                      Strawberry Flavour
                    </h6>
                    <button className=" my-4 py-3 px-6 bg-opacity-75 bg-slate-500 text-white rounded-full  ">
                      View
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* items_slider */}
        <div className=" h-[60%] w-full sm:p-4 p-6   text-white ">
          <div className="my-8 bg-slate-700 relative rounded-lg h-[30%] w-full sm:w-[80%] overflow-hidden  mx-auto">
            <div className="z-10 opacity-[0.5] rounded-lg absolute top-[40%] right-0 mx-2 h-[100px]  flex justify-center items-center w-8 bg-stone-500 ">
              <FontAwesomeIcon
                icon={faLArrowRightIcon}
                className="w-[20px] h-[20px] text-white opacity-100 cursor-pointer"
                onClick={slideClickHandler}
              />
            </div>
            <div className=" flex w-[260vw] sm:w-[180vw] h-full">
              <div className="relative w-[60vw] sm:w-[20vw] h-full me-2 ">
                <Image
                  alt=""
                  src="https://source.unsplash.com/a-large-iceberg-floating-on-top-of-a-body-of-water-dcPsuxrAy7E"
                  fill
                  className="object-"
                />
              </div>
              <div
                className={` flex gap-6 sm:gap-2   items-center transition-all duration-500 ease-linear translate-x-[-${
                  slideOne * 80
                }vw] w-[200vw] sm:w-[120vw] h-full `}
              >
                <DispalyCard /> <DispalyCard /> <DispalyCard /> <DispalyCard />
                <DispalyCard /> <DispalyCard />
              </div>
            </div>
          </div>
          <div className="my-8 bg-slate-700 relative rounded-lg h-[30%] w-full sm:w-[80%] overflow-hidden  mx-auto">
            <div className="z-10 opacity-[0.5] rounded-lg absolute top-[40%] right-0 mx-2 h-[100px]  flex justify-center items-center w-8 bg-stone-500 ">
              <FontAwesomeIcon
                icon={faLArrowRightIcon}
                className="w-[20px] h-[20px] text-white opacity-100 cursor-pointer"
                onClick={() =>
                  setSlideTwo((prev) => (prev == 2 ? (prev = 0) : prev + 1))
                }
              />
            </div>
            <div className=" flex w-[260vw] sm:w-[180vw] h-full">
              <div className="relative w-[60vw] sm:w-[20vw] h-full me-2 ">
                <Image
                  alt=""
                  src="https://source.unsplash.com/a-large-iceberg-floating-on-top-of-a-body-of-water-dcPsuxrAy7E"
                  fill
                  className="object-"
                />
              </div>
              <div
                className={` flex gap-6 sm:gap-2   items-center transition-all duration-500 ease-linear translate-x-[-${
                  slideTwo * 80
                }vw] w-[200vw] sm:w-[120vw] h-full `}
              >
                <DispalyCard /> <DispalyCard /> <DispalyCard /> <DispalyCard />
                <DispalyCard /> <DispalyCard />
              </div>
            </div>
          </div>
          <div className="my-8 bg-slate-700 relative rounded-lg h-[30%] w-full sm:w-[80%] overflow-hidden  mx-auto">
            <div className="z-10 opacity-[0.5] rounded-lg absolute top-[40%] right-0 mx-2 h-[100px]  flex justify-center items-center w-8 bg-stone-500 ">
              <FontAwesomeIcon
                icon={faLArrowRightIcon}
                className="w-[20px] h-[20px] text-white opacity-100 cursor-pointer"
                onClick={() =>
                  setSlideThree((prev) => (prev == 2 ? (prev = 0) : prev + 1))
                }
              />
            </div>
            <div className=" flex w-[260vw] sm:w-[180vw] h-full">
              <div className="relative w-[60vw] sm:w-[20vw] h-full me-2 ">
                <Image
                  alt=""
                  src="https://source.unsplash.com/a-large-iceberg-floating-on-top-of-a-body-of-water-dcPsuxrAy7E"
                  fill
                  className="object-"
                />
              </div>
              <div
                className={` flex gap-6 sm:gap-2   items-center transition-all duration-500 ease-linear translate-x-[-${
                  slideThree * 80
                }vw] w-[200vw] sm:w-[120vw] h-full `}
              >
                <DispalyCard /> <DispalyCard /> <DispalyCard /> <DispalyCard />
                <DispalyCard /> <DispalyCard />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto  h-full sm:h-[25vh] w-full sm:w-[70%]   flex sm:flex-row flex-col sm:items-stretch  items-center justify-between ">
        <div className="sm:p-0 pb-4 flex sm:flex-col  sm:items-stretch items-center  sm:w-[25%] w-[95%] flex-row justify-between">
          <div className="">
            <h5 className="text-xl py-2">Customer Service</h5>
            <h6 className="py-2">Terms & Privacy Policy</h6>
            <h6>Return Policy</h6>
          </div>
          <div className="">
            <h6 className="text-xl">Payment</h6>
            <div className="flex ">
              <div className="">
                <FontAwesomeIcon icon={faPaypalIcon} className="text-4xl" />
              </div>
              <div className="mx-1">
                <FontAwesomeIcon icon={faCcAmazonPay} className="text-4xl" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex sm:p-0  pb-6 sm:flex-col flex-row  sm:w-[25%] w-[95%] justify-between">
          <div className="flex flex-col">
            <h5 className="text-xl py-2">Language</h5>
            <div className="flex">
              <input
                name="language"
                type="radio"
                id="zawgyi"
                value="Myanmar(Zawgyi)"
              />
              <label htmlFor="zawgyi" className="mx-2 ">
                Myanmar(Zawgyi)
              </label>
            </div>
            <div className="flex my-2">
              <input
                name="language"
                type="radio"
                id="unicode"
                value="Myanmar(Unicode)"
              />
              <label htmlFor="unicode" className="mx-2 ">
                Myanmar(Unicode)
              </label>
            </div>
            <div className="flex">
              <input name="language" type="radio" id="eng" value="English" />
              <label htmlFor="eng" className="mx-2 ">
                English
              </label>
            </div>
          </div>
          <div className="">
            <h6 className="text-xl py-3">Follow Us On</h6>
            <div className="flex items-center">
              <div className="me-2 text-xl sm:text-4xl">
                <FontAwesomeIcon icon={faFacebookIcon} />
              </div>
              <div className="mx-2 text-xl sm:text-4xl">
                <FontAwesomeIcon icon={faInstagramIcon} />
              </div>
              <div className="mx-2 text-xl sm:text-4xl">
                <FontAwesomeIcon icon={faViberIcon} />
              </div>
              <div className="mx-2 text-xl sm:text-4xl">
                <FontAwesomeIcon icon={faTelegramIcon} />
              </div>
              <div className="mx-2 text-xl sm:text-4xl">
                <FontAwesomeIcon icon={faTwitterIcon} />
              </div>
            </div>
          </div>
        </div>
        <div className="w-[95%] sm:p-0 pb-6  sm:w-[15%]">
          <h5 className="text-xl py-2">Contact Us</h5>
          <div className="">
            <div className="flex">
              <FontAwesomeIcon icon={faLocationIcon} className=" py-2" />
              <p className="p-0 mx-2 w-full">
                Lay Daunt Kan Main Road, Cashmere Stop,near Zawana, Thingangyun
                Tsp, Yangon.
              </p>
            </div>
            <div className="flex my-2  items-center">
              <FontAwesomeIcon icon={faPhoneIcon} />
              <p className="p-0 mx-2 w-1/2">097954343456</p>
            </div>
          </div>
        </div>
        <div className="sm:w-[25%] sm:p-0  ">
          <h5 className="text-xl py-2 sm:text-center">Download Our App</h5>
          <div className="h-1/2">
            <FontAwesomeIcon icon={faQrIcon} className="w-full h-full" />
          </div>
        </div>
      </div>
      <div className="h-[5vh] w-full flex justify-center items-center">
        copyright
      </div>
    </>
  );
};

export default page;
