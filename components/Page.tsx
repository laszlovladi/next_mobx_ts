import React from 'react'
import Link from 'next/link'
import { inject, observer } from 'mobx-react'
import Clock from './Clock'
import { toJS } from 'mobx';

@inject('store')
@observer
class Page extends React.Component {
  componentDidMount() {
    this.props.store.getData()
  }

  render() {
    return (
      <div>
        {console.log('props fropm page', this.props.store)}
        {console.log('props fropm page', toJS(this.props.store.employees))}

        {/* <h1>{this.props.title}</h1>
        {/* <Clock
          timeString={this.props.store.timeString}
          light={this.props.store.light}
        /> */}
        <nav>
          <Link href={this.props.linkTo}>
            <a>Navigate</a>
          </Link>
        </nav> 
      </div>
    )
  }
}

export default Page
