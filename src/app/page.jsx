"use client";

import Header from "@/components/Header";
import Main from "@/components/Main";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, x: "100%" }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 1, type: "spring", mass: 2 }}
        className="w-[100%] md:w-[100%] select-none"
      >
        <Header />
        <Main />
      </motion.div>
    </div>
  );
};

export default Home;
