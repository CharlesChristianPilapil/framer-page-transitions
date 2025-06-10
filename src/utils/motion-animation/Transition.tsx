import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";
import useScreenDimension from "../hooks/useScreenDimension";

const Transition = ({ children }: { children: ReactNode}) => {

    const dimensions = useScreenDimension();
    let nbOfColumns;
    if (dimensions.width >= 1280) {
        nbOfColumns = 5;
    } else if (dimensions.width >= 976) {
        nbOfColumns = 4;
    } else if (dimensions.width <= 564) {
        nbOfColumns = 2;
    } else {
        nbOfColumns = 3;
    }

    const expand = {
        initial: {
            top: 0
        },
        enter: (i: number) => ({    
            top: "100vh",
            transition: {
                duration: 0.4,
                delay: 0.10 * i,
                ease: [0.215, 0.61, 0.355, 1],
            },
            transitionEnd: { height: "0", top: "0" }
        }),
        exit: (i: number) => ({
            height: "100vh",
            transition: {
                duration: 0.6,
                delay: 0.10 * i,
                ease: [0.215, 0.61, 0.355, 1]
            }
        })
    }

    const opacity = {
        initial: {
            opacity: 0.5
        },
        enter: {
            opacity: 0
        },
        exit: {
            opacity: 0.5,
        }
    }

    const anim = (variants: Variants, custom: number | null = null) => {
        return {
            initial: "initial",
            animate: "enter",
            exit: "exit",
            custom,
            variants
        }
    }

    return (
        <>
            {children}
            <motion.div aria-hidden="true" {...anim(opacity)} className='fixed w-full h-screen bg-neutral-800 z-1 pointer-events-none top-0 left-0'/>
            <div aria-hidden="true" className="fixed w-screen h-screen flex left-0 top-0 pointer-events-none z-2">
                {
                    [...Array(nbOfColumns)].map( (_, i) => {
                        return (
                            <motion.div key={i} {...anim(expand, i)} className="bg-neutral-950 relative h-full w-full border-x-[.5px] border-x-white/25"/>
                        ) 
                    })
                }
            </div>
        </>
    );
};

export default Transition;