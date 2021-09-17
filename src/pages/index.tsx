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
          <BioElement text="Writer" />
          <BioElement text="Painter" />
          <BioElement text="Designer" />
          <BioElement text="Developer" />
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
          <SectionLink text="Scroll poems" href="/scroll-poems" />
          <SectionLink text="Goose (Bulleit)" href="/goose" />
        </div>
      </div>
    </div>
  )
}

type BioElementProps = {
  text: String
}
const BioElement = ({ text }: BioElementProps) => {
  return (
    <span className="text-4xl font-bold uppercase tracking-wider text-black">
      {text}
    </span>
  )
}

type SectionLinkProps = {
  text: string
  href: string
}
const SectionLink = ({ text, href }: SectionLinkProps) => {
  return (
    <Link href={href}>
      <a className="text-4xl font-light tracking-wider underline text-black hover:text-matisse-red-200">
        {text}
      </a>
    </Link>
  )
}

export default Home
