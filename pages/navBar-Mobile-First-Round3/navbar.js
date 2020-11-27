import React, {useState, useMemo, Fragment} from 'react'
import useOnclickOutside from 'react-cool-onclickoutside'
import styles from './drawer.module.scss'
import Button from '@s-ui/react-atom-button'
import AtomInput from '@s-ui/react-atom-input'
import MoleculeAvatar, {AVATAR_SIZES} from '@s-ui/react-molecule-avatar'
import Link from 'next/link'

export default function NavBar() {
  const [CallToActionState, setCallToActionState] = useState()
  const [drawerState, setDrawerState] = useState()
  const [disabled, setDisabled] = useState(true)
  const [CTAToggleActive, setCTAToggleActive] = useState(false)
  const [LoggedStatus, setLoggedStatus] = useState(true)
  const [subMenuVisible, setsubMenuVisible] = useState(false)
  const [UserIsAttemptinglog, setUserIsAttemptinglog] = useState(false)

  function MenuItem({image, label}) {
    return (
      <li>
        <img alt={label} src={image} />
        <span className={styles.label}>{label}</span>
      </li>
    )
  }

  // User is Logged-in
  // Navigation Menu
  const Initial = () => {
    return (
      <>
        <nav
          aria-labelledby="navigation menu"
          className={styles.navigation_menu}
        >
          <ul>
            <li onClick={goToMyAccount}>
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
            <MenuItem image="img/anuncios.svg" label="Mis anuncios" />
            <MenuItem image="img/messages.svg" label="Mis mensajes" />
            <MenuItem image="img/heart.svg" label="Mis favoritos" />
            <MenuItem image="img/bell.svg" label="Mis búsquedas" />
            <hr className={styles.menu_divisor} />
            <MenuItem image="img/destacar.svg" label="Destacar anuncios" />
            <MenuItem image="img/MA_express.svg" label="Milanuncios Express" />
            <MenuItem image="img/help.svg" label="Ayuda" />
          </ul>
        </nav>
      </>
    )
  }

  // User is Logged-in
  // Sub navigation Menu "MyAccount"
  const myAccount = () => {
    return (
      <>
        <nav
          aria-labelledby="navigation menu"
          className={styles.navigation_menu}
        >
          <ul>
            <li onClick={backFromSubMenu}>
              <img alt="navigation arrow" src="img/chevron_left.svg" />
              <span className={styles.label}>Volver al menú</span>
            </li>
            <hr className={styles.menu_divisor} />
            <li>
              <MoleculeAvatar
                size={AVATAR_SIZES.SMALL}
                name="John Maplethorp"
                src="img/user-2.png"
              />
              <span className={styles.label}>Datos de mi cuenta</span>
            </li>
            <MenuItem image="img/privacy.svg" label="Gestionar privacidad" />
            <MenuItem image="img/datos.svg" label="Descargar mis datos" />
            <hr className={styles.menu_divisor} />
            <li onClick={doLogOut}>
              <img alt="icon burguer-menu" src="img/exit.svg" />
              <span className={styles.label}>Cerrar sesión</span>
            </li>
          </ul>
        </nav>
      </>
    )
  }

  // User is Logged-out
  // Navigation Menu in case the user is not Logged-in
  const NavigationMenuLoggedOut = useMemo(() => {
    return (
      <>
        <nav
          aria-labelledby="navigation menu"
          className={styles.navigation_menu}
        >
          <form onSubmit={() => window.alert('Submit!')}>
            <h1>Inicia sesión</h1>
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
              placeholder="Contraseña"
            />

            {UserIsAttemptinglog ? (
              <Button
                tabIndex={0}
                color="primary"
                design="solid"
                fullWidth
                className="sui-AtomButton--empty"
                isLoading
              >
                Inicia sesión
              </Button>
            ) : (
              <Button
                color="primary"
                design="solid"
                fullWidth
                isSubmit
                className="sui-AtomButton--empty"
                onClick={doLogIn}
              >
                Inicia sesión
              </Button>
            )}
          </form>
          <div className={styles.dont_have_account}>
            ¿Aún no tienes una cuenta? <a href="#"> Regístrate</a>
          </div>
          <ul>
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
  }, [UserIsAttemptinglog])

  // User is EITHER Logged-in or LoggedOut
  // Toggle Drawer visibility
  const openAndCloseTheDrawer = () => {
    return CTAToggleActive ? CloseTheDrawer() : OpenTheDrawer()
  }

  // Decide which menu to show based on Logged status
  const NavigationMenuDrawer = () => {
    return LoggedStatus ? NavigationMenuLoggedIn : NavigationMenuLoggedOut
  }

  // User is Logged-in
  // Open the submenu MyAccount
  const goToMyAccount = () => {
    setsubMenuVisible(true)
    myAccount()
  }

  // User is Logged-in
  // Hide the submenu MyAccount
  const backFromSubMenu = () => {
    setsubMenuVisible(false)
  }

  // User is Logged-in
  // Decide if the menu to show is the Initial or MyAccount
  const NavigationMenuLoggedIn = useMemo(() => {
    return subMenuVisible ? myAccount() : Initial()
  }, [subMenuVisible])

  // User is Logged-in and clicks LogOut
  function doLogOut() {
    CloseTheDrawer()
    setTimeout(() => {
      setLoggedStatus(false)
    }, 400)
  }

  // User is LoggedOut and clicks Login
  function doLogIn() {
    setUserIsAttemptinglog(true)
    setTimeout(() => {
      CloseTheDrawer()
    }, 800)
    setTimeout(() => {
      setLoggedStatus(true)
      setsubMenuVisible(false)
    }, 1200)
  }

  // User is EITHER Logged-in or LoggedOut
  // Actions to perform while closing the Drawer
  const CloseTheDrawer = () => {
    setDrawerState(styles.drawerOff)
    setCallToActionState(styles.arrowPointingUp)
    setDisabled(true)
    setCTAToggleActive(false)
  }

  // User is EITHER Logged-in or LoggedOut
  // Actions to perform while opening the Drawer
  const OpenTheDrawer = () => {
    setUserIsAttemptinglog(false)
    setDrawerState(styles.drawerOn)
    setCallToActionState(styles.arrowPointingDown)
    setDisabled(false)
    setCTAToggleActive(true)
    setsubMenuVisible(false)
  }

  // User is EITHER Logged-in or LoggedOut
  // Actions to perform when clicks outside the Drawer
  const ref = useOnclickOutside(
    () => {
      CloseTheDrawer()
    },
    {disabled}
  )

  // User is Logged-in
  // Elements of the Actions Area in the Header
  const LoggedIn = () => {
    return (
      <div className={styles.actionsArea + ' ' + CallToActionState}>
        <Button
          tabIndex={0}
          color="neutral"
          design="flat"
          className="sui-AtomButton--empty"
        >
          <img alt="icon burguer-menu" src="img/heart.svg" />
        </Button>
        <Button
          tabIndex={0}
          color="neutral"
          design="flat"
          className="sui-AtomButton--empty"
        >
          <img alt="icon burguer-menu" src="img/messages.svg" />
        </Button>
        <button tabIndex={0} className={styles.newActionButton}>
          <img alt="icon burguer-menu" src="img/PTA_White24px.svg" />
          <span>Publicar</span>
        </button>

        <div
          tabIndex={0}
          className={styles.buttonCTA}
          role="button"
          onClick={openAndCloseTheDrawer}
        >
          <MoleculeAvatar
            size={AVATAR_SIZES.MEDIUM}
            name="John Maplethorp"
            src="img/user-2.png"
          >
            {' '}
            <MoleculeAvatar.Badge status="success" />
          </MoleculeAvatar>
          <img
            className={styles.chevron}
            alt="icon burguer-menu"
            src="img/chevron_down.svg"
          />
        </div>
      </div>
    )
  }

  // User is LoggedOut
  // Elements of the Actions Area in the Header
  const LoggedOut = () => {
    return (
      <div className={styles.actionsArea + ' ' + CallToActionState}>
        <Button color="neutral" design="flat" className="sui-AtomButton--empty">
          <img alt="icon burguer-menu" src="img/heart.svg" />
        </Button>{' '}
        <button className={styles.newActionButton}>
          <img alt="icon burguer-menu" src="img/PTA_White24px.svg" />
          <span>Publicar</span>
        </button>
        <Button onClick={openAndCloseTheDrawer} color="neutral" design="solid">
          Iniciar sesión
        </Button>
      </div>
    )
  }

  // Decide which elements of the header to show basedd on logged status
  const ActionsAreaInHeader = useMemo(() => {
    return LoggedStatus ? LoggedIn : LoggedOut
  }, [CTAToggleActive, LoggedStatus])

  // This is the final component to use on all pages
  return (
    <>
      <div className={styles.header}>
        <Link href="">
          <a>
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
          </a>
        </Link>
        <ActionsAreaInHeader />
      </div>
      <div ref={ref} className={styles.drawer + ' ' + drawerState}>
        <NavigationMenuDrawer />
      </div>
    </>
  )
}