import Header from '../../../../components/Modules/layout/Header';
import Logout from '../../../../components/Modules/logOut'
import ProfileDropdown from '../../../../components/Base/Header/ProfileDropdown'
import MobileNavigation from "../../../../components/Base/Header/MobileNavigation";
import DesktopNavigation from "../../../../components/Base/Header/DesktopNavigation";


export default function connectedRoutes(): JSX.Element {
    const navigation = [
        { name: 'Accueil', href: '/home' },
        { name: 'Commandes', href: '/orders' },
        { name: 'Réserver un taxi', href: '/book' },
      ]
      

    return (
        <Header
            profileDropdown={<ProfileDropdown />}
            //desktopNavigation={<DesktopNavigation navigation={navigation} />}
            //mobileNavigation={<MobileNavigation navigation={navigation} />}
        />
    )
}

export function ConnectedActions(){
    return (
        <>
            <Logout />
        </>
    )
}