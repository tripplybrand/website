import { NextPage } from 'next'
import Head from 'next/head'
import HomeLink from '@components/HomeLink'
import OutsideLink from '@components/OutsideLink'

const Contact: NextPage = () => {
  return (
    <>
      <Head>
        <title>Contact — Tripp Lybrand</title>
        <meta charSet="utf-8"></meta>
        <meta name="description" content="How to reach Tripp Lybrand."></meta>
        <meta
          property="og:title"
          content="Contact — Tripp Lybrand"
          key="ogtitle"
        ></meta>
        <meta
          property="og:description"
          content="How to reach Tripp Lybrand."
          key="ogdesc"
        />
        <meta
          property="og:image"
          content="https://tripplybrand.com/Tripp_Contemplating_the_Meaning_of_Life_Meta.jpg"
          key="ogimage"
        ></meta>
        <meta name="twitter:card" content="summary_large_image"></meta>
      </Head>
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
          <p className="text-sm sm:text-base md:text-lg font-light tracking-wider text-black">
            <>
              Until I have something more formal, you can reach me on{' '}
              <OutsideLink
                href={'https://twitter.com/trippLybrand'}
                text={'Twitter'}
              />{' '}
              or{' '}
              <OutsideLink
                href={'https://www.instagram.com/tripplybrand/'}
                text={'Instagram'}
              />
              .
            </>
          </p>
        </div>
      </main>
    </>
  )
}

export default Contact
