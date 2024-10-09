'use client'
import { Divide as Hamburger } from 'hamburger-react'
import { closeBackdrop, openBackdrop } from "@/redux/reducers/backdrop"
import { toggleDarkmode } from "@/redux/reducers/darkmode"
import { useAppDispatch, useAppSelector } from "@/redux/store/hook"
import Link from "next/link"
import BackdropA from "../Backdrop/BackdropA"
import BackdropB from "../Backdrop/BackdropB"
import MobileSidebar from "./MobileSidebar"
import { useState } from "react"

export default function Topnav() {
    const darkmode = useAppSelector(store => store.darkmode.value)
    const backdrop = useAppSelector(store => store.backdrop.value)
    const dispatch = useAppDispatch()
    const [isOpen, setOpen] = useState(false)

    const close = () => {
        if (backdrop != 0) {
            dispatch(closeBackdrop())
        }
    }

    return (
        <div className="">
            <div onClick={close} className={`h-[70px] xl:h-20 border-b-2 border-[#862078] duration-500 z-[50000000] transition-colors justify-between px-1 xl:px-5 flex items-center w-full ${darkmode ? 'text-white shadow-2xl bg-[#210716] shadow-gray-950 ' : 'shadow-md  text-black'}`}>
                <div className="flex lg:hidden items-center">
                    <span className="text-xl text-white">
                        <Hamburger toggled={isOpen} toggle={setOpen} size={24} />
                    </span>
                    <Link href={'/'} className='font-semibold text-lg text-prim'>TONPUMP</Link>
                </div>
                <div className="hidden lg:flex items-center gap-5 xl:gap-16">
                    <Link href={'/'}>
                        {darkmode && <img src="/logo.svg" className="w-[179px] h-[29px]" alt="" />}
                        {!darkmode && <img src="/logoDark.svg" className="w-[179px] h-[29px]" alt="" />}
                    </Link>
                    <div className="hidden lg:block transition-none">
                        <div className={`flex items-center duration-500 gap-5 ${darkmode ? "bg-[#D8FDFD0F]" : "bg-gray-300"} duration-300 border overflow-hidden border-transparent hover:border-prim cursor-pointer px-5 h-[45px] rounded-full`}>
                            <img src="x.png" className="cursor-pointer duration-500 hover:scale-125 active:scale-100" alt="" />
                            <img src="telegram.png" className="cursor-pointer duration-500 hover:scale-125 active:scale-100" alt="" />
                            <img src="discord.png" className="cursor-pointer duration-500 hover:scale-125 active:scale-100" alt="" />
                        </div>
                    </div>
                </div>
                <div className={`hidden lg:block hover:border-prim border border-transparent w-[235px] xl:w-[300px] h-[45px] shadow duration-500  rounded-full relative ${darkmode ? "bg-white/10" : "bg-gray-200"}`}>
                    <input type="text" placeholder='Try searching "Trending"' className={`h-full placeholder:font-normal  w-full bg-transparent outline-none pr-8 pl-5 ${darkmode ? "placeholder:text-[#C4FDFC]" : "placeholder:text-gray-800"}`} />
                    {!darkmode && <img src="darksearch.png" className="absolute top-1/2 -translate-y-1/2 right-4" alt="" />}
                    {darkmode && <img src="search.png" className="absolute top-1/2 -translate-y-1/2 right-4" alt="" />}
                </div>
                <div className="flex items-center transform-none gap-5 xl:gap-7">
                    <div className="hidden lg:flex">
                        <img src="toggler.png" className="translate-x-5 xl:translate-x-9 cursor-pointer duration-300 scale-75 active:scale-50" alt="" />
                    </div>
                    <div className="hidden lg:flex items-center gap-2">
                        <img src="gem.png" alt="" />
                        <p className="font-">0.0200</p>
                    </div>
                    <div onClick={() => {
                        dispatch(openBackdrop(1))
                        setOpen(false)
                    }} className="transition-none">
                        <p className="px-3 lg:px-5 py-2.5 rounded-md lg:rounded-xl cursor-pointer text-xs lg:text-sm border-2 font-semibold lg:hover:scale-105 duration-300 active:scale-100 border-[#9DFBFA] font-">Create Token</p>
                    </div>
                </div>
            </div>
            <BackdropA />
            <BackdropB />
            <MobileSidebar navOpened={isOpen} setNavOpened={setOpen} />
        </div>
    )
}
