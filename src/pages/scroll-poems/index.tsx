import { NextPage } from 'next'
import Link from 'next/link'

const Poems: NextPage = () => {
  return (
    <div className="my-16 flex flex-col space-y-4">
      {/*Page intro text*/}
      <div className="m-auto w-9/12 max-w-4xl px-14 py-7 bg-white flex flex-col space-y-6">
        <h1 className="text-4xl font-bold uppercase tracking-wider text-black">
          Scroll Poems
        </h1>
        <span
          className="text-lg font-light tracking-wider text-black 
      flex flex-col space-y-3"
        >
          <p>These are experiments with text, visuals, gesture, and motion.</p>
          <p>
            While the layering of mediums can bring fresh meaning, the text
            itself remains primary, and so the experiments are grouped by poet.
            Please go and read more of their worked linked in their bios.
          </p>
        </span>
      </div>

      {/*Poets section*/}
      <div className="m-auto w-9/12 max-w-4xl px-14 py-7 bg-white flex flex-col space-y-9">
        {/*Michael section*/}
        <div className="flex flex-col space-y-4">
          <div className="flex flex-col space-y-2">
            <h2 className="text-2xl font-semibold tracking-wider text-black">
              Michael Dechane
            </h2>
            <span className="text-lg font-light tracking-wider text-black">
              A former carpenter, videographer, and speech writer. A native of
              Odessa, Florida, he currently resides in Zürich, Switzerland.
            </span>
          </div>
          <ul className="flex flex-col space-y-2">
            <li>
              <Link href={'/scroll-poems/jakes-parade'}>
                <a
                  className="text-2xl font-light tracking-wider underline 
      text-black hover:text-matisse-red-200
      focus:outline-none focus-visible:ring-1 sm:focus-visible:ring-2 focus-visible:ring-matisse-red-200 focus-visible:ring-offset-2 focus-visible:ring-opacity-60"
                >
                  Jake&apos;s Parade
                </a>
              </Link>
            </li>
            <li>
              <Link href={'/scroll-poems/lapsang-souchong'}>
                <a
                  className="text-2xl font-light tracking-wider underline 
      text-black hover:text-matisse-red-200
      focus:outline-none focus-visible:ring-1 sm:focus-visible:ring-2 focus-visible:ring-matisse-red-200 focus-visible:ring-offset-2 focus-visible:ring-opacity-60"
                >
                  Lapsang Souchong
                </a>
              </Link>
            </li>
          </ul>
        </div>

        {/*Julie section*/}
        <div className="flex flex-col space-y-4">
          <div className="flex flex-col space-y-2">
            <h2 className="text-2xl font-semibold tracking-wider text-black">
              Julie Sumner
            </h2>
            <span className="text-lg font-light tracking-wider text-black">
              Poet, wife, loves unpopular birds and odd plants. Writes at
              juliesumnerpoetry on Instagram.
            </span>
          </div>
          <ul className="flex flex-col space-y-2">
            <li>
              <Link href={'/scroll-poems/corrective-lenses'}>
                <a
                  className="text-2xl font-light tracking-wider underline 
      text-black hover:text-matisse-red-200
      focus:outline-none focus-visible:ring-1 sm:focus-visible:ring-2 focus-visible:ring-matisse-red-200 focus-visible:ring-offset-2 focus-visible:ring-opacity-60"
                >
                  Corrective Lenses
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Poems
