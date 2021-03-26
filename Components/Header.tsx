import { Session, signOut } from 'next-auth/client'
import { FC, MouseEvent, ReactElement, useState } from 'react'
import Link from 'next/link'
import {
  AppBar,
  Badge,
  Button,
  IconButton,
  makeStyles,
  Toolbar,
  Menu,
  MenuItem,
  Typography
} from '@material-ui/core'
import {
  AccountCircleOutlined as AccountIcon,
  Menu as MenuIcon,
  ShoppingCartOutlined as CartIcon
} from '@material-ui/icons'
import { SSL_OP_NO_COMPRESSION } from 'node:constants'

interface IHeader {
  session: Session | null | undefined
}

const useStyles = makeStyles({
  title: {
    marginRight: 'auto',
    cursor: 'pointer'
  }
})

const Header: FC<IHeader> = ({ session }): ReactElement => {
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const options = [
    'None',
    'Atria',
    'Callisto',
    'Dione',
    'Ganymede',
    'Hangouts Call',
    'Luna',
    'Oberon',
    'Phobos',
    'Pyxis',
    'Sedna',
    'Titania',
    'Triton',
    'Umbriel'
  ]
  return (
    <AppBar position='sticky'>
      <Toolbar>
        <IconButton>
          <MenuIcon style={{ color: 'white' }} />
        </IconButton>
        <Link href='/'>
          <Typography className={classes.title}>E-Comm</Typography>
        </Link>

        <Button
          aria-label='more'
          aria-controls='long-menu'
          aria-haspopup='true'
          onClick={(e) => {
            setAnchorEl(e.currentTarget)
          }}
          startIcon={<AccountIcon style={{ color: 'white' }} />}
        >
          {!!session && session.user.user.firstname}
          {!session && 'Account'}
        </Button>
        <Menu
          id='long-menu'
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={() => setAnchorEl(null)}
          getContentAnchorEl={undefined}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        >
          {!!session && (
            <div>
              <Link href='/settings'>
                <MenuItem onClick={() => setAnchorEl(null)}>Settings</MenuItem>
              </Link>
              <MenuItem
                onClick={() => {
                  setAnchorEl(null)
                  signOut()
                }}
              >
                Logout
              </MenuItem>
            </div>
          )}
          {!session && (
            <div>
              <Link href='/signin'>
                <MenuItem onClick={() => setAnchorEl(null)}>Login</MenuItem>
              </Link>
              <Link href='/new_user'>
                <MenuItem onClick={() => setAnchorEl(null)}>Register</MenuItem>
              </Link>
            </div>
          )}
        </Menu>
        {!!session && (
          <Link href='/cart'>
            <IconButton>
              <Badge badgeContent={5} color='secondary'>
                <CartIcon style={{ color: 'white' }} />
              </Badge>
            </IconButton>
          </Link>
        )}
      </Toolbar>
    </AppBar>
  )
}

export default Header
