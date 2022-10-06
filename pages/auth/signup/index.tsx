import { useAuth } from '../../../components/containers/auth/AuthContext';
import AuthIndex from '../../../components/containers/auth/Index/AuthIndex';
import SignUp from '../../../components/containers/auth/SignUp';

export default function OnAccessLoginPage(): JSX.Element {
    // return index page which is returning login form if unlogged
    const { authUser } = useAuth();
    
    if(authUser) {
        return <AuthIndex />
    }
    
    return <SignUp/>
}
