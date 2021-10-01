import { NextPage } from 'next'
import HomeLink from '@components/HomeLink'

const Contact: NextPage = () => {
  return (
    <>
      <HomeLink />
      <main className="my-16 flex flex-col space-y-2.5 sm:space-y-3 md:space-y-4">
        <div
          className="m-auto w-9/12 max-w-4xl 
        px-8 sm:px-10 md:px-14 py-4 sm:py-5 md:py-7
        bg-white flex flex-col space-y-5 sm:space-y-7 md:space-y-9"
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-wider text-black">
            Contact
          </h1>
          <ul
            className="text-sm sm:text-base md:text-lg font-light tracking-wider text-black 
      flex flex-col space-y-2 sm:space-y-3"
          >
            <li>
              <a
                href="https://twitter.com/trippLybrand"
                target="_blank"
                rel="noreferrer"
                className="underline text-black hover:text-matisse-red-200
              focus:outline-none focus-visible:ring-1 sm:focus-visible:ring-2 focus-visible:ring-matisse-red-200 focus-visible:ring-opacity-60"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/tripplybrand/"
                target="_blank"
                rel="noreferrer"
                className="underline text-black hover:text-matisse-red-200
              focus:outline-none focus-visible:ring-1 sm:focus-visible:ring-2 focus-visible:ring-matisse-red-200 focus-visible:ring-opacity-60"
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </main>
    </>
  )
}

export default Contact
