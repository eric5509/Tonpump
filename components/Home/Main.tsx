'use client'
import { useState } from "react";
import Links from "../General/Links";
import Title from "../General/Title";
import DisplayPostCards from "./DisplayPostCards";
import RightSidebarA from "../Layout/RightSidebarA";

export default function Main() {
  const [active, setActive] = useState(0)
  return (
    <div className="overflow-y-auto p-2 lg:p-3 xl:p-4 rounded-xl h-full w-full">
      <div className="xl:p-0">
        <div className="flex justify-between">
          <div className="mt-1 ml-1">
            <Title title="Token" height="50px" parentStyle=""/>
          </div>
          <Links height="50px" data={['Trending', 'Following', 'New Project']} textStyle="text-xs xl:text-13 px-3 xl:px-5" active={active} setActive={setActive} />
        </div>
        <div className="mt-7">
          <DisplayPostCards />
        </div>
      </div>
      <div className="mt-5 xl:hidden">
        <RightSidebarA />
      </div>
    </div>
  )
}
