import React from "react";
import Percent from "../icons/percent.svg";

const Datecell = (props) => {
  return (
    <div
      className={props.variant ? props.variant + " datecell" : "datecell"}
      onClick={() => props.setPage(3)}
    >
      {props.variant == "percent" ? (
        <img src={Percent} />
      ) : (
        <p className="datecelltext">{props.text}</p>
      )}
    </div>
  );
};
export default Datecell;
