import { useRouter } from 'next/router'
import NavigationBar from  '../../components/NavigationBar'

const Employee = () => {
  const router = useRouter()
  const { id } = router.query
  // const employees = this.props.store.employees;
  console.log('router.query', router.query)
  return (
    <>
      <NavigationBar />
      <div className='container py-4'>
        <div className='col-md-12'>
          <div className='card p-2 bg-light'>
            <p>Employee: {id}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Employee