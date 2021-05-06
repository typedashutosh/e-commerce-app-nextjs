import '../Styles/global.css'

import { NextPage, NextPageContext } from 'next'
import { Provider, getSession } from 'next-auth/client'
import { AppProps } from 'next/app'
import { ReactElement, useEffect } from 'react'

import { CssBaseline, ThemeProvider } from '@material-ui/core'

import Layout from '../Components/Layout'
import theme from '../utils/theme'
import { Session } from 'next-auth'
interface I_app_initial_props {
	session: Session | null
}

interface I_app extends I_app_initial_props, AppProps {}

const _app: NextPage<I_app, I_app_initial_props> = ({
	Component,
	pageProps,
	session
}): ReactElement => {
	useEffect(() => {
		const jssStyles = document?.querySelector('#jss-server-side')
		jssStyles?.parentElement?.removeChild(jssStyles)
	}, [])
	return (
		// <Provider session={pageProps.session}>
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Layout session={session}>
				<Component {...pageProps} />
			</Layout>
		</ThemeProvider>
		// </Provider>
	)
}

_app.getInitialProps = async (context: NextPageContext) => {
	console.log(true)
	return { session: await getSession(context) }
}

export default _app
