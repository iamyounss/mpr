import Register from '../components/Modules/createUser'
import { useAuth } from '../lib/state/authentication/AuthContext';
import Redirect from '../components/Redirect';

export default function (): JSX.Element {
    const { authUser } = useAuth();
    return <>{authUser ? <Redirect to='/home'/> : <Register />}</>
}
