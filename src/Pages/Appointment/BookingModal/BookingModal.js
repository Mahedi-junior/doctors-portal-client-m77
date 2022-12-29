import { format } from "date-fns";
import React from "react";

const BookingModal = ({ treatment, selectedDate, setTreatment }) => {
  // treatment is just another name of  appointmentOptions with name,slots, _id
  const { name, slots } = treatment;
  const date = format(selectedDate, "PP");

  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const slot = form.slot.value;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    // [3, 5, 2].map((value, i) => console.log(value));

    const booking = {
      appointmentDate: date,
      treatment: name,
      patient: name,
      slot,
      email,
      phone,
    };
    console.log(booking);
    setTreatment(null);

    // TODO: Send data to the server
    //  and once data is saved then close the modal
    // and display success toast
  };

  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{name}</h3>

          <form
            onSubmit={handleBooking}
            className="grid grid-cols-1 gap-3 mt-6"
          >
            <input type="text" value={date} className="input w-full" disabled />

            <select name="slot" className="select select-bordered w-full ">
              {/* <option disabled selected>
                Select Your Time
              </option> */}
              {slots.map((slot, i) => (
                <option key={i} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
            <input
              name="name"
              type="text"
              placeholder="Your Name"
              className="input input-bordered w-full"
            />

            <input
              name="email"
              type="email"
              placeholder="Your Email"
              className="input input-bordered w-full"
            />

            <input
              name="phone"
              type="number"
              placeholder="Phone Number"
              className="input input-bordered w-full"
            />

            <br />
            <input
              className="btn btn-accent input "
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
