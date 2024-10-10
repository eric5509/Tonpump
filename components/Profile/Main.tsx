import Title from "../General/Title";
import RightSidebarA from "../Layout/RightSidebarA";
import FollowCard from "./FollowCard";

export default function Main() {
    return (
        <div className="border-purplee overflow-y-auto xl:p-2 rounded-xl lg:border-2 h-full w-full">
            <div className="p-2 xl:p-0">
                <div className="mb-5 ml-1 mt-1"><Title title="Token" /></div>
                <FollowCard />
                <div className="mt-5 ml-1"><Title title="Details" /></div>
            </div>
            <div className="mt-5 xl:hidden">
                <RightSidebarA />
            </div>
        </div>
    )
}
