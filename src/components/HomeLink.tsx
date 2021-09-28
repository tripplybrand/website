import Link from 'next/link'

const HomeLink = () => {
  return (
    <Link href="/">
      {/*The padding and negative margin increase the clickable area. 
      It creates a huge ring when tabbed to, but that seems better than making the area difficult to click.
      */}
      <a
        className="text-sm md:text-base font-light tracking-wider underline uppercase
      text-black hover:text-matisse-red-200
      focus:outline-none focus-visible:ring-1 md:focus-visible:ring-2 focus-visible:ring-matisse-red-200 focus-visible:ring-offset-2 focus-visible:ring-opacity-60
      absolute left-6 top-5 p-11 -m-11
      "
      >
        Home
      </a>
    </Link>
  )
}

export default HomeLink
