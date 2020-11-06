import {useState} from 'react'
import Button from '@s-ui/react-atom-button'
import AtomIcon from '@s-ui/react-atom-icon'

export default function Drawer() {
  const [displayStatus, openModal] = useState(false)
  const openOrClosed = displayStatus ? 'drawer open' : 'drawer'
  return (
    <div className="App-1">
      <div className="main">
        <div className="header">
          <a href="./">
            <img alt="logo" className="logo" src="img/logo-ma.svg" />
          </a>
          <div className="actions">
            <div>
              <Button
                onClick={() => openModal(!displayStatus)}
                color="neutral"
                className="sui-AtomButton--empty"
              >
                <img alt="icon burguer-menu" src="img/burger.svg" />
              </Button>
            </div>
          </div>
        </div>
        <div className={openOrClosed}>
          <nav aria-labelledby="navigation menu" className="navigation-menu">
            <ul>
              <li>
                <AtomIcon size="medium">
                  <svg viewBox="0 0 24 24">
                    <path d="M3 7a1 1 0 110-2h11a1 1 0 010 2H3zm0 4a1 1 0 010-2h11a1 1 0 010 2H3zm0 4a1 1 0 010-2h11a1 1 0 010 2H3zm0 4a1 1 0 010-2h11a1 1 0 010 2H3zM18 7a1 1 0 010-2h3a1 1 0 010 2h-3zm0 4a1 1 0 010-2h3a1 1 0 010 2h-3zm0 4a1 1 0 010-2h3a1 1 0 010 2h-3zm0 4a1 1 0 010-2h3a1 1 0 010 2h-3z" />
                  </svg>
                </AtomIcon>
                <span className="label">Mis anuncios</span>
              </li>
              <li>
                <AtomIcon size="medium">
                  <svg viewBox="0 0 24 24">
                    <path d="M12.8 6.4c-.4.6-1.2.6-1.6 0-.9-1.3-2-1.9-3.5-1.9-2.3 0-4.2 2-4.2 4.5 0 .9.3 1.8.8 2.7.6.9 1.4 1.9 2.7 3.3l1.9 1.9c.3.2 1.1 1 1.2 1.2.4.4.7.6.8.8l.6.6c.2.2.6.2.9 0l.6-.6.8-.8c.2-.1 1-.9 1.2-1.2 1-1 1.7-1.6 1.9-1.9 1.3-1.3 2.2-2.3 2.7-3.3.6-1 .8-1.8.8-2.7 0-2.6-1.8-4.5-4.2-4.5-1.3-.1-2.5.6-3.4 1.9zm3.5-3.9c3.5 0 6.2 2.9 6.2 6.5 0 1.3-.4 2.5-1.1 3.7-.7 1.1-1.6 2.2-3 3.7l-1.9 1.9c-.3.2-1.1 1-1.2 1.2-.4.4-.7.6-.8.7l-.6.6c-1 1-2.7 1-3.7 0l-.6-.6-.8-.8c-.2-.1-1-.9-1.2-1.2-1-1-1.7-1.6-2-1.9-1.4-1.5-2.4-2.6-3-3.7-.7-1.1-1.1-2.3-1.1-3.6 0-3.6 2.7-6.5 6.2-6.5 1.7 0 3.2.6 4.3 1.8 1.2-1.2 2.6-1.8 4.3-1.8z" />
                  </svg>
                </AtomIcon>
                <span className="label">Mis favoritos</span>
              </li>
              <li className="publica">
                <AtomIcon size="medium">
                  <svg viewBox="0 0 24 24">
                    <path d="M7 4a3 3 0 00-3 3v10a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H7zm0-2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm6 11.067V17a1 1 0 01-2 0v-3.933H7a1 1 0 010-2h4V7a1 1 0 012 0v4.067h4a1 1 0 110 2h-4z" />
                  </svg>
                </AtomIcon>
                <span className="label">Publicar</span>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  )
}
