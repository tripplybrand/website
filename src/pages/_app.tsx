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
        {/* <video
          autoPlay
          muted
          loop
          playsInline
          poster="Steam_Tea_Still.jpg"
          tw="object-cover w-screen h-screen"
        >
          <source src="Steaming_Tea_Loop_Shorter.mp4" type="video/mp4" />
        </video>
        Sorry, your browser doesn't support embedded videos. */}
      </div>
      {/*Transparent pane between video and text*/}
      <div
        //background-color: hsla(90deg, 6%, 51%, 0.5);
        css={[
          css`
            background-color: hsla(205deg, 10%, 13%, 1);
          `,
          tw`fixed overflow-hidden h-screen w-screen`,
        ]}
      ></div>
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
