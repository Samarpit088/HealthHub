import { useContext, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from "../UserContext";
export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);
    const { setUser } = useContext(UserContext);
    async function handleLoginSubmit(ev) {
        ev.preventDefault();
        try {
            const { data } = await axios.post('/login', { email, password });
            setUser(data);
            alert("Login successfull");
            setRedirect(true);
        }
        catch (e) {
            alert('Login failed!');

        }
    }
    if (redirect) {
        return <Navigate to={'/'} />;
    }

    return (
        <div className="mt-4 grow flex items-center justify-around opacity-0 animate-fadeIn duration-1000">
            <div className="mb-50 bg-[#ABBFCF] p-4 text-white rounded-4xl">
                <div className="font-fredoka text-4xl text-center mb-4 p-2">Login</div>
                <form className="max-w-md mx-auto" onSubmit={handleLoginSubmit}>
                    <input type='email' placeholder="your@gmail.com" value={email} onChange={ev => setEmail(ev.target.value)} />
                    <input type="password" placeholder="password" value={password} onChange={ev => setPassword(ev.target.value)} />
                    <button className="primary relative px-6 py-2 font-bold rounded-lg overflow-hidden border border-[#ABBFCF] 
  before:absolute before:top-0 before:left-0 before:w-0 before:h-full before:bg-[#ABBFCF] 
  before:transition-all before:duration-700 hover:before:w-full 
  text-white transition-colors duration-700 hover:text-[#06182B] hover:border-[#C2D6E3]">
                        <div className="relative z-10 opacity-0 animate-fadeIn">
                            Login
                        </div>
                    </button>
                    <div className='text-center py-2'>Don't have an account yet? <Link to={'/register'} className='text-[#061828] underline'>Register now</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}