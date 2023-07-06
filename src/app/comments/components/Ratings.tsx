import { Star } from "lucide-react"

interface RatingsProps {
  stars: number
}

export function Ratings({ stars }: RatingsProps) {


  return (
    <div className="flex">
      <Star
        size={18}
        className={stars >= 1 ? "text-amber-500" : "text-zinc-800"}
        fill={stars >= 1 ? "#F59E0B " : "transparent"}
      />
      <Star
        size={18}
        className={stars >= 2 ? "text-amber-500" : "text-zinc-800"}
        fill={stars >= 2 ? "#F59E0B " : "transparent"}
      />
      <Star
        size={18}
        className={stars >= 3 ? "text-amber-500" : "text-zinc-800"}
        fill={stars >= 3 ? "#F59E0B " : "transparent"}
      />
      <Star
        size={18}
        className={stars >= 4 ? "text-amber-500" : "text-zinc-800"}
        fill={stars >= 4 ? "#F59E0B " : "transparent"}
      />
      <Star
        size={18}
        className={stars >= 5 ? "text-amber-500" : "text-zinc-800"}
        fill={stars >= 5 ? "#F59E0B " : "transparent"}
      />
    </div>

  )
}