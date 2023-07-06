import { LiHTMLAttributes, ReactNode } from "react";

interface FilterItem extends LiHTMLAttributes<HTMLLIElement> {
  children: ReactNode;
  active: boolean;
}

export function FilterItem({ children, active, ...props }: FilterItem) {
  return (
    <li
      data-active={active}
      className="text-xl font-bold uppercase cursor-pointer hover:text-zinc-50 hover:drop-shadow-md data-[active='true']:text-zinc-50 data-[active='true']:drop-shadow-md"
      {...props}
    >
      {children}
    </li>
  )
}