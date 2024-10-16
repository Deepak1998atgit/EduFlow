import { AnimatePresence } from "framer-motion";
import {useState ,useEffect,useCallback} from 'react'
import { useLocation } from 'react-router-dom';
import Stairs from "./stairs";
const StairTransition: React.FC = () => {
    const location = useLocation();
    const [showStairs, setShowStairs] = useState(true);
    const handleVisibility = useCallback(() => {
        setShowStairs(true);
        const timer = setTimeout(() => {
            setShowStairs(false);
        }, 2000); 
        return () => clearTimeout(timer);
    }, []);
    useEffect(() => {
        handleVisibility();
    }, [location.pathname, handleVisibility]);
    return (
        <> 
            <AnimatePresence mode="wait">
                {showStairs && (
                    <div key={location.pathname}>
                        <div className="h-screen w-screen  top-34 left-0 right-0  pointer-events-zone z-50 flex">
                            <Stairs />
                        </div>
                    </div>
                )}
            </AnimatePresence>
        </>
       
    );
}
export default StairTransition;