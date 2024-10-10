export default function FollowersTable() {
    const tableHeaders = ['S/N', 'Account', 'Followers', 'Following']
    const data = [
        ['FUasdf', 34, 4],
        ['FUasdf', 26, 46],
        ['FUasdf', 32, 21],
        ['FUasdf', 78, 10],
    ]
    return (
        <div className="w-full text-11 2xl:text-xs relative">
            <div className="grid min-w-[600px] h-12 bg-[#3C4141] grid-cols-[50px_1.5fr_1fr_1fr_1fr] gap-5">
                {tableHeaders.map((el, index) => (
                    <div key={index} className={`h-full flex items-center text-white ${index === 0 && 'pl-6'}`}>{el}</div>
                ))}
            </div>
            <div className="flex min-w-[600px] xl:rounded-b-xl overflow-hidden flex-col w-full">
                {data.map((ell, key) => (
                    <div key={key} className={`grid h-12 border-b-2 relative ${key === (data.length - 1) ? "border-transparent" :" border-[#15181A]"} bg-[#292F32] grid-cols-[50px_1.5fr_1fr_1fr_1fr] gap-5 `}>
                        {[key+1, ...ell].map((elem, keyy) => (
                            <>
                                {keyy === 1 ?
                                    <div key={key} className="flex items-center relative gap-2">
                                        <img src="container.png" alt="" />
                                        <div className="h-full flex items-center font-semibold text-white">
                                            {elem}
                                        </div>
                                    </div>
                                    :
                                    <div key={key} className={`h-full flex items-center text-white ${keyy === 0 && 'pl-6'}`}>
                                        {elem}
                                    </div>

                                }
                            </>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    )
}
