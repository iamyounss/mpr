import Link from "next/link";
import Header from '../../../../components/Modules/layout/Header';
import MobileNavigation from "../../../../components/Base/Header/MobileNavigation";
import DesktopNavigation from "../../../../components/Base/Header/DesktopNavigation";


export default function disconnectedRoutes(): JSX.Element {
    
    const navigation = [
        { name: 'Accueil', href: '/home' },
        { name: 'Commandes', href: '/orders' },
        { name: 'Réserver un taxi', href: '/book' },
      ]
      
    return (
        <>
            <Header onConnectedActions={<DisconnectedSettings />} />
            {/*
                desktopNavigation={<DesktopNavigation navigation={navigation} />}
                mobileNavigation={<MobileNavigation navigation={navigation} />} 
                */}
        </>
    )
}

function DisconnectedSettings() {
    return (
        <>
            <span className="bg-white text-sky-600 border rounded-lg py-2 px-4 mr-2">
                <Link href="/login">Connexion</Link>
            </span>
            <span className="rounded-lg py-2 px-4 mr-2 bg-sky-600 text-white hover:bg-sky-800">
                <Link href="/subscribe">S'inscrire</Link>
            </span>
        </>
    )
}

