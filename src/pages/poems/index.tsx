import tw, { css } from 'twin.macro'
import { NextPage } from 'next'
import Link from 'next/link'

const Poems: NextPage = () => {
  return (
    <ul tw="w-max m-auto p-16">
      <li>
        <Link href="/poems/jakes-parade">
          <a>Jake&apos;s Parade</a>
        </Link>
      </li>
      <li>
        <Link href="/poems/lapsang-souchong">
          <a>Lapsang Souchong</a>
        </Link>
      </li>
      <li>
        <Link href="/poems/corrective-lenses">
          <a>Corrective Lenses</a>
        </Link>
      </li>
    </ul>
  )
}

export default Poems
