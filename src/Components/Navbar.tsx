import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {

    const LINKS = [
        { label: 'Home', url: '/' },
        { label: 'About', url: '/about/' },
        { label: 'Services', url: '/services/' },
    ]

    const [toggle, setToggle] = useState<boolean>(false);

    return (
        <>
            <nav className="px-4 h-[80px] relative">
                <div className="container mx-auto flex justify-between items-center h-full">
                    <div>
                        <Link 
                            onClick={() => setToggle(false)} 
                            className="text-neutral-200 relative z-1" 
                            to={'/'}
                        > 
                            Framer Transitions 
                        </Link>
                    </div>
                    <button aria-label="Toggle navigation" onClick={() => setToggle(prevVal => !prevVal)} className="h-7 w-8 relative cursor-pointer z-1">
                        <span className={`${toggle ? 'w-full' : 'w-[50%]'} absolute top-0 left-0 h-[2px] transition-all duration-200 bg-neutral-200 rounded-full`} />
                        <span className={`w-full absolute top-[50%] -translate-y-[50%] left-0 h-[2px] bg-neutral-200 rounded-full`} />
                        <span className={`${toggle ? 'w-full' : 'w-[80%]'} transition-all duration-200 absolute bottom-0 left-0 h-[2px] bg-neutral-200 rounded-full`} />
                    </button>
                </div>
                <AnimatePresence>
                    {toggle && (
                        <motion.div
                            initial={{opacity: 0}} 
                            animate={{opacity: 1}}
                            exit={{opacity: 0}}
                            className="fixed top-0 left-0 min-h-full w-full bg-neutral-950 py-[80px] mobile-nav"
                        >
                            <ul className="flex flex-col border-y border-y-neutral-200">
                                {LINKS.map((data) => (
                                    <li 
                                        key={data.label} 
                                        className="border-y-[1px] border-y-neutral-200 group list"
                                    > 
                                        <Link className="px-4 block link" to={data.url} onClick={() => setToggle(false)}> 
                                            <div className="container mx-auto text-neutral-200 group-hover:text-emerald-100"> {data.label} </div> 
                                        </Link> 
                                    </li>
                                ))}
                            </ul>
                            <div className="px-4 text-neutral-200 h-[80px] flex items-center">
                                <div className="container mx-auto">
                                    Portfolio:{' '}
                                    <Link 
                                        to={'https://charleschristianv2.netlify.app/'} 
                                        target="_blank" 
                                        className="hover:underline hover:text-emerald-200"
                                    >  
                                        charleschristianv2.netlify.app 
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </>
    );
};

export default Navbar;