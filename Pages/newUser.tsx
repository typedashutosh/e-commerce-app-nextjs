import { FormEvent, useState } from 'react'
import { csrfToken, getSession } from 'next-auth/client'
import Router from 'next/router'
import { NextPage, NextPageContext } from 'next'

type TnewUser = { csrfToken: string | null }

const newUser: NextPage<TnewUser> = ({ csrfToken }): JSX.Element => {
  const [firstname, setFirstname] = useState<string>('')
  const [lastname, setLastname] = useState<string>('')
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const [firstnameError, setFirstnameError] = useState<string>('')
  const [usernameError, setUsernameError] = useState<string>('')
  const [passwordError, setpasswordError] = useState<string>('')

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault()

    setFirstnameError('')
    setUsernameError('')
    setpasswordError('')

    fetch('/api/auth/newUser', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ firstname, lastname, username, password })
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          fetch('/api/auth/callback/credentials', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              csrfToken,
              username: data.username,
              password: data.password
            })
          })
            .then((res) => Router.push(res.url))
            .catch((err) => console.log({ err }))
        } else {
          data.errors.forEach((err: any) => {
            if (!!err.path) {
              if (err.path === 'firstname') setFirstnameError(err.message)
              if (err.path === 'username') setUsernameError(err.message)
              if (err.path === 'password') setpasswordError(err.message)
            } else {
              setUsernameError(err.message)
            }
          })
        }
      })
      .catch((err: any) => console.log(err))
  }
  return (
    <div>
      Sign Up:
      <form onSubmit={(e: FormEvent<HTMLFormElement>) => handleSubmit(e)}>
        <label htmlFor='firstname'>
          Firstname
          <input
            type='text'
            name='firstname'
            id='firstname'
            value={firstname}
            onChange={(e) => {
              setFirstname(e.target.value)
            }}
          />
          {firstnameError}
        </label>
        <label htmlFor='lastname'>
          Lastname
          <input
            type='text'
            name='lastname'
            id='lastname'
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
          />
        </label>
        <label htmlFor='username'>
          Username
          <input
            type='text'
            name='username'
            id='username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          {usernameError}
        </label>
        <label htmlFor='password'>
          Password
          <input
            type='text'
            name='password'
            id='password'
            value={password}
            onChange={(e) => {
              setPassword(e.target.value)
            }}
          />
          {passwordError}
        </label>
        <button type='submit'>Signup</button>
      </form>
    </div>
  )
}

newUser.getInitialProps = async (context: NextPageContext) => {
  const session = await getSession(context)
  session &&
    context.res
      ?.writeHead(302, 'User found', {
        Location: `${process.env.NEXTAUTH_URL}`
      })
      .end()
  return {
    csrfToken: await csrfToken(context)
  }
}

export default newUser
