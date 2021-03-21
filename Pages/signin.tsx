import { NextPage, NextPageContext } from 'next'
import { csrfToken } from 'next-auth/client'

const SignIn: NextPage<{ csrfToken: string | null }> = ({
  csrfToken
}): JSX.Element => {
  return (
    <form method='post' action='/api/auth/callback/credentials'>
      <input
        name='csrfToken'
        type='hidden'
        defaultValue={csrfToken?.toString()}
      />
      <label>
        Username
        <input name='username' type='text' />
      </label>
      <label>
        Password
        <input name='password' type='text' />
      </label>
      <button type='submit'>Sign in</button>
    </form>
  )
}

SignIn.getInitialProps = async (context: NextPageContext) => {
  const { req, res } = context
  console.log(req)
  return {
    csrfToken: await csrfToken(context)
  }
}
export default SignIn
