import { Home, MessagesSquare, Newspaper, Send, User, Wallpaper } from "lucide-react";
import { usePathname } from "next/navigation";
import { Separator } from "./Separator";
import { SidebarItem } from "./SidebarItem";

export function Sidebar() {

  const path = usePathname()

  return (
    <aside className="absolute px-2 py-4 right-8 rounded-[50px] bg-amber-600 flex flex-col gap-2 text-zinc-950 transition-opacity">

      <SidebarItem
        active={path === '/'}
        link="/"
        title="Home"
      >
        <Home strokeWidth={'2px'} size={32} />
      </SidebarItem>
      <Separator />

      <SidebarItem
        active={path === '/about'}
        link="/about"
        title="About"
      >
        <User strokeWidth={'2px'} size={32} />
      </SidebarItem>
      <Separator />

      <SidebarItem
        active={path === '/resume'}
        link="/resume"
        title="Resume"
      >
        <Newspaper strokeWidth={'2px'} size={32} />
      </SidebarItem>
      <Separator />

      <SidebarItem
        active={path.includes('/portifolio')}
        link="/portifolio"
        title="portifolio"
      >
        <Wallpaper strokeWidth={'2px'} size={32} />
      </SidebarItem>
      <Separator />

      <SidebarItem
        active={path === '/comments'}
        link="/comments"
        title="Comments"
      >
        <MessagesSquare strokeWidth={'2px'} size={32} />
      </SidebarItem>
      <Separator />

      <SidebarItem
        active={path === '/contacts'}
        link="/contacts"
        title="Contacts"
      >
        <Send strokeWidth={'2px'} size={32} />
      </SidebarItem>
    </aside>
  )
}