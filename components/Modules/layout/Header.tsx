import React, { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import ProfileDropdown from '../../Base/Header/ProfileDropdown';

export const classNames = (...classNames) => {
    return classNames.filter(Boolean).join(' ')
}

type Header = {
    children?: React.ReactNode,
    onConnectedActions?: JSX.Element,
    profileDropdown?: JSX.Element,
    mobileNavigation?: JSX.Element,
    desktopNavigation?: JSX.Element,
}



export default function Header(): JSX.Element {
  return (
      <div className="w-full h-20 flex justify-between items-center px-8 text-white bg-slate-800">
          <h1 className="text-2xl font-bold text-white">Drivest</h1>
          <ul className="flex items-center">
              <li className="p-4">
                  <Menu as="div" className="relative inline-block text-left">
                      <div>
                          <Menu.Button className="inline-flex justify-center w-full rounded-md shadow-sm md:px-4 py-2 text-sm font-medium text-gray-700 focus:outline-none">
                              <div>
                                  <div className="bg-gray-800 flex text-sm rounded-full focus:outline-none">
                                      <span className="sr-only">
                                          Open user menu
                                      </span>
                                      <span
                                          className="h-10 w-10 rounded-full bg-white text-black flex items-center justify-center text-lg"
                                      >YY</span>
                                  </div>
                              </div>
                          </Menu.Button>
                      </div>

                          <ProfileDropdown />
                  </Menu>
              </li>
          </ul>
      </div>
  )
};

