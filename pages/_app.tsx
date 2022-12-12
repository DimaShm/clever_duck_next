import type { AppProps } from 'next/app'
import '../styles/main.scss'
import { Inter } from '@next/font/google'

const inter = Inter({
  weight: '400',
  style: 'normal'
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`main ${inter.className}`}>
      <Component {...pageProps} />
    </main>
   ); 
}
