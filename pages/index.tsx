import IndexPage from '../components/IndexPage'
import { Employee } from '../store'
import { InferGetServerSidePropsType } from 'next'

function Index({ initialState }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return <IndexPage title = "Simple List"/>
}

export const getServerSideProps = async () => {
  const res = await fetch(`http://dummy.restapiexample.com/api/v1/employees`) //  https://jsonplaceholder.typicode.com/users
  const data = await res.json()
  const employees: Array<Employee> = data.data
  return { props: { initialState: { employees: employees } } }
}

export default Index