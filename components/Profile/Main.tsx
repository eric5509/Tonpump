import Title from "../General/Title";
import RightSidebarA from "../Layout/RightSidebarA";
import FollowCard from "./FollowCard";

export default function Main() {
    return (
        <div className=" overflow-y-auto h-full w-full">
            <div className="p-3">
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
