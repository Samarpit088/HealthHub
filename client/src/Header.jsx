import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "./UserContext";
export default function Header() {
    const { user } = useContext(UserContext);
    return (
        <header className='flex items-center justify-between py-12 px-20'>
            <Link to={'/'} href='' className='flex items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" >
                    <g fill="currentColor">
                        <path d="M12.268 19.313L13.5 20.5l1.233-1.178l.033-.032C19.125 15.1 22 12.336 22 8.946C22 6.176 19.943 4 17.325 4c-1.479 0-2.898.728-3.825 1.88C12.573 4.727 11.154 4 9.675 4C7.057 4 5 6.176 5 8.945c0 1.059.28 2.056.798 3.055h3.077l2.292-3.69l1.626 4.336l1.896-1.896H18v1.5h-2.69l-3.103 3.104l-1.374-3.663L9.71 13.5H6.744c1.274 1.736 3.182 3.567 5.513 5.803z" />
                        <path fill-rule="evenodd" d="M7 13.5H2V12h4z" clip-rule="evenodd" />
                    </g>
                </svg>
                <span className='font-fredoka font-bold text-2xl text-[#06182B]'>HealthHub</span>
            </Link>
            <div className='flex gap-4 items-center'>
                <Link to={'/about'} className='font-fredoka font-bold text-xl cursor-pointer text-[#06182B] hover:underline'>About</Link>
                <Link to={'/contact'} className='font-fredoka font-bold text-xl cursor-pointer text-[#06182B] hover:underline'>Contact</Link>
                <div className='border border-l border-[#505D69] h-10'></div>

                {!!user ? (
                    <div className="ml-2">
                        <div className="flex gap-2 border bg-[#ABBFCF] border-gray-300 rounded-full py-2 px-4 shadow-md shadow-gray-300">
                            <Link to={'/account'} className='bg-white rounded-full border border-[#ABBFCF] p-[0.2rem] w-10 h-10 flex items-center justify-center text-[#ABBFCF] transition-all duration-500 hover:w-12 hover:h-12 cursor-pointer'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-7 relative ">
                                    <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                ) : (
                    <div className="ml-2 ">
                        <div className="flex gap-2 border border-gray-300 rounded-full py-2 px-4 shadow-md shadow-gray-300">
                            <Link to={'/login'} className='bg-[#ABBFCF] rounded-full border border-[#ABBFCF] p-[0.2rem] w-10 h-10 flex items-center justify-center text-white transition-all duration-500 hover:w-12 hover:h-12 cursor-pointer'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-7 relative ">
                                    <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                )}

                {/* <div className="flex gap-2 border border-gray-300 rounded-full py-2 px-4 shadow-md shadow-gray-300">
                    <Link to={'/login'} className='bg-[#ABBFCF] rounded-full border border-[#ABBFCF] p-[0.2rem] w-10 h-10 flex items-center justify-center text-white transition-all duration-500 hover:w-12 hover:h-12 cursor-pointer'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-7 relative ">
                            <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
                        </svg>
                        {!!user && (
                            <div></div>
                        )}
                    </Link>
                </div> */}

            </div>
        </header>
    );
}