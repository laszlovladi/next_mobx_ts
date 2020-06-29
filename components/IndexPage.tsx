// import { inject, observer } from 'mobx-react'
import NavigationBar from  '../components/NavigationBar'
import List from  '../components/List'
// @inject('store')
// @observer
class IndexPage extends React.Component {
  render() {
    return (
      <div>
        <NavigationBar />
        <div className='container py-4'>
          <div className='col-md-12'>
            <div className='card p-2 bg-light'>
              <h1 className="text-secondary">Employee List</h1>
              <List />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default IndexPage