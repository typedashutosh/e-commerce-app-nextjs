import { NextPage, NextPageContext } from 'next'
import { csrfToken } from 'next-auth/client'
import { FormEvent, useState } from 'react'
import Router from 'next/router'

type TSignIn = {
  csrfToken: string | null
}

const SignIn: NextPage<TSignIn> = ({ csrfToken }): JSX.Element => {
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [loginerror, setLoginerror] = useState<string>('')

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoginerror('')
    fetch('api/auth/callback/credentials', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ csrfToken, username, password })
    })
      .then((res) => {
        if (res.url.includes('?error=')) setLoginerror('Bad credentials')
        else Router.push(res.url)
      })
      .catch((err) => console.log({ err }))
  }
  return (
    <form onSubmit={(e: FormEvent<HTMLFormElement>) => handleSubmit(e)}>
      <label>
        Username
        <input
          name='username'
          type='text'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <label>
        Password
        <input
          name='password'
          type='text'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <button type='submit'>Sign in</button>
      {loginerror}
    </form>
  )
}

SignIn.getInitialProps = async (context: NextPageContext) => {
  //-  const { req, res } = context
  //-  console.log(req)
  return {
    csrfToken: await csrfToken(context)
  }
}
export default SignIn
