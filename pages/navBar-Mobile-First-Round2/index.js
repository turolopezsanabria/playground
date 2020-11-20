import React, {useState} from 'react'
import useOnclickOutside from 'react-cool-onclickoutside'
import styles from './drawervertical.module.scss'
import Button from '@s-ui/react-atom-button'
import AtomInput from '@s-ui/react-atom-input'
import MoleculeAvatar, {AVATAR_SIZES} from '@s-ui/react-molecule-avatar'
import Link from 'next/link'

export default function Dropdown() {
  const [CallToActionState, setCallToActionState] = useState(styles.CTAvisible)
  const [layerState, setLayerState] = useState()
  const [disabled, setDisabled] = useState(true)
  const [CTAToggle, setCTAToggle] = useState()
  const [LoggedStatus, setLoggedStatus] = useState(false)

  function ClickCTAToggle() {
    return CTAToggle ? Closed() : Opended()
  }

  const doLogOut = () => {
    setTimeout(() => {
      setLoggedStatus(false)
      setLayerState(styles.layerdrawerVerticalOff)
      setCallToActionState(styles.CTAinvisible)
      setDisabled(true)
      setCTAToggle(false)
      console.log('doLogOut')
    }, 500)
  }

  const doLogIn = () => {
    setTimeout(() => {
      setLoggedStatus(true)
      setLayerState(styles.layerdrawerVerticalOff)
      setCallToActionState(styles.CTAinvisible)
      setDisabled(true)
      setCTAToggle(false)
      console.log(Closed)
    }, 500)
  }

  const Closed = () => {
    setLayerState(styles.layerdrawerVerticalOff)
    setCallToActionState(styles.CTAvisible)
    setDisabled(!disabled)
    setCTAToggle(prevValue => !prevValue)
  }

  const Opended = () => {
    setLayerState(styles.layerdrawerVerticalOn)
    setCallToActionState(styles.CTAinvisible)
    setDisabled(!disabled)
    setCTAToggle(true)
  }

  const ref = useOnclickOutside(
    () => {
      setLayerState(styles.layerdrawerVerticalOff)
      setCallToActionState(styles.CTAvisible)
      setDisabled(!disabled)
      setCTAToggle(prevValue => !prevValue)
      console.log('ref' + disabled)
    },
    {disabled}
  )

  const ActionsArea = () => {
    return LoggedStatus ? loggedIn() : loggedOut()
  }

  const NavigationMenu = () => {
    return LoggedStatus ? NavigationMenuLoggedIn() : NavigationMenuLoggedOut()
  }

  const loggedIn = () => {
    return (
      <div className={styles.actionsArea + ' ' + CallToActionState}>
        <Button
          tabIndex={0}
          color="neutral"
          design="flat"
          className={'sui-AtomButton--empty' + ' ' + styles.seachbtn}
        >
          <img alt="icon burguer-menu" src="img/messages.svg" />
        </Button>
        <Button
          tabIndex={0}
          color="neutral"
          design="flat"
          className={'sui-AtomButton--empty' + ' ' + styles.seachbtn}
        >
          <img alt="icon burguer-menu" src="img/search.svg" />
        </Button>
        <button tabIndex={0} className={styles.newActionButton}>
          <img alt="icon burguer-menu" src="img/PTA_White24px.svg" />
          <span>Publicar</span>
        </button>

        <div tabIndex={0} className={styles.buttonCTA} onClick={ClickCTAToggle}>
          <MoleculeAvatar
            size={AVATAR_SIZES.MEDIUM}
            name="John Maplethorp"
            src="img/user-2.png"
          >
            {' '}
            <MoleculeAvatar.Badge status="success" />
          </MoleculeAvatar>
          <img
            className={styles.buttonClose}
            alt="icon burguer-menu"
            src="img/chevron_up.svg"
          />
        </div>
      </div>
    )
  }
  const NavigationMenuLoggedIn = () => {
    return (
      <>
        <nav
          aria-labelledby="navigation menu"
          className={styles.navigation_menu}
        >
          <ul>
            <li onClick={doLogOut}>
              <MoleculeAvatar
                size={AVATAR_SIZES.SMALL}
                name="John Maplethorp"
                src="img/user-2.png"
              />
              <span className={styles.label}>john.maplethorp@gmail.com</span>
              <img
                className={styles.nav_arrow}
                alt="navigation arrow"
                src="img/chevron_right.svg"
              />
            </li>
            <li>
              <img alt="icon burguer-menu" src="img/anuncios.svg" />
              <span className={styles.label}>Mis anuncios</span>
            </li>
            <li>
              <img alt="icon burguer-menu" src="img/messages.svg" />
              <span className={styles.label}>Mis mensajes</span>
            </li>
            <li>
              <img alt="icon burguer-menu" src="img/heart.svg" />
              <span className={styles.label}>Mis favoritos</span>
            </li>
            <li>
              <img alt="icon burguer-menu" src="img/bell.svg" />
              <span className={styles.label}>Mis búsquedas</span>
            </li>
            <li>
              <img alt="icon burguer-menu" src="img/credit.svg" />
              <span className={styles.label}>Mis creditos</span>
              <img
                className={styles.nav_arrow}
                alt="navigation arrow"
                src="img/chevron_right.svg"
              />
            </li>
            <hr className={styles.menu_divisor} />
            <li>
              <img alt="icon burguer-menu" src="img/destacar.svg" />
              <span className={styles.label}>Destacar anuncios</span>
            </li>
            <li>
              <img alt="icon burguer-menu" src="img/MA_express.svg" />
              <span className={styles.label}>Milanuncios Express</span>
            </li>
            <li>
              <img alt="icon burguer-menu" src="img/help.svg" />
              <span className={styles.label}>Ayuda</span>
            </li>
          </ul>
        </nav>
      </>
    )
  }

  const NavigationMenuLoggedOut = () => {
    return (
      <>
        <nav
          aria-labelledby="navigation menu"
          className={styles.navigation_menu}
        >
          <form>
            <AtomInput
              tabIndex={0}
              type="text"
              name="email"
              placeholder="eMail"
            />
            <AtomInput
              tabIndex={0}
              type="password"
              name="email"
              placeholder="Password"
            />

            <Button
              tabIndex={0}
              color="primary"
              design="solid"
              fullWidth
              className={'sui-AtomButton--empty' + ' ' + styles.seachbtn}
              isButton
              onClick={doLogIn}
            >
              Log-in
            </Button>
          </form>
          <ul>
            {/* <li
              onClick={() => {
                setLoggedStatus(true)
              }}
            >
              <MoleculeAvatar size={AVATAR_SIZES.SMALL} />
              <span className={styles.label}>Inicia Sesión</span>
            </li> */}

            <hr className={styles.menu_divisor} />

            <li>
              <img alt="icon burguer-menu" src="img/MA_express.svg" />
              <span className={styles.label}>Milanuncios Express</span>
            </li>
            <li>
              <img alt="icon burguer-menu" src="img/help.svg" />
              <span className={styles.label}>Ayuda</span>
            </li>
          </ul>
        </nav>
      </>
    )
  }
  const loggedOut = () => {
    return (
      <div className={styles.actionsArea + ' ' + CallToActionState}>
        <Button
          color="neutral"
          design="flat"
          className={'sui-AtomButton--empty' + ' ' + styles.seachbtn}
        >
          <img alt="icon burguer-menu" src="img/search.svg" />
        </Button>
        <button className={styles.newActionButton}>
          <img alt="icon burguer-menu" src="img/PTA_White24px.svg" />
          <span>Publicar</span>
        </button>

        <div className={styles.buttonCTA} onClick={ClickCTAToggle}>
          <MoleculeAvatar size={AVATAR_SIZES.MEDIUM} />
          <img
            className={styles.buttonClose}
            alt="icon burguer-menu"
            src="img/chevron_up.svg"
          />
        </div>
      </div>
    )
  }

  return (
    <div className="App_1 fade">
      <div className="main_992">
        <div className={styles.header + ' ' + 'ignore-onclickoutside'}>
          <Link href="./">
            <>
              <img
                alt="logo"
                className={styles.logoDesktop}
                src="img/logo-ma.svg"
              />

              <img
                alt="logo"
                className={styles.logoMobile}
                src="img/logo-ma-launcher.svg"
              />
            </>
          </Link>

          <ActionsArea />
        </div>

        <div
          ref={ref}
          className={layerState + ' ' + styles.layerdrawerVertical}
        >
          <NavigationMenu />
        </div>
      </div>
    </div>
  )
}
