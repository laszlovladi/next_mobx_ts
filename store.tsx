import { action, observable} from 'mobx'
import { useStaticRendering } from 'mobx-react'
import { useMemo } from 'react'
import Router from 'next/router'
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

interface Company{
  name: string,
  catchPhrase: string,
  bs: string
}

interface Geo{
  lat: string,
  lng: string
}

interface Data{
  employees: Array<Employee>
}

interface Address{
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
    employee.id = this.employees.length
    this.employees.push(employee)
    Router.push(`/details/[id]`, `/details/${employee.id}`);  //, `shallow`
  }

  @action deleteEmployee = (idx: number): void => {
    this.employees.splice(idx, 1)
  }

  @action onChange = (key: string, value: string, prefix: string): void => {
    switch(prefix+key) {
      case "name":
        this.newEmployee.name = value
        break;
      case "username":
        this.newEmployee.username = value
        break;
      case "email":
        this.newEmployee.email = value
        break;
      case "phone":
        this.newEmployee.phone = value
        break;
      case "website":
        this.newEmployee.website = value
        break;
      case "address.street":
        this.newEmployee.address.street = value
        break;
      case "address.suite":
        this.newEmployee.address.suite = value
        break;
      case "address.city":
        this.newEmployee.address.city = value
        break;
      case "address.zipcode":
        this.newEmployee.address.zipcode = value
        break;
      case "address.geo.lat":
        this.newEmployee.address.geo.lat = value
        break;
      case "address.geo.lng":
        this.newEmployee.address.geo.lng = value
        break;
      case "company.name":
        this.newEmployee.company.name = value
        break;
      case "company.catchPhrase":
        this.newEmployee.company.catchPhrase = value
        break;
    }
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
