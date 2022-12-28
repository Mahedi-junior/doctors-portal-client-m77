import React from "react";
import chair from "../../../assets/images/chair.png";
import bgchair from "../../../assets/images/bg.png";
import PrimaryButton from "../../../compontens/PrimaryButton/PrimaryButton";
const Banner = () => {
  return (
    <div
      style={{
        background: `url(${bgchair})`,
      }}
      className="hero "
    >
      <div className="hero-content flex-col lg:flex-row-reverse my-6">
        <img src={chair} className="rounded-lg lg:w-1/2 shadow-2xl" alt="" />
        <div>
          <h1 className="text-5xl font-bold">Box Office News!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <PrimaryButton>Getting Started</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Banner;
