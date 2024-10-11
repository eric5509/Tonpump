'use client'
import { useState } from "react";
import Links from "../General/Links";
import Title from "../General/Title";
import Chart from "./Chart";
import SpaceMan from "./SpaceMan";
import CommentList from "./CommentList";
import { useJettonContract } from "@/hooks/useJettonContract2";

export default function Main() {
    const [active, setActive] = useState(0);
    const {balance, jettonWalletAddress, mint} = useJettonContract()
    const jetFunction = () => {
        console.log(balance, jettonWalletAddress)
    }
    
    
    return (
        <div className="xl:p-3 overflow-y-auto rounded-xl h-full w-full">
            <div className="xl:p-0">
                <button className="px-6 py-3 bg-prim text-base ring-mainDark" onClick={mint}>Jetton </button>
                <div className="mb-4 ml-2"><Title title="Token" /></div>
                <SpaceMan />
                <div className="mt-5 mb-5 ml-1"><Title title="Charts" /></div>
                <div className="bg-[#292F32] rounded-xl p-3">
                    <Chart />
                    <div className="mt-3">
                        <Links data={['Details', 'Threads', 'Transactions', 'Holders']} textStyle="px-2 text-sm xl:px-4 " setActive={setActive} active={active} />
                    </div>
                </div>
                <CommentList />
            </div>

        </div>
    )
}
