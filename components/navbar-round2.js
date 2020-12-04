import React, {useState, useMemo} from 'react'
import useOnclickOutside from 'react-cool-onclickoutside'
import styles from './navbar-round2.module.scss'
import Button from '@s-ui/react-atom-button'
import AtomInput from '@s-ui/react-atom-input'
import MoleculeAvatar, {AVATAR_SIZES} from '@s-ui/react-molecule-avatar'
import Link from 'next/link'
import PropTypes from 'prop-types'

// const ComponentRow = props => {
export default function NavBar() {
  const [CallToActionState, setCallToActionState] = useState()
  const [drawerState, setDrawerState] = useState()
  const [disabled, setDisabled] = useState(true)
  const [CTAToggleActive, setCTAToggleActive] = useState(false)
  const [LoggedStatus, setLoggedStatus] = useState(true)
  const [subMenuVisible, setsubMenuVisible] = useState(false)
  const [UserIsAttemptinglog, setUserIsAttemptinglog] = useState(false)

  const MenuItem = props => {
    console.log('I dont know')
    return (
      <>
        {props.isLink ? (
          <Link href={props.theLink}>
            <li>
              {props.avatar ? (
                <MoleculeAvatar
                  size={AVATAR_SIZES.SMALL}
                  name="John Maplethorp"
                  src="img/user-2.png"
                />
              ) : (
                <img alt={props.label} src={props.image} />
              )}
              <span className={styles.label}>{props.label}</span>
            </li>
          </Link>
        ) : (
          <li onClick={props.onClickEnabled ? props.theFunction : null}>
            {props.avatar ? (
              <MoleculeAvatar
                size={AVATAR_SIZES.SMALL}
                name="John Maplethorp"
                src="img/user-2.png"
              />
            ) : (
              <img alt={props.label} src={props.image} />
            )}
            <span className={styles.label}>{props.label}</span>

            {props.isSubMenu === true && (
              <img
                className={styles.nav_arrow}
                alt="navigation arrow"
                src="img/chevron_right.svg"
              />
            )}
          </li>
        )}
      </>
    )
  }
  MenuItem.propTypes = {
    avatar: PropTypes.bool,
    onClickEnabled: PropTypes.bool,
    theFunction: PropTypes.func,
    label: PropTypes.string.isRequired,
    image: PropTypes.string,
    isSubMenu: PropTypes.bool,
    isLink: PropTypes.bool,
    theLink: PropTypes.string
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
            <MenuItem
              avatar
              label="lorenaalonsosanjuan@gm..."
              onClickEnabled
              theFunction={goToMyAccount}
              isSubMenu
            />
            <MenuItem
              image="img/anuncios.svg"
              label="Mis anuncios"
              isLink
              theLink="./MisAnuncios"
            />
            <MenuItem
              image="img/messages.svg"
              label="Mis mensajes"
              isLink
              theLink="./Mensajes"
            />
            <MenuItem
              image="img/heart.svg"
              label="Mis favoritos"
              isLink
              theLink="./Favoritos"
            />
            <MenuItem image="img/bell.svg" label="Mis búsquedas" />
            <hr className={styles.menu_divisor} />
            <MenuItem
              image="img/destacar.svg"
              label="Destacar anuncios"
              isLink
              theLink="./Destacar"
            />
            <MenuItem
              image="img/MA_express.svg"
              label="Milanuncios Express"
              isLink
              theLink="./Express"
            />
            <MenuItem
              image="img/help.svg"
              label="Ayuda"
              isLink
              theLink="./Ayuda"
            />
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
            <MenuItem
              image="img/chevron_left.svg"
              label="Volver al menú"
              onClickEnabled
              theFunction={backFromSubMenu}
            />
            <hr className={styles.menu_divisor} />
            <MenuItem
              avatar
              isLink
              theLink="./MiCuenta"
              label="Datos de mi cuenta"
            />

            <MenuItem image="img/privacy.svg" label="Gestionar privacidad" />
            <MenuItem image="img/datos.svg" label="Descargar mis datos" />
            <hr className={styles.menu_divisor} />
            <MenuItem
              image="img/exit.svg"
              label="Cerrar sesión"
              onClickEnabled
              theFunction={doLogOut}
            />
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
            <MenuItem
              image="img/MA_express.svg"
              label="Milanuncios Express"
              isLink
              theLink="./Express"
            />
            <MenuItem
              image="img/help.svg"
              label="Ayuda"
              isLink
              theLink="./Ayuda"
            />
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
        <Link href="./Favoritos">
          <Button
            color="neutral"
            design="flat"
            className="sui-AtomButton--empty"
          >
            <img alt="icon burguer-menu" src="img/heart.svg" />
          </Button>
        </Link>
        <Link href="./Mensajes">
          <Button
            tabIndex={0}
            color="neutral"
            design="flat"
            className="sui-AtomButton--empty"
          >
            <img alt="icon burguer-menu" src="img/messages.svg" />
          </Button>
        </Link>
        <Link href="./Publicar">
          <button tabIndex={0} className={styles.newActionButton}>
            <img alt="icon burguer-menu" src="img/PTA_White24px.svg" />
            <span>Publicar</span>
          </button>
        </Link>
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
        <Link href="./Favoritos">
          <Button
            color="neutral"
            design="flat"
            className="sui-AtomButton--empty"
          >
            <img alt="icon burguer-menu" src="img/heart.svg" />
          </Button>
        </Link>
        <Link href="./Publicar">
          <button tabIndex={0} className={styles.newActionButton}>
            <img alt="icon burguer-menu" src="img/PTA_White24px.svg" />
            <span>Publicar</span>
          </button>
        </Link>
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
        <Link href="/navBar-Home">
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
