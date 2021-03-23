import { Container } from '@material-ui/core'
import { FC, ReactElement } from 'react'
import Header from './Header'

interface ILayout {}

const Layout: FC<ILayout> = ({ children }): ReactElement => {
  return (
    <Container>
      <Header />
      {children}
    </Container>
  )
}

export default Layout
