import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import AppointmentOptions from "./AppointmentOptions";

const AvailableAppointment = ({ selectedDate, setSelectedDate }) => {
  const [appointmentOptions, setAppointmentOptions] = useState([]);

  useEffect(() => {
    fetch("appointmentOptions.json")
      .then((res) => res.json())
      .then((data) => setAppointmentOptions(data));
  }, []);
  return (
    <div className="my-16">
      <p className="text-center font-bold text-secondary">
        Available Appointment on {format(selectedDate, "PP")}
      </p>
      <div className="grid mt-6 gap-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        {appointmentOptions.map((option) => (
          <AppointmentOptions
            key={option._id}
            appointmentOption={option}
          ></AppointmentOptions>
        ))}
      </div>
    </div>
  );
};

export default AvailableAppointment;
