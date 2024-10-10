'use client'
import { useState } from "react";
import Links from "../General/Links";
import Title from "../General/Title";
import Chart from "./Chart";
import SpaceMan from "./SpaceMan";
import RightSidebarB from "../Layout/RightSidebarB";

export default function Main() {
    const [active, setActive] = useState(0);

    return (
        <div className="border-purplee overflow-y-auto xl:p-2 rounded-xl lg:border-2 h-full w-full">
            <div className="xl:p-0">
                <div className="mb-4 ml-2"><Title title="Token" /></div>
                <SpaceMan />
                <div className="mt-5 mb-5 ml-1"><Title title="Charts" /></div>
                <div className="bg-[#292F32] rounded-xl p-3">
                    <Chart />
                    <div className="mt-3">
                        <Links data={['Details', 'Threads', 'Transactions', 'Holders']} textStyle="px-2 text-sm xl:px-4 " setActive={setActive} active={active} />
                    </div>
                </div>
            </div>
            <div className="mt-5 xl:hidden">
                <RightSidebarB />
            </div>
        </div>
    )
}
