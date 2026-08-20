import { createContext, useContext, useState, type ReactNode } from "react";

export interface AuthUser {
    username: string;
    rolename: string;
}

export interface AuthTools {
    user: AuthUser | null;
    token: string | null;
    login: (user: AuthUser, token: string) => void;
    logout: () => void;
}

export const AuthContext = createContext<AuthTools | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {

    const iniciarAuth = () => {

        const user = localStorage.getItem("user")

        if (user) {

            return JSON.parse(user)

        } else {

            return null;

        }
    }

    const [user, setUser] = useState<AuthUser | null>(iniciarAuth);

    const iniciarToken = () => {
        return localStorage.getItem("token");
    };

    const [token, setToken] = useState<string | null>(iniciarToken);

    const login = (user: AuthUser, token: string) => {
        setUser(user);
        setToken(token);
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('token', token);
    };

    const logout = () => {
        setUser(null);
        setToken(null);
        localStorage.removeItem('user');
        localStorage.removeItem('token');
    };

    return (
        <AuthContext.Provider value={{ user, token, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth debe ser usado dentro de un AuthProvider');
    }
    return context;
}