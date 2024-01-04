import React from "react";
import { Menu , Disclosure} from "@headlessui/react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import  {faBars}  from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
  const userRole = "user";

  const clsx = (...classes) => {
    return classes.filter(Boolean).join(" ");
  };

  const cartItems = [{ name: "Shirt" }, { name: "Pants" }, { name: "Jeans" }];

  const menuitems = [
    {
      name: "Men",
      link: "/men",
      current: true, // Whether this link represents the current page
      admin: false, // Accessible to users with the 'admin' role
      user: true, // Accessible to users with the 'user' role
    },
    {
      name: "Women",
      link: "/women",
      current: false, // Whether this link represents the current page
      admin: false, // Accessible to users with the 'admin' role
      user: true, // Accessible to users with the 'user' role
    },
    {
      name: "Electronics",
      link: "/electronics",
      current: false, // Whether this link represents the current page
      admin: false, // Accessible to users with the 'admin' role
      user: true, // Accessible to users with the 'user' role
    },
    {
      name: "Order",
      link: "/order",
      current: false, // Whether this link represents the current page
      admin: true, // Accessible to users with the 'admin' role
      user: false, // Accessible to users with the 'user' role
    },
  ];
  return (
    <div className="min-h-full">
      <Disclosure as="nav" className="">
        {({ open }) => (<>
            <div className="flex items-center justify-between px-3 md:px-6">
        <Link to="/">
          <div className=" flex items-center flex-shrink-0">
            <img
              src="/logo192.png"
              className="w-10 h-10 rounded-full"
              alt="Logo"
            />
            <h2 className="ml-3">CartShop</h2>
          </div>
        </Link>

        <div className="hidden md:block">
          <div className="flex ml-10 space-x-5 ">
            {menuitems.map((item, idx) => {
              return (
                <>
                  {item[userRole] ? (
                    <>
                      <Link
                        to={item.link}
                        key={idx}
                        className={clsx(
                          item.current
                            ? "bg-gray-900 text-white"
                            : "text-gray-400 hover:bg-gray-600 hover:text-white",
                          "rounded-md px-3 py-2 text-sm font-medium"
                        )}
                      >
                        {item.name}
                      </Link>
                    </>
                  ) : null}
                </>
              );
            })}
          </div>
        </div>

        <div className="hidden md:block">
          <div className=" flex gap-8 ">
            <Link to="/cart">
              <div className="flex items-center">
                <img src="/cart.png" alt="" className="h-7 w-7" />

                <p className="rounded-full p-1 bg-violet-300">
                  {cartItems.length}
                </p>
              </div>
            </Link>

            <Menu>
              <Menu.Button className="relative flex max-w-xs items-center rounded-full  text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                <img src="/user-profile-icon.png" className="h-8 w-8 " alt="" />
              </Menu.Button>
              <Menu.Items className="absolute right-0 z-10 mt-2 -mb-[180px] w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                {menuitems.map((item) => {
                  return (
                    <>
                      <Menu.Item key={item.name}>
                        {({ active }) => (
                          <Link
                            to={item.link}
                            className={clsx(
                              active ? "bg-gray-300" : "",
                              "block  px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            {item.name}
                          </Link>
                        )}
                      </Menu.Item>
                    </>
                  );
                })}
              </Menu.Items>
            </Menu>
            
            <div className="-mr-2 flex md:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-0.5" />
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                       
                        <img src="/xmark-solid.svg" className="block h-6 w-6" alt="" />
                      ) : (
                        <img src="/bar-solid.svg" className="block h-6 w-6" alt="" />
                      )}
                    </Disclosure.Button>
                  </div>

          </div>
        </div>

        
      </div>
        
        </>)}
      
      </Disclosure>
    </div>
  );
}
