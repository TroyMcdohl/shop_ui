import Image from "next/image";
import React from "react";

const ReleaseCard = () => {
  return (
    <div className="relative sm:w-1/4 w-1/3 sm:h-[80%] h-[60%]  rounded-lg overflow-hidden">
      <Image
        src="https://source.unsplash.com/sliced-orange-fruit-with-straw-hINQgaTqg7Q"
        alt=""
        fill
      />
      <div className="absolute bottom-5 left-4">
        <h6 className="w-[40%] text-xl text-white">
          Cirtrus Mon 20,000 Pul Disposable 3 Percent
        </h6>
        <p className=" font-thin  text-white">30,000 MMK</p>
        <p></p>
      </div>
    </div>
  );
};

export default ReleaseCard;
