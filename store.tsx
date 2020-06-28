import { action, observable} from 'mobx'
import { useStaticRendering } from 'mobx-react'
import { useMemo } from 'react'
// eslint-disable-next-line react-hooks/rules-of-hooks
useStaticRendering(typeof window === 'undefined')

let store

class Store {
  @observable employees = null

  getData() {
    fetch('http://dummy.restapiexample.com/api/v1/employees')
      .then(response => response.json())
      .then(data => {
        this.setEmployees(data.data);
      })
  }
  
  @action setEmployees = (employees) => {
        console.log('employees', employees)
        this.employees = employees
  }

  hydrate = (data) => {
    this.setEmployees(data)
  }
}

function initializeStore(initialData = {employees: []}) {
  const _store = store ?? new Store()

  // If your page has Next.js data fetching methods that use a Mobx store, it will
  // get hydrated here, check `pages/ssg.js` and `pages/ssr.js` for more details
  if (initialData) {
    _store.hydrate(initialData)
  }
  // For SSG and SSR always create a new store
  if (typeof window === 'undefined') return _store
  // Create the store once in the client
  if (!store) store = _store

  return _store
}

export function useStore(initialState) {
  const store = useMemo(() => initializeStore(initialState), [initialState])
  return store
}