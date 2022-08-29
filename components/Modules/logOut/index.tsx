import { useAuth } from '../../../lib/state/authentication/AuthContext';
import { useRouter } from 'next/router';

export default function logOut(){
    const { logOut } = useAuth();
    const router = useRouter();

    const handleLogout = async () => {
        await logOut();
        router.replace('/home')
    }

    return (
        <span
            onClick={handleLogout}
            className="py-2 px-4 rounded-full bg-black text-white hover:bg-slate-800"
        >
            Déconnexion
        </span>
    )
}