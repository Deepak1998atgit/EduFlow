import React,{useState} from "react";
import { IconType } from "react-icons";
import { AnimatePresence, motion } from "framer-motion";

interface Menu {
  id: string;
  Icon: IconType;
  uri: string;
  name: string;
}

interface MenuItemProps {
  menu: Menu; // Use the Menu interface to type the menu prop
  index: number;
}

const MenuItem: React.FC<MenuItemProps> = ({ menu, index }) => {
  const [isHovered,setIsHovered]=useState(false)
  return (
    <a href={menu.uri} className="w-12 flex justify-center h-12 rounded-full items-center group cursor-pointer hover:bg-gradient-to-br 
      hover:from-[#f2d1f1] hover:to-[#f2d1f1] relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={()=>setIsHovered(false)}>
      <menu.Icon className="text-[#2e474f] text-xl"
        style={{ boxShadow: "unset 0 0 0 10px " }}
         />
      {/* Tooltip */}
      <AnimatePresence>
        {
          isHovered && (
          <motion.div className="absolute bg-[#6c8c8e] rounded-md px-6 py-2 -left-[140px]
          after:absolute after:-right-1 after:top-3 after:w-3 after:h-3 after:bg-[#6c8c8e] after:rotate-45"
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{opacity:0,x:-25}}>
          <p className="text-white">{ menu.name} </p>
        </motion.div>)
        }
      </AnimatePresence>
      

    </a>
  );
};

export default MenuItem;
