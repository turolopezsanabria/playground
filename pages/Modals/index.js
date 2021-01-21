import styles from './modals.module.scss'
import MoleculeModal from '@s-ui/react-molecule-modal'
import Button from '@s-ui/react-atom-button'
import MoleculeSelect from '@s-ui/react-molecule-select'
import AtomInput from '@s-ui/react-atom-input'
import MoleculeInputField from '@s-ui/react-molecule-input-field'

export default function NoHeaderModal() {
  const IconClose = () => (
    <svg viewBox="0 0 24 24">
      <path
        id="a"
        d="M13.42 12l4.79-4.8a1 1 0 0 0-1.41-1.41L12 10.58 7.21 5.79A1 1 0 0 0 5.8 7.2l4.79 4.8-4.79 4.79a1 1 0 1 0 1.41 1.41L12 13.41l4.8 4.79a1 1 0 0 0 1.41-1.41L13.42 12z"
      />
    </svg>
  )
  return (
    <div>
      {/* header="My new brand modal" floatingIconClose */}
      <MoleculeModal isOpen floatingIconClose iconClose={<IconClose />}>
        <h1 className={styles.heading}>
          Lorem ipsum dolor sit amet, consectetur adipis
        </h1>
        <p className={styles.paragraph}>
          Nunc dignissim porttitor gravida. Phasellus lacus odio, porta id
          euismod viverra, lobortis id sapien.
        </p>
        {/* <AtomInput
          tabIndex={0}
          type="password"
          name="email"
          placeholder="Visita Concertada"
        /> */}
        <div className={styles.elInput}>
          <MoleculeInputField
            id="comments"
            label="Text"
            placeholder="Lorem ipsum"
          />
          {/* <MoleculeSelect /> */}
        </div>
        <Button color="primary" fullWidth design="solid">
          Button
        </Button>
      </MoleculeModal>
    </div>
  )
}
