import { AppProps } from 'next/app'
import '../Styles/global.css'
import { Provider, Session } from 'next-auth/client'
import { ReactElement, useEffect } from 'react'
import { CssBaseline, ThemeProvider } from '@material-ui/core'
import theme from '../utils/theme'
import { Layout } from '../Components'
import { NextPage } from 'next'

interface I_app extends AppProps {
  session?: Session | null
}

const _app: NextPage<I_app> = ({ Component, pageProps }): ReactElement => {
  useEffect(() => {
    const jssStyles = document?.querySelector('#jss-server-side')
    jssStyles?.parentElement?.removeChild(jssStyles)
  }, [])
  return (
    <Provider session={pageProps.session}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </Provider>
  )
}

//_app.getInitialProps = async (context: NextPageContext) => {
//  const session = await getSession(context)
//
//  return { session }
//}
//
export default _app
