import React from "react";
import Datecell from "./datecell";

const Calender = (props) => {
  return (
    <div
      className={props.noGap ? "nogap calendercontainer" : "calendercontainer"}
    >
      <div
        className={
          props.noGap ? "nogap calenderdaycontainer" : "calenderdaycontainer"
        }
      >
        <div className="dayrow">
          <Datecell text="M" variant="inactive" />
          <Datecell text="T" variant="inactive" />
          <Datecell text="W" variant="inactive" />
          <Datecell text="T" variant="inactive" />
          <Datecell text="F" variant="inactive" />
          <Datecell text="S" variant="inactive" />
          <Datecell text="S" variant="inactive" />
          <Datecell />
        </div>
      </div>

      <div
        className={
          props.noGap ? "nogap calenderdatecontainer" : "calenderdatecontainer"
        }
      >
        <div className="daterow">
          <Datecell text="24" variant="greyactive" />
          <Datecell text="25" variant="greyactive" />
          <Datecell text="26" variant="greyactive" />
          <Datecell text="27" variant="greyactive" />
          <Datecell text="28" variant="greyactive" />
          <Datecell text="29" variant="greyactive" />
          <Datecell text="1" />
        </div>
        <div className="daterow">
          <Datecell text="2" />
          <Datecell text="3" />
          <Datecell text="4" />
          <Datecell text="5" />
          <Datecell text="6" />
          <Datecell text="7" />
          <Datecell text="8" />
        </div>
        <div className="daterow">
          <Datecell text="9" />
          <Datecell text="10" />
          <Datecell
            text="11"
            variant={props.selected == "11" ? "highlight" : null}
          />
          <Datecell text="12" />
          <Datecell text="13" />
          <Datecell text="14" />
          <Datecell text="15" />
        </div>
        <div className="daterow">
          <Datecell text="16" />
          <Datecell text="17" />
          <Datecell text="18" />
          <Datecell text="19" />
          <Datecell text="20" />
          <Datecell text="21" />
          <Datecell text="22" />
        </div>
        <div className="daterow">
          <Datecell text="23" />
          <Datecell text="24" />
          <Datecell
            text="25"
            setPage={props.setPage}
            variant={
              props.percent == "25"
                ? "percent"
                : props.selected == "25"
                ? "highlight"
                : null
            }
          />
          <Datecell text="26" />
          <Datecell text="27" />
          <Datecell text="28" />
          <Datecell text="29" />
        </div>
        <div className="daterow">
          <Datecell text="30" />
          <Datecell text="31" />
          <Datecell text="1" variant="greyactive" />
          <Datecell text="2" variant="greyactive" />
          <Datecell text="3" variant="greyactive" />
          <Datecell text="4" variant="greyactive" />
          <Datecell text="5" variant="greyactive" />
        </div>
      </div>
    </div>
  );
};
export default Calender;
