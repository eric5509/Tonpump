"use client";
import { motion } from "framer-motion";
import DisplayPostCards from "@/components/Home/DisplayPostCards";
import Links from "@/components/General/Links";
import Title from "@/components/General/Title";
import { showMainSideBar } from "@/redux/reducers/sidebar";
import { useAppDispatch, useAppSelector } from "@/redux/store/hook";
import { useLayoutEffect, useState } from "react";
import { variant } from "@/lib/framer";
import RightSidebar from "../Layout/RightSidebarA";
import RightSidebarA from "../Layout/RightSidebarA";
import { Address } from "./Address";
import { useGetTonAddress, useGetTonWallet } from "@/lib/hook";
import { useTonWallet } from "@tonconnect/ui-react";
import Main from "./Main";

export default function Base() {
  const darkmode = useAppSelector((store) => store.darkmode.value);
  const dispatch = useAppDispatch();
  const [friendlyAddress, rawAddress] = useGetTonAddress()
  const [walletName, appName] = useGetTonWallet()
  const [active, setActive] = useState(0);

  useLayoutEffect(() => {
    console.log(walletName, appName)
    dispatch(showMainSideBar());
  }, [dispatch, friendlyAddress, rawAddress, appName, walletName]);

  return (
    <motion.div
      variants={variant}
      animate="animate"
      initial="initial"
      className=" h-full overflow-y-auto grid xl:grid-cols-[1fr_auto] gap-2 "
    >
      <Main />
      <div className="hidden xl:block">
        <RightSidebarA />
      </div>
    </motion.div>
  );
}
