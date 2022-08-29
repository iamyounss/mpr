import { ThemeProvider } from 'next-themes'
import AuthContextProvider  from '../authentication/AuthContext'


const AppProvider = ({children}) => {
    return (
        <ThemeProvider enableSystem={true} attribute="className">
            <AuthContextProvider>
                {children}
            </AuthContextProvider>
        </ThemeProvider>
    )
}

export { AppProvider } 