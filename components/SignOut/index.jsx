import { useAuth } from '../../lib/auth/AuthContext';
import { useRouter } from 'next/router';

export default function SignOut() {
    const { logOut } = useAuth();
    const router = useRouter();
    
    const handleLogout = async () => {
        await logOut();
        router.replace('/')
    }

    return (
        <span onClick={handleLogout} className="cursor-pointer py-2 px-4 rounded-full bg-black text-white hover:bg-slate-800">
            Déconnexion
        </span>
    )
}
