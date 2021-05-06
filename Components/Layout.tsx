import { makeStyles } from '@material-ui/core'
import { Session } from 'next-auth'
import { getSession, useSession } from 'next-auth/client'
import { FC, ReactElement, useEffect, useState } from 'react'
import theme from '../utils/theme'
import Footer from './Footer'

import Header from './Header'

interface ILayout {
	children: ReactElement
	session: Session | null
}
const useStyles = makeStyles({
	layout: {},
	header: {},
	children: {},
	footer: {}
})
const Layout: FC<ILayout> = ({ children, session }): ReactElement => {
	const classes = useStyles()
	// let [session, loading]: [Session | null | undefined, boolean] = useSession()
	// const [HeaderElement, setHeaderElement] = useState<ReactElement>(
	//   <Header session={session} />
	// )
	// useEffect(() => {
	//   getSession().then((session) => {
	//     setHeaderElement(<Header session={session} />)
	//   })
	// }, [auth])
	return (
		<div className={classes.layout}>
			<div className={classes.header}>
				<Header session={session} />
			</div>
			<div className={classes.children}>{children}</div>
			<div className={classes.footer}>
				<Footer />
			</div>
		</div>
	)
}

export default Layout
