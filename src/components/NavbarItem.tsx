import Link from "next/link";

interface NavbarItemProps {
  active: boolean;
  text: string;
  link: string;
}

export function NavbarItem({ active, text, link }: NavbarItemProps) {
  return (
    <Link href={link}>
      <strong
        data-active={active}
        className="uppercase text-zinc-900 data-[active='true']:text-zinc-100 data-[active='true']:drop-shadow-md hover:text-zinc-300 hover:drop-shadow-md transition-colors"
      >
        {text}
      </strong>
    </Link>
  )
}