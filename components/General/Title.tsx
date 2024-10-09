'use client'
import { useAppSelector } from '@/redux/store/hook'

type Props = {
    title: string
    leaveWhite?: boolean
    parentStyle?: string 
    textStyle?: string 
}

export default function Title({ title, textStyle, parentStyle, leaveWhite }: Props) {
    const darkmode = useAppSelector(store => store.darkmode.value)
    return (
        <div className={`${parentStyle} overflow-hidden rounded pl-3 flex items-center relative w-full `}>
            <div className="h-6 w-6 -top-[16px] rotate-45 -left-[15px] absolute bg-prim"></div>
            <div className="h-6 w-6 -bottom-[16px] rotate-45 -left-[15px] absolute bg-white"></div>
            <p className={`place-content-center text-base lg:text-[17px] font-semibold ${darkmode ? 'text-white' : `${leaveWhite ? "text-white" : "text-black"}`} ${textStyle} duration-500 transition-colors`}>{title}</p>
        </div>
    )
}
