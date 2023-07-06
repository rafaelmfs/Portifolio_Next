import { formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import Image from "next/image";
import { Ratings } from "./Ratings";

interface CommentCardProps {
  avatarURL?: string;
  name: string;
  subtitle: string;
  description: string;
  ratings: number;
  createdAt: Date;
}

export function CommentCard({
  createdAt,
  description,
  name,
  ratings,
  subtitle,
  avatarURL
}: CommentCardProps) {
  const datePrefix = formatDistanceToNow(createdAt, {
    addSuffix: true,
    locale: ptBR
  })

  return (
    <div className="flex flex-col gap-6 p-6 bg-zinc-950 text-zinc-300">
      <div className="flex gap-4">
        <Image
          className="object-cover w-1/3 h-auto rounded-xl"
          src={avatarURL ?? ""}
          alt=""
          width={80}
          height={80}
          quality={100}
        />
        <div className="flex flex-col gap-1">
          <strong className="text-3xl capitalize text-amber-600">{name}</strong>
          <span className="mt-2 font-bold">{subtitle}</span>
          <p title={description} className="max-w-[90%] overflow-hidden text-sm text-justify text-zinc-500 leading text-ellipsis">
            {description.length > 120 ? `${description.slice(0, 120)}...` : description}
          </p>
        </div>
      </div>
      <div className="flex items-end justify-between">
        <Ratings stars={ratings} />
        <span>{datePrefix}</span>
      </div>
    </div>
  )
}