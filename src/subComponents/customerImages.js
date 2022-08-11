import React from "react";

function CustomerImages(props) {
  return (
    <div>
      <img className={props.imageName} src={props.customerImg} alt="customerImages" />
    </div>
  );
}

export default CustomerImages;
