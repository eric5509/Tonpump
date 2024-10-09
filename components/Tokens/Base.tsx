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
      className=" rounded-2xl grid gap-2 h-full overflow-y-auto grid-cols-1 xl:grid-cols-[1fr_300px] 2xl:grid-cols-[1fr_346px]"
    >
      <div className="border-[#862078] rounded-2xl lg:p-2 lg:border-2 overflow-y-auto h-full">
        <div className="h-full overflow-y-auto rounded-lg">
          <Title
            paddingLeft="5px"
            title="Token"
            height="50px"
            parentPadding="10px"
            marginBottom="10px"
          />
          <SpaceMan />
          <Title
            paddingLeft="5px"
            title="Charts"
            height="50px"
            parentPadding="10px"
            marginTop="10px"
            marginBottom="10px"
          />
          <div className="rounded-lg bg-[#272727] p-2 lg:p-2.5">
            <Chart />
            <div className="bg-[#272727] mt-4 rounded-t-xl rounded-b-2xl">
              <Links
                data={["Details", "Threads", "Transactions", "Holders"]}
                active={active}
                setActive={setActive}
              />
              <div className="">
                <motion.div
                  animate={{ opacity: active === 0 ? 1 : 0 }}
                  transition={{ duration: 1 }}
                  className={`${active != 0 && "hidden"}`}
                >
                  <Details />
                </motion.div>
                <motion.div
                  animate={{ opacity: active === 1 ? 1 : 0 }}
                  transition={{ duration: 1 }}
                  className={`${active != 1 && "hidden"} h-60 overflow-y-auto`}
                >
                  <DisplayCommentCards />
                </motion.div>
                <motion.div
                  animate={{ opacity: active === 2 ? 1 : 0 }}
                  transition={{ duration: 1 }}
                  className={`${active != 2 && "hidden"} h-[245px] overflow-y-auto`}
                >
                  <TransactionTable />
                </motion.div>
                <motion.div
                  animate={{ opacity: active === 3 ? 1 : 0 }}
                  transition={{ duration: 1 }}
                  className={`${active != 3 && "hidden"} h-[245px] overflow-y-auto`}
                >
                  <HoldersTable />
                </motion.div>
              </div>
            </div>
            <div className="xl:hidden mt-5">
              <RightSidebarB />
            </div>
          </div>
        </div>
      </div>
      <div className="border-[#862078] xl:block hidden rounded-2xl overflow-y-auto border-2">
        <div className=" rounded-2xl h-full overflow-y-auto">
          <RightSidebarB />
        </div>
      </div>
    </motion.div>
  );
}
