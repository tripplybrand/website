import { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
//Statically imported image file
import islandOfRottingBeauty from '../../../public/Island_of_Rotting_Beauty.jpg'

const Writings: NextPage = () => {
  return (
    <main>
      <div className="w-screen h-screen">
        <Image
          src={islandOfRottingBeauty}
          alt="View of mountain range on Madeira."
          layout="fill"
          objectFit="cover"
          quality={75}
          priority={true}
          placeholder="blur"
        />
        <h1
          className="text-4xl xs:text-5xl sm:text-7xl font-bold 
        absolute inset-0 m-auto w-max h-10 xs:h-12 sm:h-[4.5rem]
        text-[#FAF7F5] text-opacity-90 hover:text-[#864049] hover:text-opacity-70"
        >
          GOOSE (BULLEIT)
        </h1>
      </div>
      <HomeLinkGoose />
      <div
        className="m-auto w-9/12 max-w-4xl 
            px-4 sm:px-5 md:px-7 
            pt-1 md:pt-2 
            pb-4 sm:pb-5 md:pb-7 
            mt-4 mb-12
            bg-white"
      >
        {paragraphs.map((text, paragraphIdx) => (
          <div
            className="text-sm sm:text-base md:text-lg font-normal text-black
        mt-3 sm:mt-4 md:mt-5"
            key={paragraphIdx}
          >
            {text}
          </div>
        ))}
      </div>
    </main>
  )
}

//Custom HomeLink. Not yet sure how I show alter the main HomeLink component
const HomeLinkGoose = () => {
  return (
    <Link href="/">
      {/*The padding and negative margin increase the clickable area. 
      It creates a huge ring when tabbed to, but that seems better than making the area difficult to click.
      */}
      <a
        className="text-sm md:text-base font-light tracking-wider underline uppercase
      text-[#FAF7F5] hover:text-[#864049]
      focus:outline-none focus-visible:ring-1 md:focus-visible:ring-2 focus-visible:ring-[#864049] focus-visible:ring-offset-2 focus-visible:ring-opacity-60
      absolute left-6 top-5 p-11 -m-11
      "
      >
        Home
      </a>
    </Link>
  )
}

const paragraphs = [
  <>
    <span className="text-lg sm:text-xl md:text-2xl font-semibold">H</span>e has
    taken the thing by the neck, long neck, and is twirling it around; rather it
    is twirling around itself, pivoting about the point of his clutching. The
    wings of the goose are white on the underside, and alternately exposed and
    then hidden by the tan top-feathers, they are rapid and create the effect of
    stop motion films: smoke stutter. He keeps his arm extended and still, the
    motion happening around and because of him. All of this is at a distance,
    across the water on the island. He. Who is he? A man unkempt, searching for
    a meal, a stone-faced killer doing what must be done in this world. There is
    no right or wrong to him: unwavering necessity. He has no face from this
    distance: a block of flesh set atop a neck, no eyes, not even shadowed
    holes. His other hand, free of the goose, has been at his side and now peels
    apart from his body, prepared for an enveloping embrace. It is straightened
    at the elbow and swings slow, from parallel with torso to
    chest-perpendicular: his fist moves toward the bird.
  </>,
  <>
    The bird behaves as it ought—if we are to say animals ought do
    anything—frantically gesturing feathered billows and plumage plumes. It most
    likely has cut at the man’s wrist with the claws of its web-bound feet, but
    the scraping makes no audible record. Given how water takes sound and pulls
    it on and on, there surely should be at least an audible hiss and cry of the
    strangled animal, assuming its plea can make it through the long, long neck.
    Its lungs are likely working at it, but the grip of the man’s right hand
    stifles it, in addition to serving as the fulcrum around which the bird
    flutters. Given this movement, the contrast of the man’s steady swinging
    left hand—it appears fisted—is pleasant and calming as it carries a patient
    line toward the chaotic body. The velocity of the arm picks up toward the
    end, the very end, and would be plotted as a flat line, which dramatically
    sweeps up at the tail and then plunges to zero. The hand, while it looks
    like a kiss or a gentle bump when it collides with the bird, stops abruptly,
    as do the wings. They swivel and jerk a time or two as expected, and then
    fold peacefully against the full body as they were designed; designed being
    used in the loosest and most interesting sense. Expected, because in the
    entire course of the steady trajectory there was an object clutched in the
    fist. At a distance and with the angle at which it was held, it could not be
    seen.
  </>,
  <>
    When the fist retreats—the wings silent, the plumage plumes settled—the man
    turns his wrist and the Alabama sun catches on the metal. A knife, he is
    holding a knife. Unplugging the hole recently manufactured, a lustful stream
    of blood comes out, lustful for the ground or the lake water lapping at the
    edges of the coarse orange sand, the red clay underneath. Lustful because it
    rushes out, slivering over the ridges of feathers, and then cascades at an
    angle off one of the webbed feet. What life has that goose lived that its
    own blood is so eager to evacuate? We are at such a distance still, unaided
    by any device of magnification, that the blood is not a collection of drops,
    but a stream, which sputters close to the ground, raining on the coarse and
    once translucent sand, stained orange from the red clay, now most likely
    red-clotted in craters from the sputtering blood.
  </>,
  <>
    The long neck is longer in death. Who knew geese had muscles they were using
    to keep those long tubes for air and food contracted. We all know now,
    seeing it lengthened in the man’s hand. His arm remains stiff and elongated
    as he lowers it, rotating at the shoulder. His arm is down at his side and
    the goose neck hangs from it, the full body of the bird knocking against his
    knee, and while it is hard to tell at this distance, the webbed feet are
    touching the sand, just the tip of the nails. He opens and closes his grip,
    so the neck slides through and the feet puddle on the sand. He moves
    forward. His shoulders roll forward. The body of the bird drags behind him.
    The sound of the feathered body rolling and crushing over each
    semi-translucent, wave-worn grain of sand, it exists, but even the forceful
    tug of water on the noise does not bring it to our ears.
  </>,
  <>
    This circle of southern clay—you could walk its wavering circumference in
    five to ten minutes—is like a flowerpot: the pines are tall weeds, the
    burnt, pale-brown grass around the trunks is dead moss in a blue tin bucket.
    There are stones, larger, too large for even a strong man to budge from
    their mud-glued placement. That is where the man moves toward, toward the
    stones where the perch spasm their tails and move through the brown water.
    The goose, no longer dying but dead, dragging and furrowing behind him, is
    unified with him by the clutching, so the killer is the dead thing he has
    deadened, all of him being dragged down into the island he has robbed of the
    only living inhabitant we knew of; knowledge given to us morning by morning
    when it wailed and skidded, crash landed over the water, then hopped up the
    short mud cliff, where its nest was, is.
  </>,
  <>
    He is reenacting the painting <i className="italic">Pelican (Stag)</i> by
    Peter Doig, deeper than that, he is embodying the painting’s inspiration: in
    Trinidad a man on the beach, wringing a pelican’s neck. He has made me Doig,
    viewing what I feel I should not, requiring a creative response. Who is this
    man on a small island in Lake Martin, Alabama, cultured enough and violent
    enough to procure and destroy a goose, so that he may reenact the
    inspiration for a painting of a world-renowned artist? Seeing it from such a
    distance and in person is more emotive than the painting itself. He must be
    a man after my own heart. The willingness to do all things and any specific
    thing for art, the hunch of the shoulders showing the weight of it, be it
    the goose he drags or the marriage that failed. I was not thinking his
    marriage had in fact failed like mine—too on the nose—but now that I say it,
    there is a possibility that the one who holds all things together gave
    license for the universe to ejaculate a mirror image of myself, weakening my
    loneliness when it is strongest.
  </>,
  <>
    At the same distance he finishes dragging the long necked bird, lifts it and
    sets it into the hollow triangle behind the back seat of his green canoe. He
    either acts with precise intention or complete serendipity, because the neck
    hangs idyllic, like the stroke of a brush over the side of the canoe, facing
    us, and the beak touches the water, but it doesn’t, as there is no ripple
    birthed when the boat sets forth; the width of a leaf must be between them;
    if the goose still had breath the force would tremble craters into the skin
    of the lake. The haggard man rows through our frame, his left arm stronger
    than his right, as he digs hard every three strokes to counter the slight
    veering. The goose is peaceful and gazes at the reflection it no longer has,
    or I suppose it still possesses such a thing, death doesn’t steal it
    initially, but decomposition will. Shall I call the man, beckon him to dine
    with me and share good company? Celebrate the grotesque and ethereal nature
    of his art, painting made flesh? But if he does not know or desire my gaze,
    the performance must have been for the ephemeral sake of performing, and my
    call would rob the piece of its purpose. So, silence. Perhaps another time
    we will establish our kinship, and commiserate over the sacrifice of even
    love for art, but knowing how way leads on to way, well, you never know.
  </>,
  <div className="text-lg sm:text-xl md:text-2xl font-semibold text-center">
    ***
  </div>,
  <>
    <span className="text-lg sm:text-xl md:text-2xl font-semibold">I</span>t is
    a new day and apologies are offered. It is the same time as the day before
    and the canoe has cut through the same path of water that is really never
    the same, but has reached the same island. The true distance is the same,
    but the distance of vision is shortened. He is seen through binoculars, and
    this is the first apology: he is not a man, not haggard, but a boy, well, a
    pre-man, more precisely a male at the age where he thinks he is a man but
    the world has not yet drawn the same conclusion. Apology of second order, it
    should be first: there was far too much bourbon affecting the gaze to assure
    you that everything reported was true. The reference to the Doig painting is
    now suspect, but honestly there was a goose that is dead at this boy’s hand,
    which leads to a new set of concerns. For the sake of honesty and integrity
    in the observation, we are peering through a decent pair of binoculars, a
    gift of the wife made former as a sacrifice to art. While thoughts of her,
    conjured by this magnifying tool, do impair my heart, I believe they change
    not my vision. Also, there have been two glasses of bourbon consumed, but
    modest, and one early in the morning, hours before this second afternoon
    imbibing. With this honesty there should be no apologies or amendments
    needed tomorrow.
  </>,
  <>
    His bare feet post into inches of water and the red mud plumes about his
    ankles. He fingers the tip of the canoe and drags it half onto the bank. The
    sound of plastic scraping sand is implied by his struggle. He sets off
    counterclockwise around the island, which is deeper into the scene, away
    from our foreground. He has purpose and moves with the speed that the soft,
    fading edge of the shore allows. He reaches a rock, dingy white quartz, and
    then turns toward the heart of this wild mound, which is owned by the power
    company, poles set into it, wires strung above it, so it is a wild, electric
    mound. He is shortly stopped by a chest-high cliff—loose term—of exposed
    loam. He claws a tuft of brown grass, digs a fat toe into the soil. He pulls
    and we are close enough to see the rounded edge of his back tense under his
    pale skin. He gets a knee on the top of the small cliff, then with the other
    hand finds a fallen pine to hold and lift him entirely over the obstacle. He
    must have ample layers of dead skin on his feet, because he walks forward
    with no trepidation on the needled and rocked land. He bends. If yesterday
    was not overly compromised, I believe this is where the goose initially lay.
    From the grass he rises and in his hand is a fat, white stone, the size of a
    goose egg. Sorry. It <i className="italic">is</i> a fat white goose egg, the
    size of a stone. He slips the egg into his pocket. He bends again and rises
    with another and slips it into the counter-pocket. He walks back to the
    cliff edge, evenly weighted with the potential life that had been left to
    rot. Placing both hands on either side, he palms their shape outside his
    shorts and gently leaps from the edge, landing flatfooted on the sand. No
    yolk is seen pouring down his thigh. Pockets full of egg, he walks back,
    left foot in right print, the opposite.
  </>,
  <>
    He pulls a pan from the canoe. He sets it on an uneven rock, but it doesn’t
    slide. He gathers pinecones and a branch, which fractals from the size of a
    wrist to wisps as thin as hair. He folds the branch, breaking bit by bit,
    piling them by size. Three chunks of quartz are plucked from the red clay.
    Can you hear the suctioned pop? He arranges them along the edge of a circle
    he has projected. In the center three fruits of conifer, then deconstructed
    branch, from wisps to wrist. The lighting is too small an act to see, but
    all is flame soon. I cannot see sweat on his face, but it is summer and the
    sun is not setting; he is surely hot. The flames give and cradle the pan set
    in their midst. The eggs are cracked in turn. They are too large to break
    one-handed. They ought to cook longer. With a palm full of needles he grabs
    the pan by the handle and removes it. He eats the goose eggs, fried, folded,
    with a bare, lake-washed hand. He slurps them. The viscous yellow cuts down
    his palm and slips to the outside of his hand, spilling and running over the
    knob of his wrist. He licks the yolk from his hand, laps it like a Golden
    Retriever, like the waves, like I used to my wife. He had no need for death.
    The goose could have been run off with a yell and the eggs stolen. Just like
    a boy to treat the world with prideful excess. This was his only task today.
    He leaves and the sun has just begun wondering about the other side of the
    world.
  </>,
  <div className="text-lg sm:text-xl md:text-2xl font-semibold text-center">
    ***
  </div>,
  <>
    <span className="text-lg sm:text-xl md:text-2xl font-semibold">A</span>
    pologies again. Not for drink, there was much of that last night, but only
    after the boy left and the reporting ended. No, apologies for what I would
    call gratuitous and bitter crassness. Reading over what was written, I see
    the sensual language used may have been driven by recollections of the
    benefits of marriage. They were true images and beautiful, but given the
    brashness of everyone these days, they seem unnecessary. If you did not
    notice them, please don’t go hunting for them. The rereading and realization
    of the need for an apology only came because he is late today. The sun has
    not yet changed hues, but it is low enough that it scribbles a narrowing
    line of light on the lake.
  </>,
  <>
    Ah, here he is. He has found a girl. Perhaps the goose was a sacrifice to
    her. She sits in the back of the canoe and does not paddle. She paddles now
    and they are an even and quick pair. He is wet to his knees, holding the
    vessel still so she walks from dry plastic to dry land. Will he produce a
    blanket? Will they use the uninhabited island for what I would have
    convinced my wife was the purpose of any secluded piece of land?
    Unobstructed wind on unobstructed skin. I of course would put the binoculars
    down. Yes, I would walk my eyes into the other room and keep them buried
    there. They sit on a log, knees touch, far enough inland that the sand is
    dry, all four bare feet set into it. He reads from a book. He closes it and
    they stand. The sky is full of those ghastly colors that are utterly mundane
    but so bright we can’t seem to get over them. He kisses her. I remember
    that. He falls to his knee. Fool, fool. He plucks something from his pocket
    that is not an egg. It cannot be seen, but we know. Fool. What do I know?
  </>,
  <div className="text-lg sm:text-xl md:text-2xl font-semibold text-center">
    ***
  </div>,
  <>
    <span className="text-lg sm:text-xl md:text-2xl font-semibold">T</span>here
    is no objectivity here. I am drunk. It is night. I see nothing besides the
    weepy green and yellow lights at the ends of docks. I do not see the
    celebratory fireworks, but I hear them, we all do, held together over the
    water in even and prolonged dissipation. He did not return today, neither by
    himself nor with company. The goose did not fly home today, which is to be
    expected.
  </>,
]

export default Writings
