import { getSession, useSession, Session } from 'next-auth/client'
import { FC, ReactElement, useEffect, useState } from 'react'

import Header from './Header'

interface ILayout {
  children: ReactElement
  auth: boolean
}

const Layout: FC<ILayout> = ({ children, auth }): ReactElement => {
  let [session, loading]: [Session | null | undefined, boolean] = useSession()
  const [HeaderElement, setHeaderElement] = useState<ReactElement>(
    <Header session={session} />
  )
  useEffect(() => {
    getSession().then((session) => {
      setHeaderElement(<Header session={session} />)
    })
  }, [auth])
  return (
    <div>
      {HeaderElement}
      {children}
    </div>
  )
}

export default Layout
