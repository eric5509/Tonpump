export default function TransactionsTable() {
  const tableHeaders = ['S/N', 'Account', 'Transaction type', 'Date', 'Amount(TON)', 'Amount(SPACE)']
  const data = [
    ['FUasdf', 'Buy', '25min', 4, 200],
    ['GDaxds', 'Sell', '1fr', 6.50, 670],
    ['APpoee', 'Buy', '17hr', 0.80, 52],
    ['ZXswqq', 'Sell', '22hr', 10, 1420],
  ]
  return (
    <div className="w-full overflow-x-auto relative ">
      <div className="grid min-w-[800px] h-12 text-xs bg-[#3C4141] grid-cols-[80px_1fr_1fr_.5fr_1fr_1fr] gap-5">
        {tableHeaders.map((el, index) => (
          <div key={index} className={`h-full flex items-center text-white ${index === 0 && 'pl-6'}`}>{el}</div>
        ))}
      </div>
      <div className="flex min-w-[800px] flex-col rounded-b-2xl overflow-hidden w-full">
        {data.map((ell, key) => (
          <div key={key} className={`grid h-12 border-b-2 relative text-xs ${key === (data.length - 1) ? "border-transparent" :" border-[#15181A]"} bg-[#292F32] grid-cols-[80px_1fr_1fr_.5fr_1fr_1fr] gap-5 `}>
            {[key+1, ...ell].map((elem, keyy) => (
              <>
                {keyy === 1 ?
                  <div key={keyy} className="flex items-center relative gap-2">
                    <img src="logo1.png" alt="" />
                    <div className="h-full flex items-center font-semibold text-white">
                      {elem}
                    </div>
                  </div>
                  :
                  <div key={keyy} className={`h-full flex items-center text-white ${keyy === 0 && 'pl-6'}`}>
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
