"use client";
import { motion } from "framer-motion";
import { useLayoutEffect, useState } from "react";
import { variant } from "@/lib/framer";
import { useAppDispatch } from "@/redux/store/hook";
import { showMainSideBar } from "@/redux/reducers/sidebar";
import RightSidebarA from "../Layout/RightSidebarA";
import Main from "./Main";

export default function Base() {
  const [active, setActive] = useState(0);
  const dispatch = useAppDispatch();
  useLayoutEffect(() => {
    dispatch(showMainSideBar());
  }, []);

  return (
    <motion.div
      variants={variant}
      animate="animate"
      initial="initial"
      className=" h-full overflow-y-auto grid gap-5 xl:gap-2 xl:grid-cols-[1fr_auto]"
    >
      <Main />
    </motion.div>
  );
}
