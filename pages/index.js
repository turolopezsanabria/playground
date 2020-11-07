import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="pop">
      <Head>
        <title>turo's playground</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="apple-mobile-web-app-capable" content="yes">
        <meta name="apple-mobile-web-app-status-bar-style" content="#040404">
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
            <li>
              <Link href="/navBar-Popover">
                <a>Popover</a>
              </Link>
            </li>
            <li>
              <Link href="/navBar-Drawer">
                <a>Drawer</a>
              </Link>
            </li>
          </ul>
        </nav>
      </main>
    </div>
  )
}
