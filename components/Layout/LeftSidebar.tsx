"use client";
import { IoMdHome } from "react-icons/io";
import { BsFillGridFill } from "react-icons/bs";
import { motion } from "framer-motion";
import { FaUserAlt } from "react-icons/fa";
import { FaRegGem } from "react-icons/fa";
import { useAppSelector } from "@/redux/store/hook";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function LeftSidebar() {
  const darkmode = useAppSelector((store) => store.darkmode.value);
  const pathname = usePathname();
  const links = [
    ["Home", "home.png", "/", <IoMdHome size={21} />],
    [
      "All Tokens",
      "tokens.png",
      "/tokens",
      <BsFillGridFill style={{ rotate: "45deg" }} size={17} />,
    ],
    ["Profile", "profile.png", "/profile", <FaUserAlt size={17} />],
    ["Earn", "gem1.png", "/earn", <FaRegGem size={17} />],
  ];
  return (
    <div className="hidden xl:flex flex-col w-[320px] bg-red-500 overflow-y-auto border-2 p-3 rounded-xl border-purplee h-full justify-between">
      <div className="flex flex-col gap-2">
        {links.map((el) => (
          <Link href={`${el[2]}`}
            className={`flex cursor-pointer active:scale-[0.96] group shadow shadow-slate-950 duration-300 items-center border-2 gap-3 p-3 text-sm rounded-lg ${pathname === el[2]
              ? "text-secondary border-prim font-semibold bg-prim"
              : "text-white border-transparent bg-[#242727] hover:border-prim"
              }`}
          >
            <p className="transform-none">
              <span
                className={`${pathname != el[2] && " group-hover:text-prim"
                  } duration-300`}
              >
                {el[3]}
              </span>
            </p>
            <p className="transform-none">
              <span
                className={`${pathname != el[2] && " group-hover:text-prim"
                  } duration-300`}
              >
                {el[0]}
              </span>
            </p>
          </Link>
        ))}
      </div>
      <div>
        <div className="grid mb-5 mt-3 place-content-center">
          <img src="cuate.png" className="" alt="" />
        </div>
        <div
          className={`${darkmode ? "bg-[#3C4141]" : "bg-gray-200"
            } cursor-pointer duration-500 transition-colors relative flex p-2 rounded-xl items-center gap-2`}
        >
          <img src="Medium2.png" className="" alt="" />
          <div className="text-xs">
            <p
              className={`font-bold duration-500 transition-colors ${darkmode ? "text-white" : "text-black"
                }`}
            >
              UGnxf
            </p>
            <p
              className={`duration-500 transition-colors ${darkmode ? "text-[#ECEDEE]" : "text-black"
                }`}
            >
              UGnxfddd847..Uv-ld
            </p>
            <img
              src="chevron.png"
              className="absolute top-1/2 right-3 -translate-y-1/2"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
