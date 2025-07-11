import '@code-hike/mdx/styles'
import 'config/code-hike.scss'
import '../styles/index.css'



import { AppProps } from 'next/app'
import Head from 'next/head'
import { CommandProvider } from 'ui-patterns/CommandMenu'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <CommandProvider>
        <Component {...pageProps} />
      </CommandProvider>
    </>
  )
}
