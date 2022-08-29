import Link from 'next/link';
import Alert from '../../../../components/Base/Alert/Index';
import { useAuth } from '../AuthContext';

export default function AuthRequired({ children }){
    const { authUser } = useAuth();

    if(!authUser) {
        return (
            <>
                <Alert severity="error">
                    Vous devez être connecté pour accéder à ce contenu
                </Alert>
                <span>
                    <Link href="/">retourne a la page d'accueil</Link>
                </span>
            </>
        )
    }

    return <>{children}</>
}