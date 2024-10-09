"use client";
import { useLayoutEffect, useState } from "react";
import { motion } from "framer-motion";
import { useAppDispatch } from "@/redux/store/hook";
import { showMainSideBar, showMarketSideBar } from "@/redux/reducers/sidebar";
import SpaceMan from './SpaceMan';
import Title from "../General/Title";
import Chart from "./Chart";
import Links from "../General/Links";
import Details from "./Details";
import DisplayCommentCards from "./DisplayCommentCards";
import TransactionTable from "./TransactionsTable";
import HoldersTable from "./HoldersTable";
import { variant } from "@/lib/framer";
import RightSidebarB from "../Layout/RightSidebarB";

type Props = {
  tableHeader: string[];
  data: (string | number)[][];
};

export default function Base() {
  const dispatch = useAppDispatch();

  const [active, setActive] = useState(0);

  useLayoutEffect(() => {
    dispatch(showMarketSideBar());
  }, []);

  return (
    <motion.div
      variants={variant}
      animate="animate"
      initial="initial"
      className="h-full grid grid-cols-1 xl:grid-cols-[1fr_auto] gap-3"
    >
      <div className="bg-blue-500 h-96"></div>
      <RightSidebarB />
    </motion.div>
  );
}
