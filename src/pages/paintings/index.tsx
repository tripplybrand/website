import { NextPage } from 'next'
import Head from 'next/head'
import HomeLink from '@components/HomeLink'
import Painting from '@components/Painting'
import paintingsData from '../../../paintings-data.json'

const Paintings: NextPage = () => {
  return (
    <>
      <Head>
        <title>Into My Own — Paintings</title>
        <meta charSet="utf-8"></meta>
        <meta
          name="description"
          content="A series of paintings based on the artist's personal photographs taken in adolescence."
        ></meta>
        <meta
          property="og:title"
          content="Into My Own — Paintings"
          key="ogtitle"
        ></meta>
        <meta
          property="og:description"
          content="A series of paintings based on the artist's personal photographs taken in adolescence."
          key="ogdesc"
        />
        <meta
          property="og:image"
          content="https://website-tripplybrand.vercel.app/Colorado_Mountain_Lake_Fisherman_Meta.jpg"
          key="ogimage"
        ></meta>
        <meta name="twitter:card" content="summary_large_image"></meta>
      </Head>
      <HomeLink />
      <main className="my-16 flex flex-col space-y-2.5 sm:space-y-3 md:space-y-4">
        <div
          className="m-auto w-9/12 max-w-4xl 
      px-8 sm:px-10 md:px-14 py-4 sm:py-5 md:py-7 
      bg-white flex flex-col space-y-2 sm:space-y-4 md:space-y-6"
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-wider text-black">
            Into My Own
          </h1>
          <h2
            className="text-sm sm:text-base md:text-lg font-light tracking-wider text-black 
      flex flex-col space-y-2 sm:space-y-3
      "
          >
            A series of paintings based on the artist's personal photographs
            taken in adolescence at the turn of the 21st century.
          </h2>

          <blockquote
            cite="https://bookshop.org/books/swann-s-way-e8bb3127-cd5c-4c15-a4e9-bc94b8f16e6e/9780142437964"
            className="text-xs sm:text-sm md:text-base font-light text-black 
      flex flex-col space-y-2 sm:space-y-3 text-justify"
          >
            <p>
              "The places we have known do not belong solely to the world of
              space in which we situate them for our greater convenience. They
              were only a thin slice among contiguous impressions which formed
              our life at that time; the memory of a certain image is but regret
              for a certain moment; and houses, roads, avenues are as fleeting,
              alas, as the years."
            </p>
            <footer className="text-right">
              —Marcel Proust, <cite>Swann's Way</cite>
            </footer>
          </blockquote>
        </div>

        {paintingsData.map((paintingObject, i) => {
          const loading = i === 0 ? 'eager' : 'lazy'
          return (
            <div
              className="m-auto w-9/12 max-w-4xl 
            px-4 sm:px-5 md:px-7 pt-4 sm:pt-5 md:pt-7 pb-2 sm:pb-3 md:pb-4 
            bg-white"
              key={paintingObject.id}
            >
              <Painting
                src={paintingObject.src}
                alt={paintingObject.alt}
                title={paintingObject.title}
                width={paintingObject.width}
                height={paintingObject.height}
                quality={paintingObject.quality}
                loading={loading as 'eager' | 'lazy'}
                priority={i === 0 ? true : false}
              />
            </div>
          )
        })}
      </main>
    </>
  )
}

export default Paintings
