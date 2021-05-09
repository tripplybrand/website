import tw, { css } from 'twin.macro'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import { createMachine, assign } from 'xstate'
import { useMachine } from '@xstate/react'
import { ArrowIcon } from 'icons'

//Increase multiplier make more scroll length between the reveal of each line
const scrollMultiplier = 5

export default function Home() {
  const currentLineNumber = useCurrentLineNumber()

  return (
    <>
      <Head>
        <title>Jake's Parade</title>
        <meta charSet="utf-8"></meta>
        <meta name="description" content="A poem by Michael Dechane"></meta>
        <meta property="og:title" content="Jake's Parade" key="ogtitle"></meta>
        <meta
          property="og:description"
          content="A poem by Michael Dechane"
          key="ogdesc"
        />
        <meta
          property="og:image"
          content="https://lapsang-souchong.vercel.app/Tea_Meta.jpg"
          key="ogimage"
        ></meta>
        <meta name="twitter:card" content="summary_large_image"></meta>
      </Head>
      <Intro />
      <div tw="flex justify-center my-0 mx-auto min-h-screen sticky top-0">
        <div tw="py-10 whitespace-nowrap">
          {/* <h1
            css={[
              tw`pb-4 font-body font-bold text-2xl xs:text-3xl sm:text-4xl md:text-4xl lg:text-5xl text-calico-orange-100`,
              css`
                animation: from-on-to-past 3s forwards ease-out;
              `,
            ]}
          >
            Jake's Parade
          </h1> */}
          {stanzas.map((lines, stanzaIdx) => {
            const previousStanzas = stanzas.slice(0, stanzaIdx)
            const stanzaStartLine = previousStanzas.reduce(
              (totalLines, linesInStanza) => totalLines + linesInStanza.length,
              0
            )
            return (
              <Paragraph key={stanzaIdx}>
                {lines.map((line, lineIdx) => {
                  const lineNumber = stanzaStartLine + lineIdx
                  // events: 'SCROLL_ON' | 'SCROLL_PAST' | 'SCROLL_BEFORE'
                  const animationEvent =
                    currentLineNumber === lineNumber
                      ? 'SCROLL_ON'
                      : currentLineNumber > lineNumber
                      ? 'SCROLL_PAST'
                      : currentLineNumber < lineNumber
                      ? 'SCROLL_BEFORE'
                      : null

                  if (animationEvent === null) {
                    throw new Error("animationEvent can't be null")
                  }

                  return (
                    <Line
                      key={line}
                      animationEvent={animationEvent}
                      lastLine={lineNumber === lastLineNumber}
                    >
                      {line}
                    </Line>
                  )
                })}
                {/* add the attribution to the end of the last stanza */}
                {stanzaIdx === stanzas.length - 1 ? (
                  <Attribution
                    // events: 'SCROLL_ON' | 'SCROLL_BEFORE'
                    animationEvent={
                      currentLineNumber === lastLineNumber
                        ? 'SCROLL_ON'
                        : 'SCROLL_BEFORE'
                    }
                  >
                    — Michael Dechane
                  </Attribution>
                ) : null}
              </Paragraph>
            )
          })}
        </div>
      </div>
      {/* The div that controls the scroll */}
      <div
        //invisible
        css={[
          tw`visible w-screen min-h-screen bg-red-100`,
          css`
            height: ${100 * scrollMultiplier}vh;
          `,
        ]}
      ></div>
      <Outro />
    </>
  )
}

// Components

function Intro() {
  return (
    <div
      css={[
        tw`min-h-screen space-y-10`,
        css`
          background-color: hsla(205deg, 10%, 13%, 1);
          color: #fffbf9;
        `,
      ]}
    >
      <div tw="max-w-max mx-auto pt-44 space-y-6">
        <h1 tw="font-body font-bold text-6xl text-center">Jake’s Parade</h1>
        <h2 tw="font-body font-medium text-4xl text-center">
          a poem by Michael Dechane
        </h2>
      </div>
      <div tw="max-w-max mx-auto space-y-3">
        <p tw="font-body font-normal text-2xl text-center">scroll to begin</p>
        <ArrowIcon tw="w-4 h-6 fill-calico-orange-100 animate-bounce max-w-max mx-auto" />
      </div>
    </div>
  )
}

function Paragraph({ children }: { children: React.ReactNode }) {
  return <p tw="pb-4">{children}</p>
}

type AnimationEvent = 'SCROLL_ON' | 'SCROLL_PAST' | 'SCROLL_BEFORE'

// 'SCROLL_ON' | 'SCROLL_PAST' | 'SCROLL_BEFORE'
function Line({
  children,
  animationEvent,
  lastLine,
}: {
  children: React.ReactNode
  animationEvent: AnimationEvent
  lastLine: boolean
}) {
  const [state, send] = useMachine(
    animationMachine,
    lastLine
      ? {
          actions: {
            fromBeforeToOn: assign({
              animation:
                'from-before-to-on 1s forwards ease-out, from-on-to-past 1s 1.5s forwards ease-out',
            }),
          },
        }
      : {}
  )

  useEffect(() => {
    send(animationEvent)
  }, [send, animationEvent])

  return (
    <span
      css={[
        tw`block opacity-0 font-body font-medium xs:font-normal text-xs xs:text-lg sm:text-xl md:text-xl lg:text-2xl text-calico-orange-100`,
        css`
          animation: ${state.context.animation};
        `,
      ]}
    >
      {children}
    </span>
  )
}

// 'SCROLL_ON' | 'SCROLL_BEFORE'
function Attribution({
  children,
  animationEvent,
}: {
  children: React.ReactNode
  animationEvent: Exclude<AnimationEvent, 'SCROLL_PAST'>
}) {
  const [state, send] = useMachine(animationMachine, {
    actions: {
      fromBeforeToOn: assign({
        animation: `attribution-in 1s 0.75s forwards ease-out`,
      }),
      fromOnToBefore: assign({
        animation: `attribution-out 1s forwards ease-out`,
      }),
    },
  })

  useEffect(() => {
    send(animationEvent)
  }, [send, animationEvent])

  return (
    <span
      css={[
        tw`block pt-2 opacity-0 font-body font-normal text-right text-xs xs:text-sm sm:text-base md:text-base lg:text-lg text-calico-orange-100`,
        css`
          animation: ${state.context.animation};
        `,
      ]}
    >
      {children}
    </span>
  )
}

function Outro() {
  return (
    <div
      css={[
        tw`min-h-screen sticky`,
        css`
          background-color: hsla(205deg, 10%, 13%, 1);
          color: #fffbf9;
        `,
      ]}
    ></div>
  )
}

// Data

const stanzas = [
  [
    'In China someone closed your leaves',
    'in tiny fists that grip the smoke',
    'that dried you. A world away I wait',
    'by another fire. The cup waits',
    'with me. The little blue dragon',
    'that lives in my stove does his work.',
    'The kettle begins to sing',
    'the one note of its one song.',
    'The day becomes itself beyond',
    'the glass of the kitchen window.',
    'I pour the kettle and you become',
    'again yourself, but haunted now',
    'by memory of a distant fire.',
    'In this steam rising as smoke',
    'I remember myself, who I was,',
    'before I knew all night the flames,',
    'before I tasted you, or knew your name.',
  ],
]

const lastLineNumber = stanzas.flat().length - 1

// Calculate the thresholds
const totalNumLines = stanzas.flat().length
const inc = 1 / (totalNumLines + 1)
const lineIdxArray = Array.from(Array(totalNumLines).keys())
const thresholds = lineIdxArray.map((id) => inc * (id + 1))

// Hooks/logic

function useCurrentLineNumber() {
  const [currentLineNumber, setCurrentLineNumber] = useState(-1)

  useEffect(() => {
    const handleScroll = (e: Event) => {
      const { scrollY, innerHeight } = window

      const currentRatio = scrollY / (innerHeight * scrollMultiplier)
      const thresholdIdx = thresholds.findIndex(
        (threshold) => currentRatio <= threshold
      )
      const currentLineNumber =
        thresholdIdx === -1 ? lastLineNumber : thresholdIdx - 1
      setCurrentLineNumber(currentLineNumber)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return currentLineNumber
}

const animationMachine = createMachine(
  {
    context: {
      animation: '',
    },
    initial: 'beforeLine',
    states: {
      beforeLine: {
        on: {
          SCROLL_ON: {
            target: 'onLine',
            actions: 'fromBeforeToOn',
          },
          SCROLL_BEFORE: {},
        },
      },
      onLine: {
        on: {},
      },
      pastLine: {
        on: {
          SCROLL_ON: {
            target: 'onLine',
            actions: 'fromPastToOn',
          },
          SCROLL_PAST: {},
        },
      },
    },
    on: {
      SCROLL_PAST: {
        target: 'pastLine',
        actions: 'fromOnToPast',
      },
      SCROLL_BEFORE: {
        target: 'beforeLine',
        actions: 'fromOnToBefore',
      },
    },
  },
  {
    actions: {
      fromBeforeToOn: assign({
        animation: 'from-before-to-on 1s forwards ease-out',
      }),
      fromOnToPast: assign({
        animation: 'from-on-to-past 1s forwards ease-out',
      }),
      fromOnToBefore: assign({
        animation: 'from-on-to-before 1s forwards ease-out',
      }),
      fromPastToOn: assign({
        animation: 'from-past-to-on 1s forwards ease-out',
      }),
    },
  }
)
