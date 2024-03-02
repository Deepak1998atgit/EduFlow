// UserContext.tsx
import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import decodeJwtToken from '../utils/decodeJwt';
import { useNavigate } from 'react-router-dom';

interface UserContextType {
    isBlocked: boolean;
}


const UserContext = createContext<UserContextType | undefined>(undefined);
const navigate = useNavigate();
export const UserProviderForUserIsBlock = ({ children}) => {
    const [isBlocked, setIsBlocked] = useState(false);
    useEffect(() => {
        const checkUserStatus = async () => {
            try {
                const accessToken = localStorage?.getItem("accessToken");
                if (accessToken) {
                    const decodedToken: any = decodeJwtToken(accessToken ?? "");
                    console.log("user blocked gg", decodedToken?.payload?.Id)
                    const response = await axios.post('http://localhost:5000/api/admin/isUserBlocked', decodedToken?.payload);
                    if (response.data.isBlocked) {
                        console.log("user blocked")
                        localStorage?.removeItem("accessToken");
                        navigate('\ogin');
                        
                    }
                }
            } catch (error) {
                console.error('Error checking user status:', error);
            }
        };
        checkUserStatus();
    }, []);

    return (
        <UserContext.Provider value={{ isBlocked }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = (): UserContextType => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error('useUser must be used within a UserProvider');
    }
    return context;
};
