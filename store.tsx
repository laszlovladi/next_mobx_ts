import { action, observable} from 'mobx'
import { useStaticRendering } from 'mobx-react'
import { useMemo } from 'react'
// eslint-disable-next-line react-hooks/rules-of-hooks
useStaticRendering(typeof window === 'undefined')

let store: Store

export type Employee = {
  id: number,
  name: string,
  username: string,
  email: string,
  address: object,
  phone: string,
  website: string,
  company: object
}

class Store {
  @observable employees: Array<Employee> | null = null
  
  @action setEmployees = (employees: Array<Employee> | null) => {
    console.log('new employees', employees)
    this.employees = employees
  }

  @action deleteEmployee = (idx) => {
    this.employees.splice(idx, 1)
  }

  hydrate = (data) => {
    if (!data) return
    console.log('store', store)
    if (!store) this.employees = data.employees !== null ? data.employees : 'no data'
  }
}

function initializeStore(initialData = {employees: []}) {
  console.log('store', store)
  const _store: Store = store ?? new Store()

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

export function useStore(initialState: Store) {
  const store = useMemo(() => initializeStore(initialState), [initialState])
  return store
}
