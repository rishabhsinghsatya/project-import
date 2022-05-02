import React from "react";

const Date = (props) => {
  return (
    <div className="datecontainer">
      <p className="day">{props.day}</p>
      <p className={props.active ? " active date" : "date"}>{props.date}</p>
    </div>
  );
};
export default Date;
