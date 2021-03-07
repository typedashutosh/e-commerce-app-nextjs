import { AppProps } from 'next/dist/next-server/lib/router/router'
import 'tailwindcss/tailwind.css'
import '../Styles/global.css'

const _app = ({ Component, pageProps }: AppProps) => {
  return (
    <div className='mx-4 my-2'>
      <Component {...pageProps} />
    </div>
  )
}

export default _app
