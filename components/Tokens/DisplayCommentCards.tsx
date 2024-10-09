import CommentCard from "./CommentCard";

export default function DisplayCommentCards() {
  return (
    <div className="grid lg:grid-cols-[1fr_200px]  border rounded-b-2xl border-prim relative">
      <div className="flex flex-col p-4 gap-4">
          <p className="p-3 rounded-xl absolute top-3 hidden lg:block right-3 bg-prim text-secondary font-semibold">Post a Comment</p>
          <p className="px-2 py-3 grid place-content-center font-bold text-xs rounded-md lg:hidden right-3 bg-prim text-secondary ">Post a Comment</p>
        {[1, 2, 3, 4].map((el, key) => (
          <div key={key} className="">
            <CommentCard />
          </div>
        ))}
      </div>
    </div>
  )
}
