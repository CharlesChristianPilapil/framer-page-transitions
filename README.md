Animation Variants:

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

Screen dimension custom hook:

  import { useEffect, useState } from "react"
  
  const useScreenDimension = () => {
      const [dimensions, setDimensions] = useState({
          width: window.innerWidth,
          height: window.innerHeight
      });
  
      useEffect(() => {
          const handleResize = () => {
              setDimensions({width: window.innerWidth, height: window.innerHeight});
          }
  
          window.addEventListener("resize", handleResize);
          return () => window.removeEventListener("resize", handleResize);
      }, []);
  
      return dimensions;
  }
  
  export default useScreenDimension
