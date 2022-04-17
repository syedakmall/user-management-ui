import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { CreateUserDto } from "../models/user-models";
import { saveUser } from "../services/user-services";

const AddUserPage = () => {
  const [user, setUser] = useState(new CreateUserDto());
  const handleChange = (event: any) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const submit = () => {
    saveUser(user).then((res) => console.log(res.json));
  };

  return (
    <>
      <Navbar buttonText="Manage User" />
      <div className="container mx-auto px-10 shadow-xl rounded-lg pb-2 bg-slate-200 flex-col">
        <div className="py-6 mt-10 font-semibold text-2xl text-gray-800">
          <p>Enter Credentials :</p>
        </div>
        <div className="flex-col flex pb-10 text-gray-600 font-medium">
          <label htmlFor="emailInp">Email Id</label>
          <input
            type="email"
            name="emailId"
            id="emailInp"
            onChange={(e) => handleChange(e)}
            className="text-black p-3 rounded-xl m-3"
            placeholder="Email"
          />
          <label htmlFor="fnameInp">First Name</label>
          <input
            type="text"
            name="firstName"
            onChange={(e) => handleChange(e)}
            id="fnameInp"
            className="text-black p-3 rounded-xl m-3"
            placeholder="First Name"
          />
          <label htmlFor="lnameInp">Last Name</label>
          <input
            type="text"
            name="lastName"
            id="lnameInp"
            onChange={(e) => handleChange(e)}
            className="text-black  p-3 rounded-xl m-3"
            placeholder="Last Name"
          />
        </div>
        <div className="mb-10 flex justify-end  pr-3">
          <div
            onClick={submit}
            className="items-center h-12 flex font-bold px-6 text-white bg-teal-800 hover:bg-teal-900 rounded-lg"
          >
            Submit
          </div>
        </div>
      </div>
    </>
  );
};

export default AddUserPage;
