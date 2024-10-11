import LeftSidebar from "./LeftSidebar"
import RightSidebarA from "./RightSidebarA"

type Props = {
  children: React.ReactNode
}
export default function Main({ children }: Props) {
  return (
    <div className="flex-1 overflow-y-auto grid w-full lg:grid-cols-[300px_1fr] xl:grid-cols-[325px_1fr_350px]">
    <div className=" border-r-2 h-full overflow-y-auto border-purplee">
      <LeftSidebar />
    </div>
    <div className="h-full overflow-y-auto">
      {children}
    </div>
    <div className=" border-l-2 overflow-y-auto border-purplee">
      <RightSidebarA />
    </div>
</div>
  )
}
