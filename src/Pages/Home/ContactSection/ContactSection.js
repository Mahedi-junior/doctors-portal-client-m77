import React from "react";
import appointment from "../../../assets/images/appointment.png";

const ContactSection = () => {
  return (
    <section
      style={{
        background: `url(${appointment})`,
      }}
      className="flex items-center justify-center my-12 py-12"
    >
      <div className="w-23">
        <div className="">
          <h4 className="text-xl text-center bold text-primary">Contact Us</h4>
          <h2 className="text-3xl text-white mb-5">Stay Connected with Us</h2>
        </div>
        <div className="">
          <input
            type="email"
            placeholder="email"
            className="input input-bordered w-full mt-3"
          />

          <br />
          <input
            type="text"
            placeholder="Subject"
            className="input input-bordered w-full mt-3"
          />
          <br />
          <textarea
            rows={3}
            cols={36}
            className="textarea mt-3 pr-20 textarea-bordered"
            placeholder="Your Message"
          ></textarea>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
