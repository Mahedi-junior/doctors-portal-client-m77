import React from "react";
import treatment from "../../../assets/images/treatment.png";
const Exceptional = () => {
  return (
    <div className="card lg:mx-28 lg:card-side bg-base-100 shadow-xl mt-28">
      <div className="p-2 l:w-1/2">
        <figure className="">
          <img src={treatment} alt="Album" />
        </figure>
      </div>
      <div className="card-bod items-center lg:p-14 lg:w-2/3 mt-12">
        <h2 className="card-title text-5xl">
          Exceptional Dental Care, on Your Terms
        </h2>
        <p className="text-xl mt-5">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsumis that it has a more-or-less normal distribution of
          letters,as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page
        </p>
        <div className="card-actions mt-5">
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Exceptional;
