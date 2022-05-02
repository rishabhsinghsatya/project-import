import React from "react";
import Offer from "./Offer";
import Date from "./Date";

const First = () => {
  return (
    <div className="fullcontainer">
      <div className="daterange">
        <div className="mergecontainer">
          <div className="offerdatecontainer">
            <Date day="Sat" date="28" />
            <div className="offercontainer">
              <Offer text="Makar Sankranti Festive Offer" color="grey" />
            </div>
          </div>
        </div>
      </div>
      <div className="daterange">
        <div className="heading">
          <h3>25 - 28 March</h3>
        </div>
        <div className="mergecontainer">
          <div className="offerdatecontainer">
            <Date day="Wed" date="25" active="true" />
            <div className="offercontainer">
              <Offer text="20% of on ICICI Debit Cards" color="orange" />
            </div>
          </div>
          <div className="offerdatecontainer">
            <Date day="Sat" date="28" />
            <div className="offercontainer">
              <Offer text="Holi Festive Offer" color="blue" />
              <Offer text="20 % off on HDFC Net Banking" color="blue" />
              <Offer text="Sale at D-Mart Store" color="orange" />
            </div>
          </div>
        </div>
      </div>
      <div className="daterange">
        <div className="heading">
          <h3>25 - 30 April</h3>
        </div>
        <div className="mergecontainer">
          <div className="offerdatecontainer">
            <Date day="Sat" date="25" />
            <div className="offercontainer">
              <Offer text="Navratri Festive Offer" color="orange" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default First;
