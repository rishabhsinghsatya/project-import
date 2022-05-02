import React from "react";
import { useState } from "react";
import Offer from "./Offer";
import Offericon from "../icons/offer.svg";
import Mapicon from "../icons/map.svg";
import Upicon from "../icons/up.svg";

const Megaoffer = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const getData = () => {
    fetch("https://reqres.in/api/users/3")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((data) => {
        setData(data);
        console.log(data);
      })
      .catch((error) => {
        setError(error);
      });
  };
  return (
    <>
      <div className="headingcontainer">
        <h2 className="offerheadingdate">Today, March 25</h2>
        <div className="icon-card-container">
          <img src={Offericon} />
          <div className="top-to-bottom">
            <div className="upper-container">
              <div className="toptoinvite-container">
                <div className="offer-amazon">
                  <div className="messagecontainer">
                    <h className="offertext">20% of on ICICI Debit Cards</h>
                    <img src={Upicon} />
                  </div>
                  <div className="company-desc-invite-container">
                    <div className="companylocation">
                      <img src={Mapicon} />
                      <p className="companyname">Amazon</p>
                    </div>
                  </div>
                  <div className="description-invite-container">
                    <div className="descriptioncontainer">
                      <h6>Description</h6>
                      <p className="description">
                        This Offer applies only on ICICI Debit Cards payment
                        made on Amazon
                      </p>
                    </div>
                    <div className="invitecontainer" onClick={getData}>
                      <span className="invitetext">
                        {data ? "Invited" : "Invite"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="invite-or-editcontainer">
              <div className="edit-reminder-container">
                <div className="edit">
                  <h className="editcontainer">Edit</h>
                </div>
                <div className="remind">
                  <h className="remindercontainer">Reminder On</h>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {data ? (
        <div className="popup">
          <p className="message">Invite sent to {data.data.email}</p>
          <div className="avatar">
            <img src={data.data.avatar} alt="" className="dp" />
          </div>
        </div>
      ) : null}

      {error ? (
        <div className="popup">
          <p className="message">Could not send Invite!</p>
        </div>
      ) : null}
    </>
  );
};
export default Megaoffer;
