import { signOut, Session } from 'next-auth/client'
import Link from 'next/link'
import { FC, ReactElement, useEffect } from 'react'

import {
  AppBar,
  Button,
  IconButton,
  makeStyles,
  Toolbar,
  Typography
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'

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
  return (
    <AppBar position='sticky'>
      <Toolbar>
        <IconButton>
          <MenuIcon style={{ color: 'white' }} />
        </IconButton>
        <Link href='/'>
          <Typography className={classes.title}>E-Comm</Typography>
        </Link>
        {!!session && (
          <Button
            onClick={() => {
              signOut()
            }}
          >
            Logout
          </Button>
        )}
        {!session && (
          <>
            <Link href='/signin'>
              <Button>Login</Button>
            </Link>
            <Link href='/new_user'>
              <Button>Register</Button>
            </Link>
          </>
        )}
      </Toolbar>
    </AppBar>
  )
}

export default Header
