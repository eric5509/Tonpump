"use client";
import { motion } from "framer-motion";
import KingOfCoin from "../Home/KingOfCoin";
import DisplayActionCards from "../Home/DisplayActionCards";
import { useAppSelector } from "@/redux/store/hook";
import Links from "../General/Links";
import Title from "../General/Title";
import BuySell from "../Tokens/BuySell";
import Input from "../General/Input";
import Button from "../General/Button";
import { useState } from "react";

export default function RightSidebarA() {
  const darkmode = useAppSelector((store) => store.darkmode.value);
  const type = useAppSelector((store) => store.sidebar.type);
  const [active, setActive] = useState(0);
  const [activeMarket, setActiveMarket] = useState(0);

  return (
    <div className="h-full rounded-2xl ">
      <motion.div
        animate={{ opacity: type === "main" ? 1 : 0 }}
        transition={{ duration: 1 }}
        className={` ${type != "main" && "hidden"} min-h-full rounded-2xl`}
      >
        <Title title="King of Coin" height="45px" paddingLeft="5px" />
        <div
          className={`${
            darkmode ? "bg-[#272727d]" : "bg-whited"
          } h-fit duration-500 transition-colors rounded-2xl mt-3`}
        >
          <KingOfCoin />
          <div className=" mb-4 mt-3 flex overflow-y-auto w-full justify-between">
            <Title title="Updates" paddingLeft="3px" height="50px" />
            <Links
              identifier="sidebar"
              active={active}
              radius="5px"
              setActive={setActive}
              paddingInline="7px"
              data={["All", "Creation", "Transaction"]}
              fontSize="11px"
            />
          </div>
          <DisplayActionCards />
        </div>
      </motion.div>
    </div>
  );
}
