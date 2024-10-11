'use client'
import { useAppSelector } from '@/redux/store/hook'
import PostCard from './PostCard'

export default function DisplayPostCards() {

    return (
    <div className={`grid duration-300 grid-cols-1 sm:grid-cols-2 3xl:grid-cols-3 4xl:grid-cols-4 5xl:grid-cols-5 gap-4`}>
            {[1, 2, 3, 4, 5].map((el, key) => (
                <div key={key} className="">
                    <PostCard />
                </div>
            ))}
        </div>
    )
}
