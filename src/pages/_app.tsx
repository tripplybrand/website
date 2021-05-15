import type { AppProps } from 'next/app'
import '../styles/globals.css'
import '../styles/scrollAnimations.css'
import tw, { css, GlobalStyles } from 'twin.macro'

type ComponentWithPageLayout = {
  Component: AppProps['Component'] & {
    PageLayout?: React.ComponentType
  }
}

function App({ Component, pageProps }: AppProps & ComponentWithPageLayout) {
  return (
    <>
      <div tw="fixed overflow-hidden">
        {/*Add video once everything else is worked out*/}
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="Jake'sParade_Still.jpg"
          tw="object-cover w-screen h-screen"
        >
          <source src="Jake'sParade_Mid_FireBottom.mp4" type="video/mp4" />
        </video>
        Sorry, your browser doesn't support embedded videos.
      </div>
      <GlobalStyles />
      {
        // get a page root if one was set
        Component.PageLayout ? (
          <Component.PageLayout>
            <Component {...pageProps} />
          </Component.PageLayout>
        ) : (
          <Component {...pageProps} />
        )
      }
    </>
  )
}

export default App
