import React from "react";

const PrimaryButton = ({ children }) => {
  return (
    <button className="btn btn-primary text-white bg-gradient-to-r from-primary-500 to-secondary-500">
      {children}
    </button>
  );
};

export default PrimaryButton;
