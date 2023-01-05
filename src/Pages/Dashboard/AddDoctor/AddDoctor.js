import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useForm } from "react-hook-form";
import Loading from "../../Shared/Loading/Loading";

const AddDoctor = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const imageHostKey = process.env.REACT_APP_imgbb_Key;

  const { data: specialties, isLoading } = useQuery({
    queryKey: ["specialty"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/appointmentSpecialty");
      const data = await res.json();
      return data;
    },
  });

  const handleAddDoctor = (data) => {
    console.log(data);
  };

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div className="w-96">
      <h2 className="text-4xl">Add Doctors</h2>

      <form onSubmit={handleSubmit(handleAddDoctor)}>
        <div className="form-control ">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            {...register("name", { required: "Name is Required" })}
            className="input input-bordered "
          />
          {errors.name && (
            <p className="text-red-600">{errors.name?.message}</p>
          )}
        </div>

        <div className="form-control ">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            {...register("email", { required: true })}
            className="input input-bordered "
          />
          {errors.email && (
            <p className="text-red-600">{errors.email?.message}</p>
          )}
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Specialty</span>
          </label>

          <select
            {...register("specialty")}
            className="select select-bordered select-ghost"
          >
            {specialties.map((specialty, i) => (
              <option key={specialty._id} value={specialty.name}>
                {specialty.name}
              </option>
            ))}
          </select>
        </div>
        <div className="form-control ">
          <label className="label">
            <span className="label-text">Photo</span>
          </label>
          <input
            type="file"
            {...register("img", { required: "Photo is Required" })}
            className="input input-bordered "
          />
          {errors.img && <p className="text-red-600">{errors.img?.message}</p>}
        </div>

        {/* <p>{data}</p> */}
        <input
          className="btn btn-accent w-full mt-5"
          value="Add A Doctor"
          type="submit"
        />
        {/* {signUpError && <p className="text-red-600">{signUpError}</p>} */}
      </form>
    </div>
  );
};

export default AddDoctor;
