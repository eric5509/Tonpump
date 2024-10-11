import Comment from "../General/Comment";
import CommentCard from "./CommentCard";

export default function CommentList() {
  const list = [1, 2, 3, 4]
  return (
    <div className="bg-slate-950 flex flex-col gap-[4px] rounded-b-2xl p-3  relative">
      {list.map((el, key) => (
        <div key={key} className="">
          <Comment track={key} total={list.length}/>
        </div>
      ))}
    </div>
  )
}
