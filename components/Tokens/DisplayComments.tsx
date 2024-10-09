import CommentCard from "./CommentCard";

export default function DisplayComments() {
  return (
    <div className="flex flex-col gap-3">
      {[1,2,3,4,5].map((el, key) => (
        <div key={key} className="">
          <CommentCard />
        </div>
      ))}
    </div>
  )
}
