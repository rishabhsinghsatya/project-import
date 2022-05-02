import React from "react";

const Offer = (props) => {
  return (
    <div className={props.color + " offer"} onClick={() => props.setPage(4)}>
      <p>{props.text}</p>
    </div>
  );
};
export default Offer;
