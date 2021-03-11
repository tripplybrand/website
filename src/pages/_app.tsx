import type { AppProps } from 'next/app'
import '../styles/globals.css'
import '../styles/scrollAnimations.css'
import Image from 'next/image'
import tw, { css, GlobalStyles } from 'twin.macro'

type ComponentWithPageLayout = {
  Component: AppProps['Component'] & {
    PageLayout?: React.ComponentType
  }
}

function App({ Component, pageProps }: AppProps & ComponentWithPageLayout) {
  return (
    <>
      <div
        css={[
          css`
            z-index: -1;
          `,
          tw`fixed overflow-hidden`,
        ]}
      >
        <video
          autoPlay
          muted
          loop
          poster="Pink_Line_Dusty.jpg"
          tw="object-cover w-screen h-screen"
        >
          <source src="PoH_Header_Video.mp4" type="video/mp4" />
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
