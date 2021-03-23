import { AppProps } from 'next/dist/next-server/lib/router/router'
import '../Styles/global.css'
import { Provider } from 'next-auth/client'
import { FC, ReactElement, useEffect } from 'react'
import { CssBaseline, ThemeProvider } from '@material-ui/core'
import theme from '../src/theme'
import { Layout } from '../Components'

interface T_app extends AppProps {}

const _app: FC<T_app> = ({ Component, pageProps }): ReactElement => {
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

export default _app
