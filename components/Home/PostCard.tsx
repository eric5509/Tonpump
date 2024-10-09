'use client'
import { useAppSelector } from "@/redux/store/hook";
import Image from "next/image";
import { BsChat, BsDot, BsHeart, BsMessenger, BsStar } from "react-icons/bs";
export default function PostCard() {
  const darkmode = useAppSelector(store => store.darkmode.value)
  return (
    <div className={`flex shadow-md border-[#8996A9] border-2 duration-500 transition-colors p-3 rounded-xl gap-2 ${darkmode ? "bg-[#272727]" : "bg-white"}`}>
      <img src="/new1.png" className="h-[30px] w-[30px]" alt="" />
      <div className={`flex text-white flex-col gap-1`}>
        <div className="flex justify-between items-center">
          <p className="flex gap-1 text-10 items-center">
            <span className={`${darkmode ? "text-white" : "text-secondary"} duration-500 transition-colors`}>$Space</span>
            <span className={`text-xs text-nowrap ${darkmode ? "text-[#ECEDEE] " : "text-secondary"} ml-1 duration-500 transition-colors`}>created by</span>
            <BsDot />
            <span className={`${darkmode ? "text-white" : "text-secondary"} font-semibold duration-500 transition-colors`}>UGnxf</span>
          </p>
          <img src="/star.png" className="h-4 cursor-pointer" alt="" />
        </div>
        <p className={`text-xs ${darkmode ? "text-[#ECEDEE] " : "text-secondary"} duration-500 transition-colors`}>Market Cap - 11.5k</p>
        <p className="text-xs mb-2">
          <b className={`${darkmode ? "text-white" : "text-secondary"} duration-500 transition-colors`}> Space Man (#Space)</b> is a cryptocurrency project
          based on inspirations from a man who visited.....
        </p>
        <img
          src="alien.png"
          className="object-cover rounded-xl "
          alt=""
        />
        <div className="mt-2 text-xs flex gap-7 items-center">
          <div className="flex cursor-pointer items-center gap-2">
            <img src="comment.png" alt="" />
            <p className={`${darkmode ? "text-white" : "text-secondary"}`}>61</p>
          </div>
          <div className="flex text-[#F4245E] cursor-pointer items-center gap-2">
            <img src="like.png" alt="" />
            <p>6.2k</p>
          </div>
        </div>
        <p className={`text-xs mt-2 duration-500 transition-colors ${darkmode ? "text-[#9DFBFA]" : "text-secondary"} `}>Show more</p>
      </div>
    </div>
  );
}