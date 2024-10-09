import React from 'react'

export default function CommentCard() {
    return (
        <div className="flex gap-3 lg:gap-5">
            <div className="shrink-0">
                <img src="logo1.png" className='h-[32px] w-[32px] ' alt="" />
            </div>
            <div className="flex flex-col gap-2 lg:gap-4">
                <div className="flex items-center justify-between lg:justify-start gap-4">
                    <b className='font-bold text-sm lg:text-base text-prim'>FUasdf</b>
                    <p className='hidden lg:block text-[#838A91]'>20 Mar 2021 at 05:15 PM</p>
                    <div className="flex items-center gap-1">
                        <img src="like.png" className='h-3 lg:h-4' alt="" />
                        <p className='font-semibold text-13 lg:text-sm text-[#F4245E]'>31</p>
                    </div>
                </div>
                <div className="">
                    <p className='text-white bg-[#292F32] p-3 rounded-lg'>This is one of the best project i’ve ever come across. This is the deal guys.</p>
                    <p className='text-[9px] mt-1 lg:hidden text-[#838A91]'>20 Mar 2021 at 05:15 PM</p>
                </div>
                <p className='px-5 py-2 text-xs lg:text-15 rounded-full w-fit bg-[#0000000F] text-prim'>Comment</p>
            </div>

        </div>
    )
}
