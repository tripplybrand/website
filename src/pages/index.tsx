import type { NextPage } from 'next'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div className="m-auto w-max pt-16">
      <ul>
        <li>
          <Link href="/poems">
            <a>Poems</a>
          </Link>
        </li>
        <li>Short Story</li>
      </ul>
    </div>
  )
}

export default Home
