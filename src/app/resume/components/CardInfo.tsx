
interface CardInfoProps {
  title: string;
  category: string;
  description: string
}

export function CardInfo({ title, category, description }: CardInfoProps) {
  return (
    <div className="flex flex-col gap-2">
      <span className="flex items-center justify-center max-w-[60%] flex-none p-2 overflow-hidden font-bold uppercase whitespace-nowrap bg-amber-500 text-ellipsis text-zinc-50 drop-shadow-sm ">{category}</span>
      <span className="text-lg font-bold capitalize text-zinc-950">{title}</span>
      <p className="text-sm leading-relaxed text-justify">{description}</p>
    </div>
  )
}