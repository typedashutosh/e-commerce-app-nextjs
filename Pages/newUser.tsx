import { ChangeEvent } from 'mongodb'
import { NextPage, NextPageContext } from 'next'
import { FormEvent, useState } from 'react'

type TnewUser = {}

const newUser: NextPage<TnewUser> = (): JSX.Element => {
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
        data.errors.forEach((err: any) => {
          if (err.path === 'firstname') setFirstnameError(err.message)
          if (err.path === 'username') setUsernameError(err.message)
          if (err.path === 'password') setpasswordError(err.message)
        })
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
        </label>
        <button type='submit'>Signup</button>
      </form>
    </div>
  )
}

//newUser.getInitialProps = async (context: NextPageContext) => {
//  return {}
//}
export default newUser
