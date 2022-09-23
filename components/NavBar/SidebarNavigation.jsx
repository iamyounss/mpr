import Link from 'next/link';
import { SidebarNavigation } from '../../routes/NavbarRoutes';

export default function SidebarNav() {    
    const getLink = (path) => `${path}`;
    
    return (
        <ul className="my-auto">
            {SidebarNavigation.map(nav => (
                <li key={nav.name} className="my-4 cursor-pointer">
                    <Link href={getLink(nav.href)} passHref>
                        <span key={nav.name} className="sidebar-links">
                            {nav.name}
                        </span>
                    </Link>
                </li>
            ))}
        </ul>
    )
}