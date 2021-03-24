import { FC, ReactElement } from 'react'
import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  Button,
  makeStyles
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import { signOut, Session, useSession } from 'next-auth/client'
import Link from 'next/link'

interface IHeader {
  session?: Session | null
}

const useStyles = makeStyles({
  title: {
    marginRight: 'auto',
    cursor: 'pointer'
  }
})

const Header: FC<IHeader> = (): ReactElement => {
  const classes = useStyles()
  const [session, loading] = useSession()
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
