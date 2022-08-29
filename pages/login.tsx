import LogIn from '../components/Modules/logIn';
import { useAuth } from '../lib/state/authentication/AuthContext';
import Redirect from '../components/Redirect';

export default function (){
    //you need to be unlogged to access login page
    //redirect to home if logged
    const { authUser } = useAuth();
    return authUser ? <Redirect to='/home' /> : <LogIn />
}
