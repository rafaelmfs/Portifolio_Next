import { Aperture, Edit3Icon, Wallpaper } from "lucide-react";
import { PageContainer } from "../../components/PageContainer";
import { PageTitle } from "../../components/PageTitle";

export default function About() {
  return (
    <PageContainer>
      <PageTitle text="About me" />

      <div className="flex flex-col gap-6 pt-4 pl-4 mt-4">
        <div className="flex items-baseline gap-1 text-2xl">
          <span>I&apos;m <b>Steve Jobs,</b></span>
          <span className="text-3xl font-thin">Graphic Designer / Photographer</span>
        </div>

        <p className="text-justify">
          As a visionary and innovative leader, I strived to transform industries and create revolutionary products. My passion for technology and design allowed me to envision and bring to life products that would change the way people interacted with technology. However, I also faced challenges and setbacks along the way. Through perseverance and determination, I learned valuable lessons and grew as a leader. My authenticity and commitment to excellence were fundamental in building trust and inspiring others to push boundaries. Ultimately, my journey as Steve Jobs was not just about success, but also about personal growth and leaving a lasting impact on the world.
        </p>

        <div className="grid grid-cols-3 mt-10">
          <div className="grid grid-cols-2 col-span-2 py-8 border border-dotted bg-zinc-950 border-amber-500/50">
            <div className="grid grid-rows-2 px-8 border-r border-dashed border-r-amber-600">
              <div className="flex flex-col items-center justify-center gap-2 px-4 py-10 border-b border-dashed border-b-amber-600">
                <span className="text-6xl font-bold text-amber-500">15+</span>
                <span className="text-sm uppercase text-zinc-200">Years experience</span>
              </div>
              <div className="flex flex-col items-center justify-center gap-2 px-4 py-10">
                <span className="text-6xl font-bold text-amber-500">200+</span>
                <span className="text-sm uppercase text-zinc-200">Happy Clients</span>
              </div>
            </div>
            <div className="grid grid-rows-2 px-8">
              <div className="flex flex-col items-center justify-center gap-2 px-4 py-10 border-b border-dashed border-b-amber-600">
                <span className="text-6xl font-bold text-amber-500">350+</span>
                <span className="text-sm uppercase text-zinc-200">Projects Done</span>
              </div>
              <div className="flex flex-col items-center justify-center gap-2 px-4 py-10">
                <span className="text-6xl font-bold text-amber-500">45K</span>
                <span className="text-sm uppercase text-zinc-200">Followers</span>
              </div>
            </div>

          </div>
          <div className="py-4 pl-10 text-zinc-900">
            <strong className="text-3xl">What I Do ? </strong>
            <div className="flex flex-col gap-8 mt-4">
              <div className="grid items-center grid-cols-3">
                <Edit3Icon size={64} strokeWidth={1} />
                <div className="col-span-2">
                  <strong className="uppercase">Print Design</strong>
                  <p className="text-sm text-justify">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt,

                  </p>
                </div>
              </div>

              <div className="grid items-center grid-cols-3">
                <Wallpaper size={64} strokeWidth={1} />
                <div className="col-span-2">
                  <strong className="uppercase">Web Design</strong>
                  <p className="text-sm text-justify">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt,

                  </p>
                </div>
              </div>

              <div className="grid items-center grid-cols-3">
                <Aperture size={64} strokeWidth={1} />
                <div className="col-span-2">
                  <strong className="uppercase">Photography</strong>
                  <p className="text-sm text-justify">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt,

                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </PageContainer>
  )
}