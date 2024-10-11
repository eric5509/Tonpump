'use client'

import { useAppSelector } from "@/redux/store/hook";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BsFillGridFill } from "react-icons/bs";
import { FaConnectdevelop } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { IoGrid } from "react-icons/io5";
import { IoHome } from "react-icons/io5";
import { LuPanelRightOpen } from "react-icons/lu";

import { FaRegGem, FaUserAlt } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";

export default function BottomNav() {
    const darkmode = useAppSelector((store) => store.darkmode.value);
    const pathname = usePathname();
    const links = [
        ["Home", "home.png", "/", <IoHome size={22} />],
        ["All Tokens", "tokens.png", "/tokens", <IoGrid style={{ rotate: "45deg" }} size={18} />],
        ["Profile", "profile.png", "/profile", <FaUserAlt size={20} />],
        ["Earn", "gem1.png", "/earn", <FaRegGem size={20} />],
        ["Connect", "profile.png", "/connect", <LuPanelRightOpen size={25} />],
    ];
    return (
        <div className="flex h-16 border-t items-center border-prim lg:hidden justify-between py-2 px-4">
            {links.map((link, key) => (
                <div className="" key={key}>
                    <Link href={`${link[2]}`} className={`flex flex-col gap-2 text-xs items-center justify-center ${pathname === link[2] ? 'text-prim font-semibold' : 'text-white'}`}>
                        <p>{link[3]}</p>
                    </Link>
                </div>
            ))}
        </div>
    )
}
