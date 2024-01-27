import React from "react";
import { useDispatch } from "react-redux";
import authService from "../../appwrite/auth";
import { logout } from "../../store/authSlice";
import { NavLink } from "react-router-dom";

function LogoutBtn() {
  const dispatch = useDispatch();
  const logoutHandler = () => {
    authService.logout().then(() => {
      dispatch(logout());
    });
  };
  return (
    <NavLink
      onClick={logoutHandler}
      className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium     sm:px-6 sm:my-4 sm:duration-200 sm:hover:bg-[#e9c770] sm:text-[#b75660] sm:rounded-full sm:font-semibold sm:text-lg sm:bg-transparent"
    >
      Logout
    </NavLink>
  );
}

export default LogoutBtn;
