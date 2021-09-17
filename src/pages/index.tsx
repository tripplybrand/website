import type { NextPage } from 'next'
import Link from 'next/link'
import { DividerIcon } from 'icons'

const Home: NextPage = () => {
  //Need to center the height at some point I think
  return (
    <div className="m-auto w-max p-14 mt-24 bg-white flex gap-x-[1.125rem] sm:gap-x-6">
      {/* Left bio column */}
      <div className="flex flex-col">
        <h1>
          <HeaderText text="Tripp Lybrand" />
        </h1>
        <div className="flex flex-col gap-y-0.5 sm:gap-y-1 md:gap-y-1.5">
          <BioElement text="Writer" />
          <BioElement text="Painter" />
          <BioElement text="Designer" />
          <BioElement text="Developer" />
        </div>
      </div>
      {/* Middle divider*/}
      <DividerIcon className="fill-[#878787] w-0.5 h-[9.75rem] sm:h-[10.625rem] md:h-[15.875rem]" />
      {/* Right pages column */}
      <div className="flex flex-col">
        <h2>
          <HeaderText text="Sections" />
        </h2>
        <div className="flex flex-col gap-y-2 sm:gap-y-4 md:gap-y-6">
          <SectionLink text="Scroll poems" href="/scroll-poems" />
          <SectionLink text="Goose (Bulleit)" href="/goose" />
        </div>
      </div>
    </div>
  )
}

type HeaderTextProps = {
  text: String
}
const HeaderText = ({ text }: HeaderTextProps) => {
  return (
    <span className="text-[#878787] text-lg sm:text-2xl md:text-4xl font-bold uppercase leading-[1.75rem] sm:leading-9 md:leading-[3rem] tracking-wider">
      {text}
    </span>
  )
}

type BioElementProps = {
  text: String
}
const BioElement = ({ text }: BioElementProps) => {
  return (
    <span className="text-lg sm:text-2xl md:text-4xl font-bold uppercase tracking-wider text-black">
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
      <a className="text-lg sm:text-2xl md:text-4xl font-light tracking-wider underline text-black hover:text-matisse-red-200">
        {text}
      </a>
    </Link>
  )
}

export default Home
