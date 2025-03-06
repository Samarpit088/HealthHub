import { useContext, useState } from "react";
import { UserContext } from "../UserContext";
import { Navigate, useParams } from "react-router-dom";
import axios from "axios";
import AccountNav from "./AccountNav";


export default function ProfilePage() {
    const [redirect, setRedirect] = useState(null);
    const { ready, user, setUser } = useContext(UserContext);

    let { subpage } = useParams();
    if (subpage === undefined) {
        subpage = 'profile';
    }

    async function logout() {
        await axios.post('/logout');
        setUser(null);
        setRedirect('/');
    }

    if (!ready) {
        return "Loading....";
    }

    if (ready && !user && !redirect) {
        return <Navigate to={'/login'} />
    }

    if (redirect) {
        return <Navigate to={redirect} />
    }

    return (
        <div>
            <AccountNav />
            {subpage === 'profile' && (
                <div className="text-center max-w-lg mx-auto mt-20  p-10 bg-[#ABBFCF] opacity-0 animate-fadeIn duration-1000 rounded-4xl">
                    Logged in as {user.name} ({user.email})<br />
                    <button onClick={logout} className="primary mt-10 relative px-6 py-2 font-bold rounded-lg overflow-hidden border border-[#ABBFCF] 
  before:absolute before:top-0 before:left-0 before:w-0 before:h-full before:bg-[#ABBFCF] 
  before:transition-all before:duration-700 hover:before:w-full 
  text-white transition-colors duration-700 hover:text-[#06182B] hover:border-[#C2D6E3]">
                        <div className="relative z-10 opacity-0 animate-fadeIn">
                            Logout
                        </div>
                    </button>
                </div>
            )}
        </div>
    );
}