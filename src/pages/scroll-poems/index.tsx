import { NextPage } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import { useWindowWidth } from '@helpers/useWindowWidth'
import HomeLink from '@components/HomeLink'

const Poems: NextPage = () => {
  const width = useWindowWidth()
  return (
    <>
      <Head>
        <title>Scroll Poems</title>
        <meta charSet="utf-8"></meta>
        <meta
          name="description"
          content="Experiments with text, visuals, gesture, and motion."
        ></meta>
        <meta property="og:title" content="Scroll Poems" key="ogtitle"></meta>
        <meta
          property="og:description"
          content="Experiments with text, visuals, gesture, and motion."
          key="ogdesc"
        />
        <meta
          property="og:image"
          content="https://website-tripplybrand.vercel.app/Steam_Tea_Still.jpg"
          key="ogimage"
        ></meta>
        <meta name="twitter:card" content="summary_large_image"></meta>
      </Head>
      <HomeLink />
      <main className="my-16 flex flex-col space-y-2.5 sm:space-y-3 md:space-y-4">
        <IntroSection title="Scroll Poems">
          <p>These are experiments with text, visuals, gesture, and motion.</p>
          <p>
            While the layering of mediums can bring fresh meaning, the text
            itself remains primary, and so the experiments are grouped by poet.
            Please go and read more of their work.
          </p>
        </IntroSection>

        <div
          className="m-auto w-9/12 max-w-4xl 
        px-8 sm:px-10 md:px-14 py-4 sm:py-5 md:py-7
        bg-white flex flex-col space-y-5 sm:space-y-7 md:space-y-9"
        >
          <PoetSection
            name="Michael Dechane"
            bio="A former carpenter, videographer, and speech writer. A native of
              Odessa, Florida, he currently resides in Zürich, Switzerland. "
            link={
              <a
                href="https://www.instagram.com/wordtender/"
                target="_blank"
                rel="noreferrer"
                className="underline text-black hover:text-matisse-red-200
                focus:outline-none focus-visible:ring-1 sm:focus-visible:ring-2 focus-visible:ring-matisse-red-200 focus-visible:ring-opacity-60"
              >
                wordtender
              </a>
            }
          >
            <PoemRow
              width={width}
              src="/Jake's_Parade_Triangle.png"
              alt="Campfire with sparks."
            >
              <PoemLink href="/scroll-poems/jakes-parade">
                Jake's Parade
              </PoemLink>
            </PoemRow>

            <PoemRow
              width={width}
              src="/Lapsang_Souchong_Triangle.png"
              alt="Metal horse figurine on book beside a teacup."
            >
              <PoemLink href="/scroll-poems/lapsang-souchong">
                Lapsang Souchong
              </PoemLink>
            </PoemRow>
          </PoetSection>

          <PoetSection
            name="Julie Sumner"
            bio="Poet, wife, loves unpopular birds and odd plants. "
            link={
              <a
                href="https://twitter.com/windowonwords"
                target="_blank"
                rel="noreferrer"
                className="underline text-black hover:text-matisse-red-200
              focus:outline-none focus-visible:ring-1 sm:focus-visible:ring-2 focus-visible:ring-matisse-red-200 focus-visible:ring-opacity-60"
              >
                windowonwords
              </a>
            }
          >
            <PoemRow
              width={width}
              src="/Corrective_Lenses_Triangle.png"
              alt="View of mountain range on Madeira."
            >
              <PoemLink href="/scroll-poems/corrective-lenses">
                Corrective Lenses
              </PoemLink>
            </PoemRow>
          </PoetSection>
        </div>
      </main>
    </>
  )
}

type IntroSectionProps = {
  title: string
  children: React.ReactNode
}
const IntroSection = ({ title, children }: IntroSectionProps) => {
  return (
    <div
      className="m-auto w-9/12 max-w-4xl 
    px-8 sm:px-10 md:px-14 py-4 sm:py-5 md:py-7
    bg-white flex flex-col space-y-2 sm:space-y-4 md:space-y-6"
    >
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-wider text-black">
        {title}
      </h1>
      <span
        className="text-sm sm:text-base md:text-lg font-light tracking-wider text-black 
      flex flex-col space-y-2 sm:space-y-3"
      >
        {children}
      </span>
    </div>
  )
}

type PoetSectionProps = {
  name: string
  bio: string
  children: React.ReactNode
  link?: React.ReactNode
}
const PoetSection = ({ name, bio, children, link }: PoetSectionProps) => {
  return (
    <div className="flex flex-col space-y-2 sm:space-y-3 md:space-y-4">
      <div className="flex flex-col space-y-0.5 sm:space-y-1 md:space-y-2">
        <h2 className=" text-lg sm:text-xl md:text-2xl font-semibold tracking-wider text-black">
          {name}
        </h2>
        <span className="text-sm sm:text-base md:text-lg font-light tracking-wider text-black">
          {bio}
          {link}
        </span>
      </div>
      <ul className="flex flex-col space-y-2">{children}</ul>
    </div>
  )
}

type PoemRowProps = {
  width: number
  src: string
  alt: string
  children: React.ReactNode
}
const PoemRow = ({ width, src, alt, children }: PoemRowProps) => {
  return (
    <div className="flex space-x-3 flex-wrap">
      {width < 475 ? null : (
        <Image src={src} alt={alt} width={42} height={32} layout="fixed" />
      )}
      {children}
    </div>
  )
}

type PoemLinkProps = {
  href: string
  children: React.ReactNode
}
const PoemLink = ({ href, children }: PoemLinkProps) => {
  return (
    <li>
      <Link href={href}>
        <a
          className="text-lg sm:text-xl md:text-2xl font-light tracking-wider underline 
      text-black hover:text-matisse-red-200
      focus:outline-none focus-visible:ring-1 sm:focus-visible:ring-2 focus-visible:ring-matisse-red-200 focus-visible:ring-offset-2 focus-visible:ring-opacity-60"
        >
          {children}
        </a>
      </Link>
    </li>
  )
}

export default Poems
