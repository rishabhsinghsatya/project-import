import React from "react";
import Bell from "../icons/bell.svg";
import Barchart from "../icons/barchart.svg";
import Chevronleft from "../icons/chevronleft.svg";
import Chevronright from "../icons/chevronright.svg";

const Header = (props) => {
  return (
    <div className="headercontainer">
      <img
        src={Barchart}
        alt="Barchart icon"
        onClick={() => props.setPage(2)}
      />
      <div className="arrowmonthcontainer">
        <img src={Chevronleft} alt="Chevronleft icon" />
        <div className="monthyearcontainer">
          <p className="headermonth">{props.month}</p>
          <p className="headeryear">{props.year}</p>
        </div>
        <img src={Chevronright} alt="Chevronright icon" />
      </div>
      <img src={Bell} alt="bell icon" />
    </div>
  );
};
export default Header;
