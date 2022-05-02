import React from "react";
import Offer from "./Offer";
import Calender from "./calender";
import Offericon from "../icons/offer.svg";

const Thirdpage = (props) => {
  return (
    <div className="third-page">
      <Calender noGap="true" selected="25" />
      <div className="thirdpagecontainer">
        <div className="headingcontainer">
          <h2 className="offerheadingdate">Today, March 25</h2>
        </div>
        <div className="messagecontainer">
          <img src={Offericon} />
          <Offer
            text="20% of on ICICI Debit Cards"
            color="orange"
            setPage={props.setPage}
          />
        </div>
      </div>
    </div>
  );
};

export default Thirdpage;
