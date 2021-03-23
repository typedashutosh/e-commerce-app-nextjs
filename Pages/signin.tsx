import { NextPage, NextPageContext } from 'next'
import { csrfToken, getSession } from 'next-auth/client'
import { FormEvent, useState } from 'react'
import Router from 'next/router'
import {
  TextField,
  Button,
  makeStyles,
  Container,
  Box,
  Typography
} from '@material-ui/core'

type TSignIn = {
  csrfToken: string | null
}

const useStyles = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 20,
    width: '25rem'
  }
})

const SignIn: NextPage<TSignIn> = ({ csrfToken }): JSX.Element => {
  const classes = useStyles()
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [loginError, setLoginError] = useState<string>('')

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoginError('')
    fetch('api/auth/callback/credentials', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ csrfToken, username, password })
    })
      .then((res) => {
        if (res.url.includes('?error=')) setLoginError('Bad credentials')
        else Router.push(res.url)
      })
      .catch((err) => console.log({ err }))
  }
  return (
    <div>
      <Typography variant='h1'>Login:</Typography>

      <form
        noValidate
        onSubmit={(e: FormEvent<HTMLFormElement>) => handleSubmit(e)}
      >
        <TextField
          // className={classes.field}
          variant='outlined'
          color='primary'
          required
          name='username'
          type='text'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          label='Username'
          error={!!loginError}
        />
        <TextField
          // className={classes.field}
          variant='outlined'
          color='primary'
          required
          name='password'
          type='text'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          label='Password'
          error={!!loginError}
        />
        <Button type='submit'>Sign in</Button>
        {loginError}
      </form>
    </div>
  )
}

SignIn.getInitialProps = async (context: NextPageContext) => {
  const session = await getSession(context)
  session &&
    context.res
      ?.writeHead(302, 'User found', {
        Location: `${process.env.NEXTAUTH_URL}` //? Maybe I'm wrong
      })
      .end()

  return {
    csrfToken: await csrfToken(context)
  }
}
export default SignIn
