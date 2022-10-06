import { AuthProvider } from '../auth/AuthContext';
import AuthRequired from '../auth/AuthRequired';


const AppProvider = ({ 
    children, 
    authenticated
}) => {

    return (
        <AuthProvider authenticated={authenticated}>
            {children}
        </AuthProvider>
        )
}

export { AppProvider } 