import '@/styles/globals.css'
import { motion , AnimatePresence } from 'framer-motion'
export default function App({ Component, pageProps }) {
  return (
  <AnimatePresence>
  <Component {...pageProps} />
  </AnimatePresence>
  )
}
