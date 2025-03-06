import { useState } from "react";
import {Link, Navigate} from "react-router-dom"
import axios from "axios";
export default function Register(){
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [redirect,setRedirect] = useState(false);
    async function registerUser(ev){
        ev.preventDefault();
        try{
            const {data} = await axios.post('/register',{
                name,email,password,
            })
            alert("Registration successfull. Now you can log in!");
            setRedirect(true);
        }
        catch(e){
            alert("Registration failed. Please try again later!");
        }
    }

    if(redirect){
        return <Navigate to={'/login'}/>
    }
    
    return(
        <div className="mt-4 grow flex items-center justify-around">
            <div className="mb-50 bg-[#ABBFCF] p-4 text-white rounded-4xl opacity-0 animate-fadeIn duration-1000">
                <div className="font-fredoka text-4xl text-center mb-4 p-2">Register</div>

                <form className="max-w-md mx-auto" onSubmit={registerUser}>
                    <input type='text' placeholder="your name" value={name} onChange={ev=> setName(ev.target.value)}/>
                    <input type='email' placeholder="your@gmail.com" value={email} onChange={ev=> setEmail(ev.target.value)}/>
                    <input type="password" placeholder="password" value={password} onChange={ev=> setPassword(ev.target.value)}/>
                    <button className="primary relative px-6 py-2 font-bold rounded-lg overflow-hidden border border-[#ABBFCF] 
  before:absolute before:top-0 before:left-0 before:w-0 before:h-full before:bg-[#ABBFCF] 
  before:transition-all before:duration-700 hover:before:w-full 
  text-white transition-colors duration-700 hover:text-[#06182B] hover:border-[#C2D6E3]">
                        <div className="relative z-10 opacity-0 animate-fadeIn">
                            Register
                        </div>
                    </button>
                    <div className='text-center py-2'>Already a memeber? <Link to={'/login'} className='text-[#061828] underline'>Login</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}