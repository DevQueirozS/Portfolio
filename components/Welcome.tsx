"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const Welcome = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClick = () => {
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-custom-gradient"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -1000 }}
          transition={{ duration: 1 }}
        >
          <div className="h-full flex flex-col justify-center items-center text-white gap-y-14">
            <div className="rounded-full w-3 h-3 bg-white mb-7"></div>
            {/* <Image src='/icons8-github-120.png' alt="logo-github" width={120} height={120}></Image> */}
            <div className="flex flex-col items-center">
              <span>Gustavo Queiroz</span>
              <span className="text-xl font-bold">Desenvolvedor front-end</span>
            </div>
            <div className="flex flex-col items-center">
              <h1 className="text-[120px]">portfólio</h1>
              <motion.button
                className="px-6 py-3 text-xl font-semibold bg-transparent rounded-[100px] w-10 border-white border flex justify-center items-center"
                onClick={handleClick}
                whileHover={{
                  y: [0, -5, 0],
                  transition: { duration: 0.8, repeat: Infinity },
                }}
              >
                <span className="material-symbols-outlined">arrow_upward</span>
              </motion.button>
            </div>
          </div>
          <span className="absolute bottom-[5px] right-[5px]">2024</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Welcome;
