"use client";
import { motion } from "framer-motion";
import { variant } from "@/lib/framer";
import Main from "./Main";

export default function Base() {

 
  return (
    <motion.div
      variants={variant}
      animate="animate"
      initial="initial"
      className=" h-full overflow-y-auto "
    >
      <Main />
    </motion.div>
  );
}
