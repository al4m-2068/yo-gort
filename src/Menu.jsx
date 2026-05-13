import { Menu, X } from "lucide-react"; // Import X
import { Logo } from "./Illust";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; // Import animasi

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="flex sticky top-0 left-0 bg-whitey px-8 h-20 gap-4 items-center z-50">
      <Logo className={'text-navo w-10 h-auto'}/>
      
      <div className="flex w-full">
        <button className="px-6 py-4 font-brigro text-base/[145%] font-extrabold bg-redo text-white rounded-full">
          Order Now
        </button>
      </div>

      {/* Tombol Menu/X dengan Animasi Putar */}
      <button 
        className="lg:hidden w-8 h-8 flex items-center justify-center cursor-pointer z-50 relative" 
        onClick={() => setOpen(!open)}
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="text-navo"
            >
              <X size={32} />
            </motion.div>
          ) : (
            <motion.div
              key="menu"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="text-navo"
            >
              <Menu size={32} />
            </motion.div>
          )}
        </AnimatePresence>
      </button>

      {/* Sidebar Mobile dengan Overlay Logika */}
      <AnimatePresence>
        {open && (
          <motion.ul 
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed left-0 top-0 w-[70%] h-screen flex flex-col bg-white border-r border-gray-100 pt-20"
          >
            <li className="hover:bg-redo cursor-pointer hover:text-whitey transition-colors duration-100"><a className="block py-4 px-6 font-brigro text-2xl font-extrabold tracking-tight" onClick={() => setOpen(false)} href="#hero">Home</a></li>
            <li className="hover:bg-redo cursor-pointer hover:text-whitey transition-colors duration-100"><a className="block py-4 px-6 font-brigro text-2xl font-extrabold tracking-tight" onClick={() => setOpen(false)} href="#menu">Menu</a></li>
            <li className="hover:bg-redo cursor-pointer hover:text-whitey transition-colors duration-100"><a className="block py-4 px-6 font-brigro text-2xl font-extrabold tracking-tight" onClick={() => setOpen(false)} href="#specials">Specials</a></li>
            <li className="hover:bg-redo cursor-pointer hover:text-whitey transition-colors duration-100"><a className="block py-4 px-6 font-brigro text-2xl font-extrabold tracking-tight" onClick={() => setOpen(false)} href="#joys">Joys</a></li>
            <li className="hover:bg-redo cursor-pointer hover:text-whitey transition-colors duration-100"><a className="block py-4 px-6 font-brigro text-2xl font-extrabold tracking-tight" onClick={() => setOpen(false)} href="#faq">FAQ</a></li>
            <li className="hover:bg-redo cursor-pointer hover:text-whitey transition-colors duration-100"><a className="block py-4 px-6 font-brigro text-2xl font-extrabold tracking-tight" onClick={() => setOpen(false)} href="#contact">Contact</a></li>
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
}