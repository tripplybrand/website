import { NextPage } from 'next'
import Link from 'next/link'

const Poems: NextPage = () => {
  return (
    <ul className="w-max m-auto p-16">
      <li>
        <Link href="/scroll-poems/jakes-parade">
          <a>Jake&apos;s Parade</a>
        </Link>
      </li>
      <li>
        <Link href="/scroll-poems/lapsang-souchong">
          <a>Lapsang Souchong</a>
        </Link>
      </li>
      <li>
        <Link href="/scroll-poems/corrective-lenses">
          <a>Corrective Lenses</a>
        </Link>
      </li>
    </ul>
  )
}

export default Poems
