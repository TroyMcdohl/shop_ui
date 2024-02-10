import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import {
  faSearch,
  faCartShopping,
  faList,
  faT,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const faSearchIcon = faSearch as IconProp;

  const faCartIcon = faCartShopping as IconProp;
  const faListIcon = faList as IconProp;

  return (
    <div className=" z-10 absolute top-0 left-0 right-0 h-[60px] w-[80%] mx-auto flex justify-between items-center text-white">
      <div className="flex justify-center items-center text-xl">
        PI
        <span className="pe-2 px-1 flex justify-center items-center mx-1 bg-gray-500">
          R%
        </span>
      </div>
      <div className="flex justify-around items-center w-[150px] h-full  ">
        <div className="">
          <FontAwesomeIcon icon={faSearchIcon} className="w-[20px] h-[20px] " />
        </div>
        <div className="">
          <FontAwesomeIcon icon={faCartIcon} className="w-[20px] h-[20px] " />
        </div>
        <div className="">
          <FontAwesomeIcon icon={faListIcon} className="w-[20px] h-[20px] " />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
