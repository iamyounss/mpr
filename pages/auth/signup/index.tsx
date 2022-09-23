import { useAuth } from '../../../lib/auth/AuthContext';
import AuthIndex from '../../../containers/Index/AuthIndex';
import SignUp from '../../../components/SignUp';

export default function OnAccessLoginPage(): JSX.Element {
    // return index page which is returning login form if unlogged
    const { authUser } = useAuth();
    
    if(authUser) {
        return <AuthIndex />
    }
    
    return <SignUp/>
}
