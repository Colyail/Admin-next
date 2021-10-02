import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import { AppProvider } from '../components/data/context/AppContextApi'

function MyApp({ Component, pageProps }) {
  return (
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>
  )
}

export default MyApp