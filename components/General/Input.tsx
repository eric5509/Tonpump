type Props = {
    label: string
    placeholder?: string
    text?: string
    marginBottom?: string
    marginTop?: string
}

export default function Input({ label, placeholder, text, marginBottom, marginTop }: Props) {
    return (
        <div style={{marginBottom: `${marginBottom}`, marginTop: `${marginTop}`}} className="w-full">
            <p className="text-13 mb-[6px] text-start text-[#bdc2c7]">{label}</p>
            <div className="h-11 w-full overflow-hidden bg-[#292F32] rounded-md relative">
                <input type="text" placeholder={placeholder} className="h-full text-white placeholder:text-[#9EA3A9] bg-transparent pl-4 outline-none w-full" />
                <p className="text-[#bdc2c7] absolute text-13 pointer-events-none top-1/2 -translate-y-1/2 right-3">{text}</p>
            </div>
        </div>
    )
}
