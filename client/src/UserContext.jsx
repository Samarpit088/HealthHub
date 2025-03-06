import { createContext, useEffect, useState } from "react";
import axios from 'axios';

export const UserContext = createContext({});

export function UserContextProvider({children}){
    const [user, setUser] = useState(() => {
        const storedUser = localStorage.getItem("user");
        return storedUser ? JSON.parse(storedUser) : null;
    });
    const [ready,setReady] = useState(false);
    
    useEffect(() => {
        const fetchUser = async () => {
            try {
                const { data } = await axios.get("/profile");
                setUser(data);
                localStorage.setItem("user", JSON.stringify(data));
            } catch (error) {
                console.error("User fetch failed", error);
            } finally {
                setReady(true); // ✅ Always set ready to true, even if user is null
            }
        };

        if (!user) {
            fetchUser();
        } else {
            setReady(true);
        }
    }, []);

    useEffect(() => {
        if (user) {
            localStorage.setItem("user", JSON.stringify(user));
        } else {
            localStorage.removeItem("user");
        }
    }, [user]);
    return(
        <UserContext.Provider value={{user,setUser,ready}}>
            {children}
        </UserContext.Provider>
    );
}