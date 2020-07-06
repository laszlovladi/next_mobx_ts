import { useRouter } from 'next/router'
import NavigationBar from  '../../components/NavigationBar'
import { inject, observer } from 'mobx-react';
import { Button } from 'reactstrap';
import Link from 'next/link';

const Employee = inject("store")(observer((props: any) => {
  const router = useRouter()
  const { id } = router.query

  if(props.store.employees){}
  const { name, username, email, phone, website, address, company } = props.store.employees[Number(id)]
  const { street, suite, city, zipcode, geo } = address
  const { lat, lng } = geo
  const { catchPhrase, bs } = company
  const compname = company.name
  return (
    <>
      <NavigationBar />
      <div className='container py-4'>
        <div className='col-md-12'>
          <div className='card p-2 bg-light'>
            <h2 className="text-secondary mb-4">{name}</h2>
            <div className="row">
              <div className="col-4">
                <p className="text-secondary"><b>Username:</b> {username}</p>
                <p className="text-secondary"><b>Email:</b> {email}</p>
                <p className="text-secondary"><b>Phone:</b> {phone}</p>
                <p className="text-secondary"><b>Website:</b> {website}</p>
              </div>
              <div className="col-4">
                <p className="text-secondary"><b>Address:</b></p>
                <p className="text-secondary">{street} {suite}</p>
                <p className="text-secondary">{city} {zipcode}</p>
                <p className="text-secondary">{lat}, {lng}</p>
              </div>
              <div className="col-4">
                <p className="text-secondary"><b>Company:</b></p>
                <p className="text-secondary">{compname}</p>
                <p className="text-secondary">{catchPhrase}</p>
                <p className="text-secondary">{bs}</p>
              </div>
            </div>
            <div className="row">
              <div className="col-2">
                <Button color="primary">
                  <Link href="/">
                    <p className="text-white mb-0">Back to list</p>
                  </Link>
                </Button>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}))

export default Employee