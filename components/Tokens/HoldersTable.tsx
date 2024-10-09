export default function HoldersTable() {
    const tableHeaders = ['S/N', 'Holders', 'Percentage']
    const data = [
        ['FUasdf', 82],
        ['GDaxds', 8],
        ['APjoee', 6.5],
        ['ZXswqq', 3.5]
    ]
    return (
        <div className="w-full overflow-x-auto relative">
            <div className="grid  min-w-[500px] h-12 text-xs bg-[#3C4141] grid-cols-[80px_1fr_1fr_2.5fr] gap-5">
                {tableHeaders.map((el, index) => (
                    <div key={index} className={`h-full flex items-center text-white ${index === 0 && 'pl-6'}`}>{el}</div>
                ))}
            </div>
            <div className="flex min-w-[500px] flex-col rounded-b-2xl overflow-hidden w-full">
                {data.map((ell, key) => (
                    <div key={key} className={`grid h-12 border-b-2 relative text-xs ${key === (data.length - 1) ? "border-transparent" : " border-[#15181A]"} bg-[#292F32] grid-cols-[80px_1fr_1fr_2.5fr] gap-5 `}>
                        {[key + 1, ...ell].map((elem, keyy) => (
                            <>
                                {keyy === 1 ?
                                    <div key={key} className="flex items-center relative gap-2">
                                        <img src="logo1.png" alt="" />
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
