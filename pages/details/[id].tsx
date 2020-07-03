import { useRouter } from 'next/router'

const Employee = () => {
  const router = useRouter()
  const { id } = router.query
  // const employees = this.props.store.employees;
  // console.log('employee', employee)
  return <p>Employee: {id}</p>
}

export default Employee