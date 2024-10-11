'use client'
import { useAppSelector } from "@/redux/store/hook";
import Image from "next/image";
import { BiComment } from "react-icons/bi";
import { FaRegComment } from "react-icons/fa6";
import { BsChat, BsDot, BsHeart, BsHeartFill, BsMessenger, BsStar } from "react-icons/bs";
export default function PostCard() {
  const darkmode = useAppSelector(store => store.darkmode.value)
  return (
    <div className="bg-[#3C4141] p-4 border-2 border-prim rounded-xl">
      <div className="">
        <div className="grid grid-cols-[auto_1fr] relative mb-2 gap-3">
          <BsStar className="absolute  top-0 text-[17px] right-2 text-prim" />
          <div className="h-full flex flex-col gap-1">
            <img src="/new1.png" className="h-[40px] w-[40px]" alt="" />
            <div className={`flex-1 flex justify-center`}>
              <div className="h-full border-r-2 border-prim border-dashed"></div>
            </div>
          </div>
          <div className="text-white pb-1 flex flex-col gap-2 text-xs">
            <div className="flex gap-1 items-center">$Space created by <div className="h-1 w-1 rounded-full mx-2 bg-prim"></div> <b>UGnxf</b></div>
            <p>Market Cap - 11.5k</p>
            <p><strong>Space Man</strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo incidunt distinctio laborum!</p>
          </div>
        </div>
        <div className="text-white">
          <div className="h-64 border-2 overflow-hidden border-transparent relative rounded-md">
            <img src="https://thumbor.forbes.com/thumbor/fit-in/x/https://www.forbes.com/advisor/in/wp-content/uploads/2022/03/monkey-g412399084_1280.jpg" className="w-full aspect-[4/3] object-cover absolute top-0 left-0" alt="" />
          </div>
          <div className="flex pt-5 items-center gap-5">
            <div className="flex text-rose-600 items-center gap-2">
              <BsHeartFill />
              <p>61</p>
            </div>
            <div className="flex items-center gap-2">
              <FaRegComment />
              <p>61</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}