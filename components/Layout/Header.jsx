import React from 'react';
import ProfileDropdown from '../NavBar/ProfileDropdown';
import Sidebar from '../NavBar/Sidebar';
import { Menu } from '@headlessui/react';

export const classNames = (...classNames) => {
    return classNames.filter(Boolean).join(' ')
}

export default function Header() {
    const [isMobileMenu, setIsMobileMenu] = React.useState(false);

    return (
        <>
            <div className="fixed w-full h-14 flex justify-between items-center px-8 bg-white z-10 border-b-2 border-slate-200">
                {/* Toggle Mobile Menu */}
                <div className="flex">
                    {isMobileMenu ? (
                        <button
                            className="first-letter-title"
                            onClick={() =>
                                setIsMobileMenu(isMobileMenu => !isMobileMenu)
                            }
                        >
                            X
                        </button>
                    ) : (
                        <button
                            className="first-letter-title"
                            onClick={() =>
                                setIsMobileMenu(isMobileMenu => !isMobileMenu)
                            }
                        >
                            D
                        </button>
                    )}
                    <h1 className="title flex">
                        <span className="hidden md:block">D</span>
                        rivest
                    </h1>
                </div>
                <ul className="flex items-center">
                    <li className="p-4">
                        <Menu
                            as="div"
                            className="relative inline-block text-left"
                        >
                            <div>
                                <Menu.Button className="inline-flex justify-center w-full rounded-md py-2 text-sm font-medium text-gray-700 focus:outline-none">
                                    <div>
                                        <div className="flex text-sm rounded-full focus:outline-none text-black">
                                            <span className="sr-only">
                                                Open user menu
                                            </span>
                                            <span className="h-10 w-10 rounded-full bg-sky-200 text-black flex items-center justify-center text-lg">
                                                YY
                                            </span>
                                            <span className="text-black flex items-center ml-2">
                                                Younes Yahya
                                            </span>
                                        </div>
                                    </div>
                                </Menu.Button>
                            </div>

                            <ProfileDropdown />
                        </Menu>
                    </li>
                </ul>
            </div>
            <Sidebar isMobileMenu={isMobileMenu} />
        </>
    )
};

