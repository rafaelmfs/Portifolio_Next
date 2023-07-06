import Link from "next/link";
import { ButtonHTMLAttributes, ReactNode } from "react";

interface SidebarItemProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  link: string;
  children: ReactNode;
  active: boolean;
}

export function SidebarItem({ link, children, active, ...props }: SidebarItemProps) {
  return (
    <Link href={link}>
      <button
        data-active={active}
        className="hover:text-zinc-300 hover:drop-shadow-md transition-colors data-[active='true']:drop-shadow-md data-[active='true']:text-zinc-100"
        {...props}
      >
        {children}
      </button>
    </Link>
  )
}