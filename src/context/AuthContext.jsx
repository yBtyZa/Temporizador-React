import { createContext, useState, useContext } from "react";
import { v4 as uuidv4 } from 'uuid';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const usuarios = [{
        id: 1,
        name: 'Joaquin',
        email: 'joaquin@example.com',
        password: '123456'
    }, {
        id: 2,
        name: 'Javier',
        email: 'javier@example.com',
        password: '123456'
    }];

    const [user, setUser] = useState(null);

    const login = (userData) => {
        const findUser = usuarios.find(u => u.email === userData.email && u.password === userData.password);

        if (findUser) {
            const token = uuidv4();
            localStorage.setItem('token', JSON.stringify(token));
            setUser(findUser);
            alert('Login efetuado com sucesso!');
            window.location.href = '/';
        } else {
            alert('Usuário ou Senha Incorretos');
        }
    };

    const logout = () => {
        localStorage.removeItem('token');
        setUser(null);
        alert('Logout efetuado com sucesso!');
        window.location.href = '/';
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export function useAuth() {
    const context = useContext(AuthContext);
    return context;
}
