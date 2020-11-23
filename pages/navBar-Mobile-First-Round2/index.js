import React, {useState, useMemo} from 'react'
import useOnclickOutside from 'react-cool-onclickoutside'
import styles from './drawervertical.module.scss'
import Button from '@s-ui/react-atom-button'
import AtomInput from '@s-ui/react-atom-input'
import MoleculeAvatar, {AVATAR_SIZES} from '@s-ui/react-molecule-avatar'
import Link from 'next/link'

export default function Dropdown() {
  const [CallToActionState, setCallToActionState] = useState(
    styles.arrowPointingDown
  )
  const [layerState, setLayerState] = useState()
  const [disabled, setDisabled] = useState(true)
  const [CTAToggleActive, setCTAToggleActive] = useState(false)
  const [LoggedStatus, setLoggedStatus] = useState(true)
  const [subMenuVisible, setsubMenuVisible] = useState(false)
  const [whichSubmenu, setwhichSubmenu] = useState()
  const [UserIsAttemptinglog, setUserIsAttemptinglog] = useState(false)

  function ClickCTAToggleActive() {
    // OK console.log('ClickCTAToggleActive')
    return CTAToggleActive ? Closed() : Opended()
  }

  const TheLoginButton = useMemo(() => {
    // ok console.log('TheLoginButton')
    return TheLoginButtonActioned()
  }, [UserIsAttemptinglog])

  function TheLoginButtonActioned() {
    // ok console.log('TheLoginButtonActioned')
    return UserIsAttemptinglog ? success : emptyState
  }

  const backFromSubMenu = () => {
    // OK console.log('backFromSubMenu')
    setsubMenuVisible(false)
  }
  const goToMyAccount = () => {
    // OK console.log('goToMyAccount')
    setsubMenuVisible(true)
    setwhichSubmenu(1)
  }
  const goToMyCredits = () => {
    // OK console.log('goToMyCredits')
    setsubMenuVisible(true)
    setwhichSubmenu(0)
  }

  const subMenu = () => {
    // OK console.log('subMenu')
    return whichSubmenu ? myAccount() : myCredits()
  }
  const NavigationMenuLoggedInWithMemo = useMemo(() => {
    // OK console.log('NavigationMenuLoggedInWithMemo')
    return NavigationMenuLoggedIn()
  }, [subMenuVisible])

  function NavigationMenuLoggedIn() {
    // OK console.log('NavigationMenuLoggedIn')
    return subMenuVisible ? subMenu() : Initial()
  }

  function doLogOut() {
    // OK console.log('dologout')
    setLayerState(styles.layerdrawerVerticalOff)
    setTimeout(() => {
      setLoggedStatus(false)
      setCallToActionState(styles.arrowPointingDown)
      setDisabled(true)
      setCTAToggleActive(false)
      setUserIsAttemptinglog(false)
    }, 300)
  }

  function doLogIn() {
    // OK console.log('doLogIn')
    setUserIsAttemptinglog(true)
    setTimeout(() => {
      setLayerState(styles.layerdrawerVerticalOff)
      setCallToActionState(styles.arrowPointingDown)
      setsubMenuVisible(false)
      setDisabled(true)
      setCTAToggleActive(false)
    }, 500)
    setTimeout(() => {
      setLoggedStatus(true)
    }, 800)
  }

  const Closed = () => {
    // OK console.log('closed')
    setLayerState(styles.layerdrawerVerticalOff)
    setCallToActionState(styles.arrowPointingDown)
    setDisabled(!disabled)
    setCTAToggleActive(prevValue => !prevValue)
  }

  const Opended = () => {
    // OK console.log('opened')
    setLayerState(styles.layerdrawerVerticalOn)
    setCallToActionState(styles.CTAinvisible)
    setDisabled(!disabled)
    setCTAToggleActive(true)
    setsubMenuVisible(false)
  }

  const ref = useOnclickOutside(
    () => {
      // OK console.log('ref')
      setLayerState(styles.layerdrawerVerticalOff)
      setCallToActionState(styles.arrowPointingDown)
      setDisabled(!disabled)
      setCTAToggleActive(prevValue => !prevValue)
    },
    {disabled}
  )

  const ActionsAreaWithMemo = useMemo(() => {
    // ok     console.log('ActionsAreaWithMemo')
    return ActionsArea()
  }, [CTAToggleActive, LoggedStatus])

  function ActionsArea() {
    // ok console.log('ActionsArea')
    return LoggedStatus ? loggedIn : loggedOut
  }

  const NavigationMenu = () => {
    /// /// // / / / // / /
    /// / // /
    /// ///
    ///
    // console.log('NavigationMenu')
    return LoggedStatus
      ? NavigationMenuLoggedInWithMemo
      : NavigationMenuLoggedOutWithMemo
  }

  function loggedIn() {
    return (
      <div className={styles.actionsArea + ' ' + CallToActionState}>
        <Button
          tabIndex={0}
          color="neutral"
          design="flat"
          className={'sui-AtomButton--empty' + ' ' + styles.seachbtn}
        >
          <img alt="icon burguer-menu" src="img/search.svg" />
        </Button>
        <Button
          tabIndex={0}
          color="neutral"
          design="flat"
          className={'sui-AtomButton--empty' + ' ' + styles.seachbtn}
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
          onClick={ClickCTAToggleActive}
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
            className={styles.buttonClose}
            alt="icon burguer-menu"
            src="img/chevron_up.svg"
          />
        </div>
      </div>
    )
  }

  function myCredits() {
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
              <img alt="icon burguer-menu" src="img/credits.svg" />
              <span className={styles.label}>Recargar créditos</span>
            </li>
            <li>
              <img alt="icon burguer-menu" src="img/mis_recargas.svg" />
              <span className={styles.label}>Mis recargas de créditos</span>
            </li>
            <li>
              <img alt="icon burguer-menu" src="img/last_movements.svg" />
              <span className={styles.label}>Últimos movimientos</span>
            </li>
            <hr className={styles.menu_divisor} />
            <li>
              <img alt="icon burguer-menu" src="img/destacar.svg" />
              <span className={styles.label}>Destacatar anuncios</span>
            </li>
            <li>
              <img alt="icon burguer-menu" src="img/subasta.svg" />
              <span className={styles.label}>Poner mi anuncio primero</span>
            </li>
          </ul>
        </nav>
      </>
    )
  }

  function myAccount() {
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
            <li>
              <img alt="icon burguer-menu" src="img/privacy.svg" />
              <span className={styles.label}>Gestionar privacidad</span>
            </li>
            <li>
              <img alt="icon burguer-menu" src="img/datos.svg" />
              <span className={styles.label}>Descargar mis datos</span>
            </li>
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

  // const Whatever = useMemo(() => {
  //   return Initial()
  // }, [])

  function Initial() {
    // not being called evertime

    return (
      <>
        <nav
          aria-labelledby="navigation menu"
          className={styles.navigation_menu}
        >
          <ul>
            {/* <li onClick={doLogOut}> */}
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
            <li onClick={goToMyCredits}>
              <img alt="icon burguer-menu" src="img/credits.svg" />
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

  const NavigationMenuLoggedOutWithMemo = useMemo(() => {
    // OK console.log('NavigationMenuLoggedInWithMemo')
    return NavigationMenuLoggedOut()
  }, [UserIsAttemptinglog])

  function NavigationMenuLoggedOut() {
    // OK console.log('NavigationMenuLoggedOut')
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

            <TheLoginButton />
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
  }

  function emptyState() {
    /// ///////////////////// this one is called 4 times
    console.log('emptyState')
    return (
      <Button
        tabIndex={0}
        color="primary"
        design="solid"
        fullWidth
        isSubmit
        className={'sui-AtomButton--empty' + ' ' + styles.seachbtn}
        onClick={doLogIn}
      >
        Inicia sesión
      </Button>
    )
  }
  function success() {
    /// ///////////////////// this one is called 4 times
    //    console.log('success')
    return (
      <Button
        tabIndex={0}
        color="primary"
        design="solid"
        fullWidth
        className={'sui-AtomButton--empty' + ' ' + styles.seachbtn}
        isLoading
        isSubmit
      >
        Log-in
      </Button>
    )
  }
  function loggedOut() {
    /// ///////////////////// this one is called 4 times on REF console.log('loggedOut')
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

        <div className={styles.buttonCTA} onClick={ClickCTAToggleActive}>
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

          <ActionsAreaWithMemo />
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
