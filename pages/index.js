import Head from 'next/head'
import dynamic from 'next/dynamic'
const Button = dynamic(() => {return import('@s-ui/react-atom-button')}, {ssr:false})


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
