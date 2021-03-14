import { AppProps } from 'next/dist/next-server/lib/router/router'
import 'tailwindcss/tailwind.css'
import '../Styles/global.css'
import { Provider } from 'next-auth/client'

const _app = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider session={pageProps.session}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default _app
