import Head from 'next/head'
import { useEffect, useState, useMemo } from 'react'
import { createMachine, assign } from 'xstate'
import { useMachine } from '@xstate/react'
import { RepeatIcon, DownArrowIcon } from 'icons'
import BackLink from '@components/BackLink'

//Increase multiplier make more scroll length between the reveal of each line
const scrollMultiplier = 50

export default function Home() {
  const currentLineNumber = useCurrentLineNumber()

  const [poemStarted, setPoemStarted] = useState(false)

  if (
    currentLineNumber !== -1 &&
    currentLineNumber !== lastLineNumber + 1 &&
    currentLineNumber > 0 &&
    poemStarted === false
  ) {
    setPoemStarted(true)
  }

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
          content="https://tripplybrand.com/Jake'sParade_Meta.jpg"
          key="ogimage"
        ></meta>
        <meta name="twitter:card" content="summary_large_image"></meta>
      </Head>
      {/* Background video */}
      <div className="fixed overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/Jake'sParade_Still.jpg"
          className="object-cover w-screen h-screen"
        >
          <source src="/Jake'sParade_Mid_FireBottom.mp4" type="video/mp4" />
        </video>
        Sorry, your browser doesn't support embedded videos.
      </div>
      {/* Text section */}
      <Intro poemStarted={poemStarted} setPoemStarted={setPoemStarted} />
      <div className="flex justify-center my-0 mx-auto min-h-screen sticky top-0 overflow-hidden bg-[hsla(330deg,37%,68%,0.35)]">
        <div className="py-10 whitespace-nowrap">
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
                  return (
                    <Line
                      key={lineIdx}
                      currentLineNumber={currentLineNumber}
                      lineNumber={lineNumber}
                      poemStarted={poemStarted}
                    >
                      {line}
                    </Line>
                  )
                })}
              </Paragraph>
            )
          })}
        </div>
      </div>
      <BackLink
        hoverFill={'hover:fill-calico-orange-200'}
        focusVisibleColor={'focus-visible:ring-calico-orange-200'}
        position={'absolute'}
      />
      {/* The div that controls the scroll */}
      <div
        className="invisible w-screen min-h-screen bg-red-100"
        style={{ height: `${100 * scrollMultiplier}vh` }}
      ></div>
      <Outro setPoemStarted={setPoemStarted} />
    </>
  )
}

// Components
type IntroProps = {
  poemStarted: boolean
  setPoemStarted: (value: boolean) => void
}

function Intro({ poemStarted, setPoemStarted }: IntroProps) {
  return (
    <div
      className="flex flex-col justify-center min-h-screen space-y-10 sticky 
      bg-[hsla(330deg,37%,68%,0.35)] text-[#fffbf9]"
    >
      <div className="max-w-max mx-auto space-y-6">
        <h1
          className="font-body text-center 
        font-extrabold xs:font-bold 
        text-4xl xs:text-5xl sm:text-6xl"
        >
          Jake???s Parade
        </h1>
        <h2
          className="font-body text-center 
        font-normal xs:font-light
        text-xl xs:text-3xl sm:text-4xl
       "
        >
          a poem by Michael Dechane
        </h2>
      </div>
      {poemStarted ? (
        <button
          onClick={() => {
            window.scrollTo(0, 0)
            setPoemStarted(false)
          }}
          className="group flex focus:outline-none h-12 space-x-4 max-w-max mx-auto"
        >
          <p
            className="font-body self-center
          font-semibold xs:font-medium
          text-base xs:text-lg sm:text-xl"
          >
            read again
          </p>
          <RepeatIcon className="self-center w-8 h-8 fill-calico-orange-100 group-hover:fill-calico-orange-200" />
        </button>
      ) : (
        <div className="max-w-max mx-auto space-y-3">
          <p
            className="font-body text-center 
        font-semibold xs:font-medium
        text-base xs:text-lg sm:text-xl"
          >
            scroll to begin
          </p>
          <DownArrowIcon className="w-8 h-8 fill-calico-orange-100 animate-bounce max-w-max mx-auto" />
        </div>
      )}
    </div>
  )
}

function Paragraph({ children }: { children: React.ReactNode }) {
  return <p className="pb-4">{children}</p>
}

function Line({
  children,
  currentLineNumber,
  lineNumber,
  poemStarted,
}: {
  children: React.ReactNode
  currentLineNumber: number
  lineNumber: number
  poemStarted: boolean
  key: React.Key
}) {
  const [state, send] = useMachine(animationMachine)

  useEffect(() => {
    const animationEvent =
      !poemStarted && currentLineNumber === -1
        ? 'SCROLL_RESET'
        : currentLineNumber === lineNumber
        ? 'SCROLL_ON'
        : currentLineNumber > lineNumber
        ? 'SCROLL_PAST'
        : currentLineNumber < lineNumber
        ? 'SCROLL_BEFORE'
        : null

    if (animationEvent === null) {
      throw new Error("animationEvent can't be null")
    }

    send(animationEvent)
  }, [send, currentLineNumber, lineNumber, poemStarted])

  const lineCss = useLineCss(state.context.animation, state.context.textSize)

  return (
    <span className={lineCss.className} style={lineCss.style}>
      {children}
    </span>
  )
}

function Outro({
  setPoemStarted,
}: {
  setPoemStarted: (value: boolean) => void
}) {
  return (
    <div className="min-h-screen relative text-[#fffbf9] bg-[hsla(330deg,37%,68%,0)]">
      <div className="flex flex-col max-w-max mx-auto min-h-screen justify-center">
        <button
          onClick={() => {
            window.scrollTo(0, 0)
            setPoemStarted(false)
          }}
          className="group flex focus:outline-none h-12 space-x-4"
        >
          <p
            className="font-body self-center
            font-semibold xs:font-medium
          text-lg xs:text-2xl
          "
          >
            read again
          </p>
          <RepeatIcon className="self-center w-8 h-8 fill-calico-orange-100 group-hover:fill-calico-orange-200" />
        </button>
      </div>
    </div>
  )
}

// Data

const stanzas = [
  [
    'The best fire we had in those days was the night',
    "at Jake and Donna's place. It was bitter",
    'cold but we built the bonfire up high, then higher.',
    'Jake was a little drunk when he came laughing',
    'mostly falling down the stairs of the deck',
    'with the Papasan chair from their living room.',
    <>
      <em>Let's burn it,</em> Jake roared, and we roared back
    </>,
    'with the flames when he threw it on and raised',
    'a three-story column of wild, perishing ash',
    'against the darkness still expanding',
    'between the flares of diminishing stars.',
    <>
      <em>I always hated that chair,</em> Jake announced
    </>,
    'as we laughed with relish, in disbelief',
    'as Donna nodded, for once agreed.',
    'Everyone stood up and backed away a bit',
    'and in the multiplying heat, we began to see',
    "what he'd done, what he'd started. It turned out",
    'there were other things in the house Jake hated',
    'so he became his own parade and we the town',
    'that cheered him on. Letters he found and a half-',
    'finished painting. There were books that no longer',
    'worked for him, then the wobbly bookcase tumbled in.',
    'The more he found to burn, the better our fire',
    'seemed to like it and lick its quickening lips.',
    'There were things between most of us and inside',
    'every one of us already vanishing smoke.',
    'What I remember most is how our faces flickered',
    'in the shared, inexplicable goodness of that night',
    'and the guitar???how quick and soft the sound its strings',
    'made as they unmoored from the burning bridge.',
  ],
]

const lastLineNumber = stanzas.flat().length - 1

// Calculate the thresholds
// Add one to allow the final line to stay until scrolled past
const totalNumLines = stanzas.flat().length + 1
const inc = 1 / (totalNumLines + 1)
const lineIdxArray = Array.from(Array(totalNumLines).keys())
const thresholds = lineIdxArray.map((id) => inc * (id + 1))

// Utilities

const random = (min: number, max: number) => Math.random() * (max - min) + min
// I think I should remove the floor because when number are less than or equal to 1
// they end up always being the min
//Math.floor(Math.random() * (max - min)) + min

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
        thresholdIdx === -1 ? lastLineNumber + 1 : thresholdIdx - 1
      setCurrentLineNumber(currentLineNumber)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return currentLineNumber
}

function useLineCss(animation: string, textSize: string) {
  // Need to make media query also work with keyframe font size
  const lineCss = useMemo(() => {
    return 'opacity-0 font-body absolute mx-auto left-0 right-0 text-center font-semibold xs:font-medium sm:font-normal md:font-light lg:font-light top-[50%]'
  }, [])

  //Causes a warning in dev mode because of a discrepancy between values on server and client.
  //Warning not there in production. Does this matter?
  const lineStyle = useMemo(() => {
    return {
      '--translateX1': `${random(-75, 75)}%`,
      '--translateX2': `${random(-50, 50)}%`,
      '--translateX3': `${random(-25, 25)}%`,
      '--translateX4': `${random(-5, 5)}%`,
    }
  }, [])

  return {
    className: [lineCss, textSize].join(' '),
    style: { animation: `${animation}`, ...lineStyle },
  }
}

const animationMachine = createMachine(
  {
    context: {
      animation: '',
      textSize: '',
    },
    initial: 'beforeLine',
    states: {
      beforeLine: {
        on: {
          SCROLL_ON: {
            target: 'onLine',
            actions: 'fromBeforeToOn',
          },
        },
      },
      onLine: {},
      pastLine: {},
    },
    on: {
      SCROLL_PAST: {
        target: 'pastLine',
        actions: 'fromOnToPast',
      },
      SCROLL_RESET: {
        target: 'beforeLine',
        actions: 'reset',
      },
    },
  },
  {
    actions: {
      fromBeforeToOn: assign({
        animation: 'from-before-to-on-jake 3s forwards ease-out',
        textSize: 'text-xs xs:text-lg sm:text-2xl md:text-3xl lg:text-4xl',
      }),
      fromOnToPast: assign({
        animation: `from-on-to-past-jake 5s forwards cubic-bezier(
          ${random(0, 0.5)}, 
          ${random(0.5, 1)}, 
          ${random(0, 0.5)}, 
          ${random(0.5, 1)})`,
        /*The font sizes are 0.65 of the value of each of the following: text-xs, text-lg, text-2xl, text-3xl, text-4xl*/
        textSize:
          'text-[0.4875rem] xs:text-[0.73125rem] sm:text-[0.975rem] md:text-[1.21875rem] lg:text-[1.4625rem]',
      }),
      reset: assign({
        animation: 'reset 0s forwards ease-out',
        textSize: 'text-xs xs:text-lg sm:text-2xl md:text-3xl lg:text-4xl',
      }),
    },
  }
)
//One I liked if I go back to static: cubic-bezier(0.1, 0.7, 1.0, 0.1)
