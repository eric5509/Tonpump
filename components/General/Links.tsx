"use client";
import { filter } from "@/redux/reducers/sidebarActions";
import { useAppDispatch, useAppSelector } from "@/redux/store/hook";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

type Props = {
  data: string[];
  active: number;
  page?: string;
  style?: string;
  fontSize?: string;
  paddingX?: string
  setActive: Dispatch<SetStateAction<number>>;
};

export default function Links({
  data,
  page,
  paddingX,
  setActive,
  style,
  active,
  fontSize,
}: Props) {

  const [state, setState] = useState(page);

  useEffect(() => {
    setState(page);
    console.log(page)
  }, [page, state])

  return (
    <div className={`flex bg-gray-800 rounded-md rounded-b-none overflow-x-auto ${style} h-12`}>
      {data?.map((el, key) => (
        <div onClick={() => setActive(key)} className={` text-nowrap cursor-pointer active:scale-90 text-13 lg:text-xs duration-300 h-full grid place-content-center ${paddingX} border-b-2 ${key === active ? 'text-prim border-prim font-semibold' : 'border-transparent text-gray-50'}  `}>
          <p className={`${fontSize}`}>{el}</p>
        </div>
      ))}
    </div>
  );
}
