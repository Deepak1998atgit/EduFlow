import { AnimatePresence, motion } from "framer-motion";
import { useLocation } from 'react-router-dom';



const PageTransition = () => {
    const location = useLocation();
    return (<>

        <AnimatePresence mode="wait" >
            <motion.div
                key={location.pathname}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.4, ease: "easeInOut" }}
                className="mt-0"
            >
              
            </motion.div>
            
        </AnimatePresence>
       
    </>

    );
}

export default PageTransition;
