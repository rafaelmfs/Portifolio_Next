interface PageTitleProps {
  text: string
}

export function PageTitle({ text }: PageTitleProps) {
  return (
    <div className="flex items-center justify-center w-full p-6 border border-dotted border-black/20">
      <h1 className="text-6xl font-bold text-center uppercase">{text}</h1>
    </div>
  )
}