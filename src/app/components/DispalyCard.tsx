import Image from "next/image";
import React from "react";

const DispalyCard = (props: any) => {
  return (
    <div className=" w-[300px] h-[50%] sm:h-[80%] ">
      <div className="relative w-full h-[70%] rounded-lg overflow-hidden ">
        <Image
          fill
          alt=""
          src="https://source.unsplash.com/bleu-de-chanel-perfume-bottle-2b0JeJTEclQ"
        />
        {props?.discount && (
          <div className="left-0 right-0 mx-auto absolute w-1/2 text-center text-white bg-red-500">
            25% Off
          </div>
        )}
      </div>
      <div className="w-full h-[30%] flex flex-col justify-evenly items-center">
        <h6 className="text-xl">Refreshing Mint</h6>
        <h6 className="font-semibold">30,000 MMk</h6>
        <p className="text-sm line-through">30,000 MMK</p>

        <h6 className="text-yellow-300">* 600 Points</h6>
      </div>
    </div>
  );
};

export default DispalyCard;
