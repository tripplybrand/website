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
          tw`fixed w-screen overflow-hidden h-screen`,
        ]}
      >
        <Image
          src="/Pink_Line_Dusty.jpg"
          alt="Pine forest with pink ribbon."
          layout="fill"
          objectFit="cover"
          quality={100}
          loading="eager"
          priority={false}
        />
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
