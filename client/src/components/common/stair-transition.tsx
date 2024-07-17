import { AnimatePresence } from "framer-motion";
import { useLocation } from 'react-router-dom';
import Stairs from "./stairs";

const StairTransition: React.FC = () => {
    const location = useLocation();
    return (
        <AnimatePresence mode="sync">
            <div key={location.pathname}>
                <div className="h-screen w-screen fixed top-34 left-0 right-0 pointer-events-zone z-48 flex">
                    <Stairs />
                </div>
            </div>
        </AnimatePresence>
    );
}

export default StairTransition;