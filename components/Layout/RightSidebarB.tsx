"use client";
import { useAppSelector } from "@/redux/store/hook";
import { motion } from "framer-motion";
import { useState } from "react";
import Title from "../General/Title";
import BuySell from "../Tokens/BuySell";
import Links from "../General/Links";
import Input from "../General/Input";
export default function RightSidebarB() {
  const darkmode = useAppSelector((store) => store.darkmode.value);
  const type = useAppSelector((store) => store.sidebar.type);
  const [active, setActive] = useState(0);
  const [activeMarket, setActiveMarket] = useState(0);

  return (
    <motion.div
      animate={{ opacity: type === "market" ? 1 : 0 }}
      transition={{ duration: 1 }}
      className={`${
        type != "market" && "hidden"
      } h-full flex-col flex border-2 border-purplee overflow-y-auto w-[350px] lg:rounded-2xl`}
    >
      <Title parentPadding="10px" title="Trade" height="50px" />
      <div className="bg-mainDark p-2 xl:bg-[#272727] flex-1 mt-2 rounded-lg ">
        <BuySell active={activeMarket} setActive={setActiveMarket} />
        <div className="flex justify-between items-center mt-4">
          <Links
            active={active}
            setActive={setActive}
            paddingX="px-3 xl:px-2"
            data={["Limit", "Market"]}
          />
          <div className="flex flex-col items-end">
            <div className="flex gap-1 items-center text-[#ECEDEE]">
              <p className="text-10">Avail. Balance (TON)</p>
              <div className="">
                <img src="recycle.png" alt="" />
              </div>
            </div>
            <p className="text-prim">5.80</p>
          </div>
        </div>
        <Input
          marginBottom="20px"
          marginTop="20px"
          label="Order Price"
          text="SPACE"
          placeholder="58403"
        />
        <Input label="Qty" text="TON" marginTop="10px" placeholder="58403" />
        <Input label="Total" text="USD" marginTop="30px" placeholder="" />

        <div className="mt-6 w-full ">
          <div className="relative cursor-pointer">
            <div className="h-1 absolute w-full top-[5px] pointer-events-none right-0 flex justify-between">
              <div className="h-4 w-4 grid place-content-center">
                {/* <div className="h-[6px] w-[6px] bg-black rounded-full"></div> */}
              </div>
              <div className="h-4 w-4 grid place-content-center">
                {/* <div className="h-[6px] w-[6px] bg-black rounded-full"></div> */}
              </div>
              <div className="h-4 w-4 grid place-content-center">
                {/* <div className="h-[6px] w-[6px] bg-black rounded-full"></div> */}
              </div>
              <div className="h-4 w-4 grid place-content-center">
                {/* <div className="h-[6px] w-[6px] bg-black rounded-full"></div> */}
              </div>
              <div className="h-4 w-4 grid place-content-center">
                {/* <div className="h-[6px] w-[6px] bg-black rounded-full"></div> */}
              </div>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              className="h-3 mt-2 bg-prim w-full"
              step="25"
            />
          </div>
          <div className="flex text-prim text-xs mt-2 justify-between">
            <p className="pl-2">0</p>
            <p className="pl-2">25</p>
            <p className="pl-2">50</p>
            <p className="pl-2">75</p>
            <p className="pl-2">100</p>
          </div>
        </div>
        <div className="flex mt-8 justify-center">
          <button
            className={`px-[70px] font-semibold py-[14px] hover:scale-105 active:scale-100 duration-150 rounded-xl text-white ${
              activeMarket === 0 ? "bg-[#4db34d]" : "bg-[red]"
            }`}
          >
            {activeMarket === 0 ? "Buy" : "Sell"}
          </button>
        </div>
      </div>
    </motion.div>
  );
}
