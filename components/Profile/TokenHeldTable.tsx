export default function TokenHeldTable() {
  const tableHeaders = ['S/N', 'Token', 'Creator type', 'Amount',]
  const data = [
    ['Space Man($SPACE)', 'FUasdf', 4],
    ['Space Man($SPACE)', 'FUasdf', 6.5],
    ['Space Man($SPACE)', 'FUasdf', 0.8],
    ['Space Man($SPACE)', 'FUasdf', 10],
  ]
  return (
    <div className="w-full overflow-x-auto text-11 2xl:text-xs  relative">
      <div className="grid min-w-[800px] h-12 bg-[#3C4141] grid-cols-[80px_1.75fr_1fr_1fr_1fr] gap-5">
        {tableHeaders.map((el, index) => (
          <div key={index} className={`h-full flex items-center text-white ${index === 0 && 'pl-6'}`}>{el}</div>
        ))}
      </div>
      <div className="flex min-w-[800px] flex-col rounded-b-2xl overflow-hidden w-full">
        {data.map((ell, key) => (
          <div key={key} className={`grid h-12 border-b-2 relative ${key === (data.length - 1) ? "border-transparent" :" border-[#15181A]"} bg-[#292F32] grid-cols-[80px_1.75fr_1fr_1fr_1fr] gap-5 `}>
            <span className="absolute top-1/2 -translate-y-1/2 right-3 px-4 py-2 bg-[#475861] rounded-full text-prim">View</span>

            {[key+1, ...ell].map((elem, keyy) => (
              <>
                {keyy === 1 &&
                  <div key={keyy} className="flex items-center relative gap-2">
                    <img src="container.png" alt="" />
                    <div className="h-full flex items-center font-semibold text-white">
                      {elem}
                    </div>
                  </div>}
                {keyy === 2 &&
                  <div key={keyy} className="flex items-center relative gap-2">
                    <img src="logo1.png" alt="" />
                    <div className="h-full flex items-center font-semibold text-white">
                      {elem}
                    </div>
                  </div>}
                {(keyy !== 1 && keyy !== 2) && <div key={keyy} className={`h-full flex items-center text-white ${keyy === 0 && 'pl-6'}`}>
                  {elem}
                </div>}

              </>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
