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
import Links2 from "../General/Links2";

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
        <div className="p-1 mb-3 xl:p-2.5">
          <Title
            title="King of Coin"
            parentStyle="h-[45px]"
          />
        </div>
        <div
          className={`${darkmode ? "bg-[#272727d]" : "bg-whited"
            } h-fit duration-500 transition-colors rounded-2xl mt-3`}
        >
          <KingOfCoin />
          <div className=" mt-3 flex overflow-y-auto w-full justify-between">
            <div className="p-1 xl:p-2.5">
              <Title
                title="Updates"
                parentStyle="h-[45px]"
              />
            </div>          
             <Links2
              active={active}
              setActive={setActive}
              data={["All", "Creation", "Transaction"]}
            />
          </div>
          <DisplayActionCards />
        </div>
      </motion.div>
    </div>
  );
}
