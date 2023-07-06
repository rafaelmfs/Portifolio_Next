import Image from 'next/image'
import Link from 'next/link'
import jobs from '../assets/jobs.png'

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-start justify-center w-1/2 gap-8 py-20 px-28">
        <div className="flex flex-col items-start gap-4 uppercase">
          <h1 className="text-4xl font-bold">Hi there!</h1>
          <strong className="font-bold text-7xl">I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600">Benjamin</span></strong>
          <span className="px-2 py-1 font-bold bg-amber-600">Graphic designer / photographer</span>
        </div>
        <p className="max-w-[90%] text-justify">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc rhoncus dui a tellus consectetur ultricies. In risus eros, ornare in auctor eget, facilisis quis nibh. Donec gravida diam nec ligula sagittis, non venenatis odio mattis. Quisque vulputate mi sit amet neque vulputate tristique sed nec felis. Integer eu velit id enim mattis elementum. Cras eget fringilla enim. Duis sit amet malesuada enim. Ut tincidunt ex ut suscipit blandit. Nulla malesuada libero leo, id consequat ipsum sodales eu. Ut magna ante, imperdiet ac ex eu, tincidunt pulvinar justo.
        </p>

        <Link href={'/about'}><button className="px-6 py-2 text-lg font-bold text-white uppercase rounded-[50px] bg-amber-600">More about me</button></Link>

      </div>
      <div className="relative w-1/2 h-full bg-zinc-500">
        <Image
          src={jobs.src}
          alt='person'
          width={1080}
          height={720}
          className='absolute bottom-0 object-cover contrast-125 brightness-90'
        />
      </div>
    </>
  )
}
