import type { NextPage } from 'next'
import Link from 'next/link'
import { DividerIcon } from 'icons'

const Home: NextPage = () => {
  //Need to center the height at some point I think
  return (
    <div className="m-auto w-max p-14 mt-24 bg-white flex gap-x-6">
      {/* Left bio column */}
      <div className="flex flex-col">
        <h1 className="text-[#878787] text-4xl font-bold uppercase leading-[3rem] tracking-wider">
          Tripp Lybrand
        </h1>
        <div className="flex flex-col gap-y-1.5">
          <span className="text-4xl font-bold uppercase tracking-wider">
            Writer
          </span>
          <span className="text-4xl font-bold uppercase tracking-wider">
            Painter
          </span>
          <span className="text-4xl font-bold uppercase tracking-wider">
            Designer
          </span>
          <span className="text-4xl font-bold uppercase tracking-wider">
            Developer
          </span>
        </div>
      </div>
      {/* Middle divider*/}
      <DividerIcon className="fill-[#878787]" />
      {/* Right pages column */}
      <div className="flex flex-col">
        <h2 className="text-[#878787] text-4xl font-bold uppercase leading-[3rem] tracking-wider">
          Sections
        </h2>
        <div className="flex flex-col gap-y-6">
          <Link href="/scroll-poems">
            <a className="text-4xl font-light tracking-wider underline hover:text-matisse-red-200">
              Scroll poems
            </a>
          </Link>
          <Link href="/goose">
            <a className="text-4xl font-light tracking-wider underline hover:text-matisse-red-200">
              Goose (Bulleit)
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home
