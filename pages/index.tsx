import IndexPage from '../components/IndexPage'

export default function Index() {
  return <IndexPage title = "Simple List"/>
}

export async function getServerSideProps() {
  const res = await fetch(`http://dummy.restapiexample.com/api/v1/employees`) //  https://jsonplaceholder.typicode.com/users
  const data = await res.json()
  console.log('data from page', data)
  return { props: { initialState: { employees: data.data } } }
}