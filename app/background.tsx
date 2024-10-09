'use client'

import { useAppSelector } from "@/redux/store/hook"

type Props = {
    children: React.ReactNode
}

export default function Background({children}: Props) {
    const darkmode = useAppSelector(store => store.darkmode.value)
  return (
    <div className={`duration-500 ${darkmode? "bg-[#1E0A1E]": "bg-gray-50"}`}>
        {children}
    </div>
  )
}
