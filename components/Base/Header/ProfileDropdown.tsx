import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import Logout from '../../Modules/logOut';
import {classNames} from '../../Modules/layout/Header'

export default function ProfileDropdown (): JSX.Element {
    const items = [
        {name: 'Your profile', href: '/'},
        {name: 'Settings', href: '/settings'},
    ]

    return (
        <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
        >
            <Menu.Items className="z-10 origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none">
                <div className="py-1">
                    {items.map(item => (
                        <Menu.Item key={item.name}>
                            {({active}) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className={classNames(
                                        active
                                            ? 'bg-gray-100 text-gray-900'
                                            : 'text-gray-700',
                                        'block px-4 py-2 text-sm',
                                    )}
                                >
                                    {item.name}
                                </a>
                            )}
                        </Menu.Item>
                    ))}
                    <Menu.Item>
                        {({active}) => (
                            <span
                                className={classNames(
                                    active
                                        ? 'bg-gray-100 text-gray-900'
                                        : 'text-gray-700',
                                    'block px-4 py-2 text-sm',
                                )}
                            >
                                <Logout />
                            </span>
                        )}
                    </Menu.Item>
                </div>
            </Menu.Items>
        </Transition>
    )
}