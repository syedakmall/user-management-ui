import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import { UserDto } from "../../models/user-models";

import {
  deleteUserById,
  getUserById,
  updateUser,
} from "../../services/user-services";

const UpdateUserPage = () => {
  let [user, setUser] = useState({});
  let [userDto, setUserDto] = useState(new UserDto());

  const router = useRouter();

  const handleChange = (e: any) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    setUserDto({ ...userDto, [e.target.name]: e.target.value });
    console.log(user);
  };

  useEffect(() => {
    if (!router.isReady) return;
    const id = router.query.id as string;
    getUserById(id).then((res) => {
      console.log(res.data);
      setUserDto(res.data);
    });
  }, [router]);

  const update = () => {
    const id = router.query.id as string;
    updateUser(user, id);
  };



  return (
    <>
      <Navbar buttonText="Manage User" />
      <div className="container mx-auto px-10 shadow-xl rounded-lg pb-2 bg-slate-200 flex-col">
        <div className="py-6 mt-10 font-semibold text-2xl text-gray-800">
          <p>Update User :</p>
        </div>
        <div className="flex-col flex pb-10 text-gray-600 font-medium">
          <label htmlFor="emailInp">Email Id</label>
          <input
            type="email"
            name="emailId"
            id="emailInp"
            value={userDto.emailId}
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
            value={userDto.firstName}
            className="text-black p-3 rounded-xl m-3"
            placeholder="First Name"
          />
          <label htmlFor="lnameInp">Last Name</label>
          <input
            type="text"
            name="lastName"
            id="lnameInp"
            value={userDto.lastName}
            onChange={(e) => handleChange(e)}
            className="text-black  p-3 rounded-xl m-3"
            placeholder="Last Name"
          />
        </div>
        <div className="mb-10 flex justify-end  pr-3">
          <div
            onClick={update}
            className="items-center h-12 flex font-bold px-6 text-white bg-purple-800 hover:bg-purple-900 rounded-lg"
          >
            Update
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateUserPage;
