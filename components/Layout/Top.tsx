'use client'
import { useState } from "react"
import { SiBlockchaindotcom } from "react-icons/si";

import { FaBars } from "react-icons/fa";
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { Divide as Hamburger } from 'hamburger-react'
import { MdMenuOpen } from "react-icons/md";
import { GoSidebarExpand } from "react-icons/go";
import { usePathname } from "next/navigation";
import { TonConnectButton } from "@tonconnect/ui-react";


export default function Top() {
    const [isOpen, setOpen] = useState(false)
    const [isDarkMode, setDarkMode] = useState(false);
    const pathname = usePathname()
    const toggleDarkMode = (checked: boolean) => {
        setDarkMode(checked);
    };
    return (
        <div className={`${pathname === '/trade' && "hidden lg:block"}`}>
            <div className="hidden lg:grid h-20 w-full lg:grid-cols-[300px_1fr] xl:grid-cols-[325px_1fr_350px]">
                <div className=" pl-5 flex items-center border-r-2 border-r-purplee border-b-transparent ">
                    <img src="logo.png" alt="" />
                </div>
                <div className="border-b-2 px-4 flex justify-between items-center border-purplee">
                    <div className={`flex items-center duration-500 gap-5 border-2 overflow-hidden border-prim cursor-pointer px-5 h-[45px] rounded-full`}>
                        <img src="x.png" className="cursor-pointer duration-500 hover:scale-125 active:scale-100" alt="" />
                        <img src="telegram.png" className="cursor-pointer duration-500 hover:scale-125 active:scale-100" alt="" />
                        <img src="discord.png" className="cursor-pointer duration-500 hover:scale-125 active:scale-100" alt="" />
                    </div>
                    <div className={`border-prim border-2 w-[235px] xl:w-[325px] h-[45px] shadow duration-500  rounded-full relative `}>
                        <input type="text" placeholder='Try searching "Trending"' className={`h-full text-white placeholder:font-normal  w-full bg-transparent outline-none pr-10 pl-5 `} />
                        <img src="search.png" className="absolute pointer-events-none top-1/2 -translate-y-1/2 right-4" alt="" />
                    </div>
                    <DarkModeSwitch
                        style={{}}
                        checked={isDarkMode}
                        onChange={toggleDarkMode}
                        size={25}
                        color={"rgb(157 251 250)"}
                    />
                </div>
                <div className=" px-2 border-l-2 flex justify-between items-center border-l-purplee border-b-transparent ">
                    <div className="flex items-center gap-2">
                        <img src="gem.png" alt="" />
                        <p className="font-semibold text-white">0.0200</p>
                    </div>
                    <TonConnectButton />
                </div>
            </div>
            <div className="h-16 lg:hidden px-2 flex items-center justify-between border-purplee border-b-2">
                <div className="flex items-center gap-1">
                    <img src="logo.png" className="w-28" alt="" />
                </div>
                <div className="flex items-center gap-1  text-white font-semibold">
                    <div className="px-3 py-1.5 text-11 rounded-md border-2 border-white">
                        <SiBlockchaindotcom className="inline text-base mr-2" />
                        Connect
                    </div>
                    <Hamburger toggled={isOpen} color="white" toggle={setOpen} size={24} />
                </div>
            </div>
        </div>
    )
}
