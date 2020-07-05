import { action, computed, observable} from 'mobx'
import { useStaticRendering } from 'mobx-react'
import { useMemo } from 'react'
// eslint-disable-next-line react-hooks/rules-of-hooks
useStaticRendering(typeof window === 'undefined')

let store: Store

export interface Employee{
  id?: number,
  name: string,
  username: string,
  email: string,
  address: Address,
  phone: string,
  website: string,
  company: Company
}

export interface Company{
  name: string,
  catchPhrase: string,
  bs: string
}

export interface Geo{
  lat: string,
  lng: string
}

export interface Data{
  employees: Array<Employee>
}

export interface Address{
  street: string,
  suite: string,
  city: string,
  zipcode: string,
  geo: Geo
}

class Store {
  @observable employees: Array<Employee> = []
  @observable newEmployee: Employee = {
      id: undefined,
      name: "",
      username: "",
      email: "",
      address: {
        street: "",
        suite: "",
        city: "",
        zipcode: "",
        geo: {
          lat: "",
          lng: ""
        }
      },
      phone: "",
      website: "",
      company: {
        name: "",
        catchPhrase: "",
        bs: ""
      }
    }
  
  @action addEmployee = (employee: Employee): void => {
    console.log('addEmployee')
    this.employees.push(employee)
  }

  @action deleteEmployee = (idx: number): void => {
    this.employees.splice(idx, 1)
  }

  @action onChange = (key, value) => {
    console.log(key, value)
    this.newEmployee[key] = value;
    console.log('this.newEmployee[key]', this.newEmployee[key])
  }

  hydrate = (data: Data): void => {
    if (!data) return
    if (!store) this.employees = data.employees  
  }
}

function initializeStore(initialData: Data = {employees: []}) {
  // console.log('store', store)
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

export function useStore(initialState: Data) {
  const store = useMemo(() => initializeStore(initialState), [initialState])
  return store
}
