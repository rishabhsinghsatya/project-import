import React from "react";
import Plus from "../icons/plus.svg";
import Calender from "../icons/calender.svg";
import Search from "../icons/search.svg";

const Footer = () => {
  return (
    <div className="footercontainer">
      <div className="calender">
        <img src={Calender} alt="calender icon" />
      </div>
      <div className="plusbackgroundcontainer">
        <img src={Plus} alt="plus" />
      </div>
      <div className="search">
        <img src={Search} alt="search icon" />
      </div>
    </div>
  );
};
export default Footer;
