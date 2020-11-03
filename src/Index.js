import Button from '@s-ui/react-atom-button'

export default function Index() {
  return (
    <div className="main">
      <nav className="navigation-menu">
        <ul>
          <li>
            <Button link color="primary" href="NavBar">
              Popover
            </Button>
          </li>
          <li>
            <Button link color="primary" href="Drawer">
              Drawer{' '}
            </Button>
          </li>
        </ul>
      </nav>
    </div>
  )
}
