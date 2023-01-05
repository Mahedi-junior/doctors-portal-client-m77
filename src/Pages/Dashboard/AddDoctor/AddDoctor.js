import React from "react";
import { useForm } from "react-hook-form";

const AddDoctor = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleAddDoctor = (data) => {
    console.log(data);
  };

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

          <select className="select select-bordered select-ghost">
            <option disabled selected>
              Pick a Specialty
            </option>
            <option>Han Solo</option>
            <option>Greedo</option>
          </select>

          {errors.password && (
            <p className="text-red-500">{errors.password.message}</p>
          )}
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
