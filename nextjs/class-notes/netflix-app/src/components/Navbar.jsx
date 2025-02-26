"use client"

import React, { useEffect, useState } from "react";
import { Fragment } from "react";
import {
    Disclosure,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    Transition,
} from "@headlessui/react";
const Navbar = () => {
    return (
        <>
            <Disclosure as="nav" className="text-white fixed top-0 z-20 w-full">
                <div
                    className={`px-4 md:px-16 py-6 transition duration-500 `}
                >
                    <div className="relative flex items-center justify-between">


                        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

                            <h5 className="mr-2 capitalize">ipek</h5>


                            {/* Profile dropdown */}
                            <Menu as="div" className="relative">
                                <div>
                                    <MenuButton className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                        <span className="sr-only">Open user menu</span>
                                        <img
                                            className="h-8 w-8 rounded-full"
                                            src=""
                                            alt="user"
                                            loading="lazy"
                                            referrerPolicy="no-referrer"
                                        />
                                    </MenuButton>
                                </div>
                                <Transition
                                    as={Fragment}
                                    enter="transition ease-out duration-100"
                                    enterFrom="transform opacity-0 scale-95"
                                    enterTo="transform opacity-100 scale-100"
                                    leave="transition ease-in duration-75"
                                    leaveFrom="transform opacity-100 scale-100"
                                    leaveTo="transform opacity-0 scale-95"
                                >
                                    <MenuItems className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                        <MenuItem>

                                        </MenuItem>
                                        <MenuItem>

                                        </MenuItem>
                                        <MenuItem>

                                        </MenuItem>
                                        <MenuItem>
                                            <span
                                                className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 cursor-pointer"

                                            >
                                                Logout
                                            </span>
                                        </MenuItem>
                                    </MenuItems>
                                </Transition>
                            </Menu>
                        </div>
                    </div>
                </div>
            </Disclosure>
        </>
    );
}

export default Navbar