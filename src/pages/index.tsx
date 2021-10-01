import type { NextPage } from 'next'
import Head from 'next/head'
import { useWindowWidth } from '@helpers/useWindowWidth'
import Link from 'next/link'
import { DividerIcon, DividerHorizontalIcon } from 'icons'

const Home: NextPage = () => {
  const width = useWindowWidth()

  return (
    <>
      <Head>
        <title>Tripp Lybrand</title>
        <meta charSet="utf-8"></meta>
        <meta
          name="description"
          content="Writings, paintings, and web experiments."
        ></meta>
        <meta property="og:title" content="Tripp Lybrand" key="ogtitle"></meta>
        <meta
          property="og:description"
          content="Writings, paintings, and web experiments."
          key="ogdesc"
        />
        <meta
          property="og:image"
          content="https://tripplybrand.com/My_Mother_Is_A_Fish_Meta.jpg"
          key="ogimage"
        ></meta>
        <meta name="twitter:card" content="summary_large_image"></meta>
      </Head>
      <main className="m-auto w-max p-14 mt-24 bg-white flex flex-col xs:flex-row gap-[1.125rem] sm:gap-6">
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
        {width < 475 ? (
          <DividerHorizontalIcon className="fill-[#878787]" />
        ) : (
          <DividerIcon className="fill-[#878787] w-0.5 h-[9.75rem] sm:h-[12rem] md:h-[17rem]" />
        )}
        {/* Right pages column */}
        <div className="flex flex-col">
          <h2>
            <HeaderText text="Sections" />
          </h2>
          <ul className="flex flex-col gap-y-1 sm:gap-y-2 md:gap-y-4">
            <SectionLink text="Writings" href="/writings" />
            <SectionLink text="Paintings" href="/paintings" />
            <SectionLink text="Multimedia" href="/multimedia" />
            <SectionLink text="Contact" href="/contact" />
          </ul>
        </div>
        {/*Add contact*/}
      </main>
    </>
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
    <li>
      <Link href={href}>
        <a
          className="text-lg sm:text-2xl md:text-4xl font-light tracking-wider underline 
      text-black hover:text-matisse-red-200
      focus:outline-none focus-visible:ring-1 sm:focus-visible:ring-2 focus-visible:ring-matisse-red-200 focus-visible:ring-offset-2 focus-visible:ring-opacity-60"
        >
          {text}
        </a>
      </Link>
    </li>
  )
}

export default Home
