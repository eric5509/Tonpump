"use client";
import { filter } from "@/redux/reducers/sidebarActions";
import { useAppDispatch, useAppSelector } from "@/redux/store/hook";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

type Props = {
  data: string[];
  active: number;
  page?: string;
  textStyle?: string;
  style?: string;
  setActive: Dispatch<SetStateAction<number>>;
};

export default function Links2({
  data,
  page,
  setActive,
  style,
  textStyle,
  active,
}: Props) {

  const [state, setState] = useState(page);

  useEffect(() => {
    setState(page);
    console.log(page)
  }, [page, state])

  return (
    <div className={`flex bg-gray-800 overflow-x-auto rounded-t-md ${style} h-12`}>
      {data?.map((el, key) => (
        <div onClick={() => setActive(key)} key={key} className={` text-nowrap cursor-pointer active:scale-90 px-2 text-10 lg:text-11 duration-300 h-full grid place-content-center border-b-2 ${key === active ? 'text-prim border-prim font-semibold' : 'border-transparent text-gray-50'}  `}>
          <p className={`${textStyle}`}>{el}</p>
        </div>
      ))}
    </div>
  );
}
