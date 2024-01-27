import React from "react";
import { Disclosure } from "@headlessui/react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Container, Logo, LogoutBtn } from "../index";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();
  const navItems = [
    { name: "Home", slug: "/", active: true },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
  ];
  return (
    <Disclosure as="nav" className="bg-white shadow">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 h-12 sm:h-24">
            <div className="relative flex h-full items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <AiOutlineClose
                      className="block h-6 w-6"
                      aria-hidden="true"
                    />
                  ) : (
                    <AiOutlineMenu
                      className="block h-6 w-6"
                      aria-hidden="true"
                    />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <Link to="/">
                    <Logo />
                  </Link>
                </div>
                <div className="hidden sm:block ml-auto">
                  <div className="flex space-x-2">
                    {navItems.map((item) =>
                      item.active ? (
                        <li key={item.name} className="list-none">
                          <NavLink
                            to={item.slug}
                            className={({ isActive }) =>
                              `block py-2 px-6 my-4 duration-200 hover:bg-[#e9c770] text-[#b75660] rounded-full font-semibold text-lg ${
                                isActive ? "bg-[#e9c770]" : "bg-transparent"
                              }`
                            }
                          >
                            {item.name}
                          </NavLink>
                        </li>
                      ) : null
                    )}
                    {authStatus && (
                      <li className="list-none">
                        <LogoutBtn />
                      </li>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navItems.map((item) =>
                item.active ? (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.slug}
                    className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium"
                  >
                    {item.name}
                  </Disclosure.Button>
                ) : null
              )}
              {authStatus && (
                <Disclosure.Button className="w-full text-left">
                  <LogoutBtn />
                </Disclosure.Button>
              )}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

export default Header;
