import { HTMLAttributes, ReactNode } from "react";

interface PageContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}

export function PageContainer({ children, className = "", ...props }: PageContainerProps) {
  return (
    <div
      className={`items-center justify-center flex-1 w-full h-full py-10 pl-20 pr-28 bg-zinc-300 ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}