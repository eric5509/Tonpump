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

export default function Base() {
  const darkmode = useAppSelector((store) => store.darkmode.value);
  const dispatch = useAppDispatch();
  const [active, setActive] = useState(0);

  useLayoutEffect(() => {
    dispatch(showMainSideBar());
  }, [dispatch]);

  return (
    <motion.div
      variants={variant}
      animate="animate"
      initial="initial"
      className="h-full gap-3 "
    >
      <div className="h-full grid gap-2 grid-cols-1 xl:grid-cols-[1fr_300px] 2xl:grid-cols-[1fr_346px] overflow-y-auto">
        <div
          className={`xl:border-2 rounded-md xl:rounded-xl border-purplee overflow-y-auto min-h-full`}
        >
          <div className="overflow-y-auto h-full  lg:rounded-lg">
            <div className="flex xl:p-2 gap-7 justify-between md:flex-row mb-4">
              <div className="pl-2">
                <Title title="Tokens" paddingLeft="5px" height="45px" />
              </div>
              <Links
                active={active}
                paddingX="px-2 xl:px-4"
                fontSize="text-11 xl:text-sm"
                setActive={setActive}
                data={["Trending", "Following", "New Projects"]}
              />
            </div>
            <div
              className={`rounded-2xl min-h-fit lg:min-h-full xl:p-2.5 ${darkmode ? "xl:bg-[#272727] " : "bg-gray-100"
                } duration-500 transition-colors`}
            >
              <DisplayPostCards />
            </div>
            <div className="mt-8 p-2 xl:hidden">
              <RightSidebarA />
            </div>
          </div>
        </div>
        <div className="border-2 hidden xl:block rounded-2xl overflow-y-auto p-2.5 border-purplee">
          <div className="rounded-lg h-full overflow-y-auto ">
            <RightSidebarA />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
