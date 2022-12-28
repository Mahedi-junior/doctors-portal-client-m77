import React from "react";
import fluoride from "../../../assets/images/fluoride.png";
import cavity from "../../../assets/images/cavity.png";
import whitening from "../../../assets/images/whitening.png";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const servicesData = [
    {
      id: 1,
      name: "Fluoride Treatment",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae iure ipsa eius nam vero et, libero sequi non! Mollitia, vel.",
      img: fluoride,
    },
    {
      id: 2,
      name: "cavity Treatment",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae iure ipsa eius nam vero et, libero sequi non! Mollitia, vel.",
      img: cavity,
    },
    {
      id: 3,
      name: "whitening Treatment",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae iure ipsa eius nam vero et, libero sequi non! Mollitia, vel.",
      img: whitening,
    },
  ];
  return (
    <div className="mt-16 ">
      <div className="text-center">
        <h3 className="text-xl font-bold text-primary uppercase">
          Our Services
        </h3>
        <h2 className="text-3xl ">Services We Provide</h2>
      </div>
      <div className="grid mt-12 mb-8 gap-8 md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3">
        {servicesData.map((service) => (
          <ServiceCard key={service.id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
