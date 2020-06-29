import { Provider } from 'mobx-react'
import { useStore } from '../store'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App({ Component, pageProps }) {
  const store = useStore(pageProps.initialState)
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}
