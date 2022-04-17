import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { DeleteUserDto, UserDto, Users } from "../models/user-models";
import { deleteUserById, getAllUsers } from "../services/user-services";
import Navbar from "./Navbar";

const UserList = () => {
  let [users, setUsers] = useState(new Users());
  let [deleteDto, setDeleteDto] = useState(new DeleteUserDto());

  useEffect(() => {
    getAllUsers().then((res) => {
      setUsers(res.data);
      console.log(users);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [deleteDto]);

  const deleteUser = (id: any) => {
    deleteUserById(id).then((res) => {
      setDeleteDto(res.data);
    });
  };

  const userListBody = () => {
    let usersBody = users.users.map((user: UserDto) => {
      return (
        <tbody key={user.userId}>
          <tr>
            <td className="px-4">{user.firstName}</td>
            <td>{user.lastName}</td>
            <td>{user.emailId}</td>
            <td className="flex justify-end text-white">
              <Link href={"updateuser/" + user.userId} passHref>
                <div className="mr-8 py-2 px-7 rounded-xl my-3 hover:bg-purple-600 bg-purple-500">
                  Update
                </div>
              </Link>
              <div
                onClick={() => deleteUser(user.userId)}
                className="mr-8 py-2 px-7 rounded-xl my-3 hover:bg-red-600 bg-red-500"
              >
                Delete
              </div>
            </td>
          </tr>
        </tbody>
      );
    });
    return usersBody;
  };

  return (
    <>
      <Navbar buttonText="Add User" />
      <div className="container mx-auto my-8 ">
        <div className="flex shadown border-b">
          <table className="min-w-full">
            <thead className="bg-red-50 uppercase ">
              <tr>
                <th className="pl-5 text-left font-medium text-gray-500 uppercase tracking-wider py-3">
                  First Name
                </th>
                <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3">
                  Last Name
                </th>
                <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3">
                  Email ID
                </th>
                <th className="pr-20 text-right font-medium text-gray-500 uppercase tracking-wider py-3">
                  Actions
                </th>
              </tr>
            </thead>
            <>{users.users != undefined && userListBody()}</>
          </table>
        </div>
      </div>
    </>
  );
};

export default UserList;
