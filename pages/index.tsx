import IndexPage from '../components/IndexPage'
import { Employee } from '../store'
import 'mobx-react-lite/batchingForReactDom'
import { GetServerSideProps } from 'next'


function Index() {
  return <IndexPage /> 
}

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users`) 
  const data = await res.json()
  const employees: Array<Employee> = data
  return { props: { initialState: { employees: employees } } }
}

export default Index