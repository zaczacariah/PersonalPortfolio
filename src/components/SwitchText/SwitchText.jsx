import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';


const SwitchText = ({initialText, alternateText, interval, className}) => {
    const [isSwapped, setIsSwapped] = useState(false);

    useEffect(() => {
        const swapInterval = setInterval(() => {
        setIsSwapped((prevIsSwapped) => !prevIsSwapped);
        }, interval);

        return () => {
        clearInterval(swapInterval);
        };
    }, [interval]);
    
    const textVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
      <AnimatePresence>  
          <motion.h1
              key={isSwapped ? alternateText : initialText}
              variants={textVariants}
              initial='hidden'
              animate='visible'
              exit='hidden'
              className={className}
          >
          {isSwapped ? alternateText : initialText}
          </motion.h1>
      </AnimatePresence>
    )
  }

export default SwitchText


// const SwitchText = (initialText, alternateText, interval, className) => {
//     const [isSwapped, setIsSwapped] = useState(false);

//     useEffect(() => {
//         const swapInterval = setInterval(() => {
//         setIsSwapped((prevIsSwapped) => !prevIsSwapped);
//         }, interval);

//         return () => {
//         clearInterval(swapInterval);
//         };
//     }, [interval]);

//     const textVariants = {
//         hidden: { opacity: 0, y: 20 },
//         visible: { opacity: 1, y: 0 },
//     };

//     return (
//       <AnimatePresence>  
//           <motion.h1
//               key={isSwapped ? alternateText : initialText}
//               variants={textVariants}
//               initial='hidden'
//               animate='visible'
//               exit='hidden'
//               className={className}
//           >
//           {isSwapped ? alternateText : initialText}
//           </motion.h1>
//       </AnimatePresence>
//     )
//   }

// export default SwitchText

        
