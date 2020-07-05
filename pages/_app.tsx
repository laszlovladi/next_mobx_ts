import { Provider } from 'mobx-react'
import { useStore } from '../store'
import 'bootstrap/dist/css/bootstrap.min.css';
import { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  const store = useStore(pageProps.initialState)
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}
