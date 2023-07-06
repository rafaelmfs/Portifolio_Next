import Image from "next/image";
import { usePathname } from "next/navigation";
import jobs from '../assets/jobs.png';
import { NavbarItem } from "./NavbarItem";
import { Separator } from "./Separator";


export function Navbar() {
  const path = usePathname()

  return (
    <div className="mr-auto h-full w-[360px] bg-amber-600 flex flex-col overflow-hidden gap-20 items-center">
      <div className="bg-zinc-500">
        <Image
          src={jobs}
          width={360}
          height={360}
          alt="jobs"
        />
      </div>
      <div className="flex flex-col items-center w-full gap-1">
        <span className="block w-3 rounded-full bg-black/80 aspect-square" />
        <Separator />
        <NavbarItem
          active={false}
          link="/"
          text="Home"
        />

        <Separator />
        <NavbarItem
          active={path === "/about"}
          link="/about"
          text="About-me"
        />

        <Separator />
        <NavbarItem
          active={path === "/resume"}
          link="/resume"
          text="Resume"

        />

        <Separator />
        <NavbarItem
          active={path.includes("/portifolio")}
          link="/portifolio"
          text="Portifolio"
        />

        <Separator />
        <NavbarItem
          active={path === "/comments"}
          link="/comments"
          text="Testimonials"

        />

        <Separator />
        <NavbarItem
          active={path === "/contacts"}
          link="/contacts"
          text="Contacts"
        />

        <Separator />
        <span className="block w-3 rounded-full bg-black/80 aspect-square" />
      </div>
    </div>
  )
}