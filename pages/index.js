import Head from 'next/head'
import Button from '@s-ui/react-atom-button'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Turo's playground</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
      <nav className="navigation-menu">
        <ul>
          <li>
            <Button link size="small" color="primary" href="navBar-Popover">
              Popover
            </Button>
          </li>
          <li>
            <Button link size="small" color="primary" href="navBar-Drawer">
              Drawer
            </Button>
          </li>
        </ul>
      </nav>
      </main>
    </div>
  )
}
