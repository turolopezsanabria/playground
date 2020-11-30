import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="pop">
      <Head>
        <title>turo's playground</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
      </Head>
      <main className="home">
        <nav className="home-navigation">
          <h1>
            turo's playground
            <a
              target="_blank"
              href="https://github.com/turolopezsanabria/playground"
            >
              Code in github
            </a>
          </h1>
          <ul>
            {/* <li>
              <Link href="/navBar-Popover">
                <a>ABC Popover</a>
              </Link>
            </li>
            <li>
              <Link href="/navBar-Drawer">
                <a>ABC Drawer Lateral</a>
              </Link>
            </li> */}
            <li>
              <Link href="/navBar-Mobile-First-Round3">
                <a>NavBar</a>
              </Link>
            </li>
          </ul>
        </nav>
      </main>
    </div>
  )
}
