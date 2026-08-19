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

    const [user, setUser] = useState<AuthUser | null>(null);

    const [token, setToken] = useState<string | null>(null);

    const login = (user: AuthUser, token: string) => {

        console.log("LOGIN CONTEXT EJECUTADO:", user, token);

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