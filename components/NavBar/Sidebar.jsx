import React from 'react';
import { Transition } from '@headlessui/react';
import SidebarNavigation from './SidebarNavigation';

export default function Sidebar({ isMobileMenu }) {

  return isMobileMenu ? (
      <Transition
          appear={true}
          show={isMobileMenu}
          enter="transition ease-in-out duration-300 transform"
          enterFrom="-translate-x-full"
          enterTo="translate-x-0"
          leave="transition ease-in-out duration-300 transform"
          leaveFrom="translate-x-0"
          leaveTo="-translate-x-full"
          className="sidebar-navigation-mobile-wrapper z-1"
      >
          <SidebarNavigation />
      </Transition>
  ) : (
      <div className="sidebar-navigation-wrapper sidebar-h">
          <SidebarNavigation />
      </div>
  )
}