import IndexPage from '../components/IndexPage'
import { Employee } from '../store'
import { InferGetServerSidePropsType } from 'next'
import 'mobx-react-lite/batchingForReactDom'


function Index({ initialState }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return <IndexPage title = "Simple List"/>
}

export const getServerSideProps = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users`) //   http://dummy.restapiexample.com/api/v1/employees
  const data = await res.json()
  const employees: Array<Employee> = data
  return { props: { initialState: { employees: employees } } }
}

export default Index