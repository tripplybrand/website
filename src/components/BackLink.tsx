import Link from 'next/link'
import { BackArrowIcon } from 'icons'

type BackLinkProps = {
  hoverFill: String
  focusVisibleColor: String
}
const BackLink = ({ hoverFill, focusVisibleColor }: BackLinkProps) => {
  return (
    <Link href="/scroll-poems">
      {/*The padding and negative margin increase the clickable area. 
      It creates a huge ring when tabbed to, but that seems better than making the area difficult to click.
      */}
      <a
        className={`focus:outline-none focus-visible:ring-1 md:focus-visible:ring-2 ${focusVisibleColor} focus-visible:ring-opacity-60
      fixed left-6 top-5 p-11 -m-11`}
      >
        <BackArrowIcon
          className={`fill-white w-6 sm:w-7 h-6 sm:h-7 ${hoverFill}`}
        />
      </a>
    </Link>
  )
}

export default BackLink
