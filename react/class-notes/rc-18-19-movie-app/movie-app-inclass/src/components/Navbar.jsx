import { Fragment } from "react";
import { Disclosure, Menu, MenuButton, MenuItem, MenuItems, Transition } from "@headlessui/react";
import { Link } from "react-router-dom";


//tailwindui.com/components/preview navigation, mobile menu button, open, Disclosure.Panel sil

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {


  // referrerPolicy = "no-referrer"; google dan gelen resimde bazen sıkıntı oluyor, olmasın diye
  return (
    <>
      <Disclosure
        as="nav"
        className="bg-neutral-100 dark:bg-gray-900 py-3 dark:text-white fixed top-0 w-full z-20 "
      >
        <div className="mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between">
            <Link className="pr-2 text-2xl font-semibold" to="/">
              React Movie App
            </Link>
            <div className="absolute inset-y-0 right-0 flex items-center">
              {/* kullanıcı giriş yaptıysa displayName ekranda görünsün */}

              <h5 className="mr-2 capitalize">{ } </h5>
              {/* Profile dropdown */}
              <Menu as="div" className="relative ml-3">
                <div>
                  <MenuButton className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                    <img
                      className="h-8 w-8 rounded-full"
                      src={""}
                      referrerPolicy="no-referrer"
                      alt=""
                    />
                  </MenuButton>
                </div>
                {/* profil resmi basınca büyü, altta açılan dropdown a basınca büyü,ayrılınca küçül */}
                {/* https://headlessui.com/v1/vue/transition */}
                <Transition
                  as={Fragment}
                  // div gibi algılama boş etiket
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <MenuItems className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <MenuItem>
                      {({ active }) => (
                        <Link
                          to="/register"
                          className={classNames(
                            active ? "bg-gray-100" : "",
                            "block px-4 py-2 text-sm text-gray-700"
                          )}
                        >
                          Register
                        </Link>
                      )}
                    </MenuItem>
                    <MenuItem>
                      {({ active }) => (
                        <Link
                          to="/login"
                          className={classNames(
                            active ? "bg-gray-100" : "",
                            "block px-4 py-2 text-sm text-gray-700"
                          )}
                        >
                          Login
                        </Link>
                      )}
                    </MenuItem>
                    <MenuItem>
                      {({ active }) => (
                        <span
                          className={classNames(
                            active ? "bg-gray-100" : "",
                            "block px-4 py-2 text-sm text-gray-700 cursor-pointer"
                          )}

                        >
                          Log out
                        </span>
                      )}
                    </MenuItem>
                  </MenuItems>
                </Transition>
              </Menu>
            </div>
          </div>
        </div>
      </Disclosure>
      <div className="h-[55px]"></div>
    </>
  );
}
