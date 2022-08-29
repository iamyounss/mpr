import { Disclosure } from '@headlessui/react'

export default function MobileNavigation ({ navigation }): JSX.Element {
    return(
        <Disclosure.Panel className="hidden sm:block sm:ml-6n">
        <div className="flex space-x-4">
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