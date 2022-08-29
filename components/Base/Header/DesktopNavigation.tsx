import { Disclosure } from '@headlessui/react'

export default function DesktopNavigation ({ navigation }): JSX.Element {
    return(
        <Disclosure.Panel className="sm:hidden">
        <div className="px-2 pt-2 pb-3 space-y-1">
            {navigation.map(item => (
                <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className='text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
                >
                    {item.name}
                </Disclosure.Button>
            ))}
        </div>
    </Disclosure.Panel>
    )
}