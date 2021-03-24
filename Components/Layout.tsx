import { Session } from 'next-auth/client'
import { FC, ReactElement } from 'react'
import Header from './Header'

interface ILayout {
  children: ReactElement
  session?: Session | null
}

const Layout: FC<ILayout> = ({ children }): ReactElement => {
  return (
    <div>
      <Header />
      {children}
    </div>
  )
}

export default Layout
