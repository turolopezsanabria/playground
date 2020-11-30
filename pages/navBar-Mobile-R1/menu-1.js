import React from 'react'
import styles from './drawervertical.module.scss'
import MoleculeAvatar, {AVATAR_SIZES} from '@s-ui/react-molecule-avatar'

const NavigationMenu = () => {
  return (
    <>
      <nav aria-labelledby="navigation menu" className={styles.navigation_menu}>
        <ul>
          <li>
            <img alt="icon burguer-menu" src="img/search.svg" />
            <span className={styles.label}>Buscar</span>
          </li>
          <hr className={styles.menu_divisor} />
          <li>
            <MoleculeAvatar
              size={AVATAR_SIZES.SMALL}
              name="John Maplethorp"
              src="img/user-2.png"
            />
            <span className={styles.label}>Mi cuenta</span>
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

export default NavigationMenu
