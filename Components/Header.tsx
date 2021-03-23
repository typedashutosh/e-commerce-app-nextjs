import { FC, ReactElement } from 'react'
import {
  AppBar,
  Container,
  IconButton,
  Toolbar,
  Typography,
  Button
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import { signIn } from 'next-auth/client'
import Link from 'next/link'

interface IHeader {}

const Header: FC<IHeader> = (): ReactElement => {
  return (
    <div>
      <AppBar>
        <Toolbar>
          <IconButton>
            <MenuIcon style={{ color: 'white' }} />
          </IconButton>
          <Typography style={{ marginRight: 'auto' }}>E-Comm</Typography>
          <Button
            onClick={() => {
              signIn()
            }}
          >
            Login
          </Button>
          <Link href='/new_user'>
            <Button>Register</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header
