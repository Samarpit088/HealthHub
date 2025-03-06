import { Link } from 'react-router-dom'
export default function ContactPage() {
    function sendEmail() {
        window.location.href = "mailto:hr@company.com";
    }

    function copyToClipboard() {
        const text = "+91-1234567890";
        navigator.clipboard.writeText(text)
            .then(() => alert("Copied to clipboard: " + text))
            .catch(err => console.error("Failed to copy: ", err));
    }

    return (
        <div className="flex flex-col justify-center items-center">
            <div className="flex flex-col bg-[#c4d3de] mt-10 mx-40 p-4 min-w-xl h-40 rounded-4xl text-center items-center justify-around opacity-0 animate-fadeIn duration-1000">
                <div className="font-fredoka font-bold text-4xl opacity-0 animate-fadeIn duration-1000 text-[#06182B]">Contact us</div>
            </div>
            <div className="flex mx-40 gap-10">
                <div className="flex flex-col bg-[#143146] mt-15 p-4 min-w-sm h-80 rounded-4xl text-center opacity-0 animate-fadeIn duration-1000">
                    <div className="mt-10 font-fredoka font-bold text-white text-3xl">We’d love to hear from <br />you.</div>
                    <div className="text-white mt-8 font-fredoka font-bold text-sm">Monday – Sunday 7:00 AM – 11:00 PM (IST)</div>
                    <div className="flex justify-center items-center mt-8">
                        <div className="opacity-0 animate-fadeIn duration-1000 ">
                            <button onClick={sendEmail} className="bg-white  p-3 relative px-6 py-2 font-bold rounded-3xl overflow-hidden border border-[#C2D6E3]
  before:absolute before:top-0 before:left-0 before:w-0 before:h-full before:bg-[#143146]
  before:transition-all before:duration-700 hover:before:w-full text-[#06182B]
  transition-colors duration-700 hover:text-[white] hover:border-[#C2D6E3] cursor-pointer">
                                <div className="opacity-0 animate-fadeIn font-fredoka ">Send mail</div>
                            </button>
                        </div>

                    </div>
                </div>
                <div className="bg-[#143146] mt-15 p-4 min-w-xl h-80 rounded-4xl opacity-0 animate-fadeIn duration-1000">
                    <div className='flex items-center mt-10'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 24 24">
                            <g fill="white">
                                <path d="M12.268 19.313L13.5 20.5l1.233-1.178l.033-.032C19.125 15.1 22 12.336 22 8.946C22 6.176 19.943 4 17.325 4c-1.479 0-2.898.728-3.825 1.88C12.573 4.727 11.154 4 9.675 4C7.057 4 5 6.176 5 8.945c0 1.059.28 2.056.798 3.055h3.077l2.292-3.69l1.626 4.336l1.896-1.896H18v1.5h-2.69l-3.103 3.104l-1.374-3.663L9.71 13.5H6.744c1.274 1.736 3.182 3.567 5.513 5.803z" />
                                <path fill-rule="evenodd" d="M7 13.5H2V12h4z" clip-rule="evenodd" />
                            </g>
                        </svg>
                        <span className='font-fredoka text-bold text-4xl text-[white] font-bold'>HealthHub</span>
                        <Link to={'/about'} className='ml-50 text-white font-fredoka font-bold text-2xl hover:underline animate-slide-in-left'>About us</Link>
                    </div>
                    <div onClick={copyToClipboard} className="text-white cursor-pointer mt-3">
                        +<span className="underline">(91)</span><span className="no-underline">-</span><span className="underline">1234567890</span>
                    </div>
                    <div className='flex gap-3 mt-6 ml-2 animate-slide-in-left'>
                        <a href='#' className='curosr-pointer flex items-center justify-center bg-white rounded-full p-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path fill="#06182B" d="M17 1H3c-1.1 0-2 .9-2 2v14c0 1.101.9 2 2 2h14c1.1 0 2-.899 2-2V3c0-1.1-.9-2-2-2M9.984 15.523a5.54 5.54 0 0 0 5.538-5.539c0-.338-.043-.664-.103-.984H17v7.216a.69.69 0 0 1-.693.69H3.693a.69.69 0 0 1-.693-.69V9h1.549c-.061.32-.104.646-.104.984a5.54 5.54 0 0 0 5.539 5.539M6.523 9.984a3.461 3.461 0 1 1 6.922 0a3.461 3.461 0 0 1-6.922 0M16.307 6h-1.615A.694.694 0 0 1 14 5.308V3.691c0-.382.31-.691.691-.691h1.615c.384 0 .694.309.694.691v1.616c0 .381-.31.693-.693.693" /></svg>
                        </a>
                        <a href='#' className='flex items-center justify-center bg-white rounded-full p-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path fill="#06182B" d="M17 1H3c-1.1 0-2 .9-2 2v14c0 1.101.9 2 2 2h7v-7H8V9.525h2v-2.05c0-2.164 1.212-3.684 3.766-3.684l1.803.002v2.605h-1.197c-.994 0-1.372.746-1.372 1.438v1.69h2.568L15 12h-2v7h4c1.1 0 2-.899 2-2V3c0-1.1-.9-2-2-2" /></svg>
                        </a>
                        <a href='#' className='flex items-center justify-center bg-white rounded-full p-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path fill="#06182B" d="M17.316 6.246q.011.244.011.488c0 4.99-3.797 10.742-10.74 10.742c-2.133 0-4.116-.625-5.787-1.697a7.58 7.58 0 0 0 5.588-1.562a3.78 3.78 0 0 1-3.526-2.621a3.86 3.86 0 0 0 1.705-.065a3.78 3.78 0 0 1-3.028-3.703v-.047a3.8 3.8 0 0 0 1.71.473a3.775 3.775 0 0 1-1.168-5.041a10.72 10.72 0 0 0 7.781 3.945a3.8 3.8 0 0 1-.097-.861a3.773 3.773 0 0 1 3.774-3.773a3.77 3.77 0 0 1 2.756 1.191a7.6 7.6 0 0 0 2.397-.916a3.8 3.8 0 0 1-1.66 2.088a7.6 7.6 0 0 0 2.168-.594a7.6 7.6 0 0 1-1.884 1.953" /></svg>
                        </a>
                        <a href='#' className='flex items-center justify-center bg-white rounded-full p-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path fill="#06182B" d="M5 3c0 1.062-.71 1.976-2.001 1.976C1.784 4.976 1 4.114 1 3.052C1 1.962 1.76 1 3 1s1.976.91 2 2M1 19V6h4v13zm6-8.556c0-1.545-.051-2.836-.102-3.951h3.594l.178 1.723h.076c.506-.811 1.746-2 3.822-2C17.1 6.216 19 7.911 19 11.558V19h-4v-6.861c0-1.594-.607-2.81-2-2.81c-1.062 0-1.594.86-1.873 1.569c-.102.254-.127.608-.127.963V19H7z" /></svg>
                        </a>
                    </div>
                    <div className='flex gap-3 ml-4'>
                        <div className='mt-10'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
                            </svg>
                        </div>
                        <div className='text-white mt-4'>If you are in a life threatning situation,<br />dont't use this site. Call (108)<br />to get immediate help</div>
                    </div>

                </div>
            </div>

        </div>

    );
}