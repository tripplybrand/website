import { NextPage } from 'next'
import Link from 'next/link'
import Image from 'next/image'

const Poems: NextPage = () => {
  return (
    <div className="my-16 flex flex-col space-y-4">
      <IntroSection title="Scroll Poems">
        <p>These are experiments with text, visuals, gesture, and motion.</p>
        <p>
          While the layering of mediums can bring fresh meaning, the text itself
          remains primary, and so the experiments are grouped by poet. Please go
          and read more of their worked linked in their bios.
        </p>
      </IntroSection>

      <div className="m-auto w-9/12 max-w-4xl px-14 py-7 bg-white flex flex-col space-y-9">
        <PoetSection
          name="Michael Dechane"
          bio="A former carpenter, videographer, and speech writer. A native of
              Odessa, Florida, he currently resides in Zürich, Switzerland."
        >
          <div className="flex space-x-3 flex-wrap">
            <Image
              src="/Jake's_Parade_Triangle.png"
              alt="Campfire with sparks."
              width={42}
              height={32}
              layout="fixed"
            />
            <PoemLink href="/scroll-poems/jakes-parade">Jake's Parade</PoemLink>
          </div>

          <div className="flex space-x-3 flex-wrap">
            <Image
              src="/Lapsang_Souchong_Triangle.png"
              alt="Metal horse figurine on book beside a teacup."
              width={42}
              height={32}
              layout="fixed"
            />
            <PoemLink href="/scroll-poems/lapsang-souchong">
              Lapsang Souchong
            </PoemLink>
          </div>
        </PoetSection>

        <PoetSection
          name="Julie Sumner"
          bio="Poet, wife, loves unpopular birds and odd plants. Writes at
          juliesumnerpoetry on Instagram."
        >
          <div className="flex space-x-3 flex-wrap">
            <Image
              src="/Corrective_Lenses_Triangle.png"
              alt="Wiew of mountain range on Madeira."
              width={42}
              height={32}
              layout="fixed"
            />
            <PoemLink href="/scroll-poems/corrective-lenses">
              Corrective Lenses
            </PoemLink>
          </div>
        </PoetSection>
      </div>
    </div>
  )
}

type IntroSectionProps = {
  title: string
  children: React.ReactNode
}
const IntroSection = ({ title, children }: IntroSectionProps) => {
  return (
    <div className="m-auto w-9/12 max-w-4xl px-14 py-7 bg-white flex flex-col space-y-6">
      <h1 className="text-4xl font-bold uppercase tracking-wider text-black">
        {title}
      </h1>
      <span
        className="text-lg font-light tracking-wider text-black 
      flex flex-col space-y-3"
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
}
const PoetSection = ({ name, bio, children }: PoetSectionProps) => {
  return (
    <div className="flex flex-col space-y-4">
      <div className="flex flex-col space-y-2">
        <h2 className="text-2xl font-semibold tracking-wider text-black">
          {name}
        </h2>
        <span className="text-lg font-light tracking-wider text-black">
          {bio}
        </span>
      </div>
      <ul className="flex flex-col space-y-2">{children}</ul>
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
          className="text-2xl font-light tracking-wider underline 
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
