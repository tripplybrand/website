import { NextPage } from 'next'

const Paintings: NextPage = () => {
  return (
    <div className="my-16">
      <div className="m-auto w-9/12 max-w-4xl px-14 py-7 bg-white flex flex-col space-y-2 sm:space-y-4 md:space-y-6">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-wider text-black">
          Into My Own
        </h1>
        <h2
          className="text-sm sm:text-base md:text-lg font-light tracking-wider text-black 
      flex flex-col space-y-2 sm:space-y-3
      "
        >
          A series of paintings based on the artist's personal photographs taken
          in adolescence at the turn of the 21st century.
        </h2>

        <blockquote
          cite="https://bookshop.org/books/swann-s-way-e8bb3127-cd5c-4c15-a4e9-bc94b8f16e6e/9780142437964"
          className="text-xs sm:text-sm md:text-base font-light text-black 
      flex flex-col space-y-2 sm:space-y-3 text-justify"
        >
          <p>
            "The places we have known do not belong solely to the world of space
            in which we situate them for our greater convenience. They were only
            a thin slice among contiguous impressions which formed our life at
            that time; the memory of a certain image is but regret for a certain
            moment; and houses, roads, avenues are as fleeting, alas, as the
            years."
          </p>
          <footer className="text-right">
            —Marcel Proust, <cite>Swann's Way</cite>
          </footer>
        </blockquote>
      </div>
    </div>
  )
}

export default Paintings
