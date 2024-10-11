import React from 'react'
import { BiComment, BiSolidComment } from 'react-icons/bi'
import { BsBookmark, BsCheck, BsCheck2, BsCheckCircleFill, BsHeart } from 'react-icons/bs'

type Props = {
    track: number
    total: number
}

export default function Comment({ track, total }: Props) {
    return (
        <div>
            <div
                className="text-white grid grid-cols-[auto_1fr]  w-full rounded-lg gap-3 text-xs"
            >
                <div className="h-full flex items-center flex-col gap-2">
                    <div className="h-7 w-7 rounded-full border-2"></div>
                    <div className={`flex-1 border border-dashed ${track + 1 === total ? 'border-transparent' : 'border-prim'}`}></div>
                </div>
                <div className="pb-4">
                    <p className="font-semibold mb-2.5 flex items-center gap-1 ">
                        Venish Mali
                        <div className="h-1.5 w-1.5 mx-2 bg-prim rounded-full "></div>
                        <span className="text-11 text-gray-200 font-light">Oct 8</span>
                    </p>
                    <div className="text-gray-200 text-13">
                        <p>Hello</p>
                        <p>I am in tech</p>
                        <p>I would love to connect with tech people</p>
                    </div>
                    <div className="flex gap-5 items-center justify-between mt-3">
                        <p>
                            <BiComment className='inline cursor-pointer duration-300 text-base' />
                            <span className="ml-2">2</span>
                        </p>
                        <p>
                            <BsHeart className='inline cursor-pointer hover:text-red-500 duration-300 text-base' />
                            <span className="ml-2">2</span>
                        </p>
                        <p>
                            <BsBookmark className='inline cursor-pointer hover:text-blue-500 duration-300 text-base' />
                            <span className="ml-2">4</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
