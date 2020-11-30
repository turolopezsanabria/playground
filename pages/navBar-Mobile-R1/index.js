import React, {useState} from 'react'
import useOnclickOutside from 'react-cool-onclickoutside'
import styles from './drawervertical.module.scss'
import NavigationMenu from './menu-1.js'
import Button from '@s-ui/react-atom-button'
import MoleculeAvatar, {AVATAR_SIZES} from '@s-ui/react-molecule-avatar'
import Link from 'next/link'

export default function Dropdown() {
  const [CallToActionState, setCallToActionState] = useState(styles.CTAvisible)
  const [layerState, setLayerState] = useState()
  const [disabled, setDisabled] = useState(true)
  const [CallToActionToggle, setCallToActionToggle] = useState(false)

  const CloseIttrue = () => {
    setLayerState(styles.layerdrawerVerticalOff)
    setCallToActionState(styles.CTAvisible)
    setDisabled(!disabled)
    setCallToActionToggle(prevValue => !prevValue)
    console.log('CloseIt' + disabled)
  }

  const CloseItfalse = () => {
    setLayerState(styles.layerdrawerVerticalOn)
    setCallToActionState(styles.CTAinvisible)
    setDisabled(!disabled)
    setCallToActionToggle(true)
    console.log('OpenIt' + disabled)
  }

  const ref = useOnclickOutside(
    () => {
      setLayerState(styles.layerdrawerVerticalOff)
      setCallToActionState(styles.CTAvisible)
      setDisabled(!disabled)
      setCallToActionToggle(prevValue => !prevValue)
      console.log('ref' + disabled)
    },
    {disabled}
  )

  return (
    <div className="App_1 fade">
      <div className="main_992">
        <div className={styles.header + ' ' + 'ignore-onclickoutside'}>
          <Link href="./">
            <img alt="logo" className={styles.logo} src="img/logo-ma.svg" />
          </Link>

          <div className={styles.actionsArea + ' ' + CallToActionState}>
            <button className={styles.newActionButton}>
              <img alt="icon burguer-menu" src="img/PTA_White24px.svg" />
              <span>Publicar</span>
            </button>
            <div className={styles.buttonCTA}>
              <MoleculeAvatar
                size={AVATAR_SIZES.MEDIUM}
                onClick={eval('CloseIt' + CallToActionToggle)}
                // onClick={CloseItfalse}
                name="John Maplethorp"
                src="img/user-2.png"
              />
            </div>
            <Button
              onClick={CloseIttrue}
              color="neutral"
              design="flat"
              className={'sui-AtomButton--empty' + ' ' + styles.buttonClose}
            >
              <img alt="icon burguer-menu" src="img/chevron_up.svg" />
            </Button>
          </div>
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

//   const handleKeyDown = event => {
//     if (event.key === 'Enter') {
//       console.log(Closed)
//     }
//   }
