import { inject, observer } from 'mobx-react'
import { Table, Button } from 'reactstrap';
import React from 'react';
import { Employee } from '../store'
import Link from 'next/link';

interface deleteEmployee {
  (idx: number): void
}

interface StateItem {
  newEmployee: Employee,
  employees: Employee[],
  deleteEmployee: deleteEmployee
}

interface State {
  store: StateItem;
}

@inject('store')
@observer
class List extends React.Component<State> {
  
  handleDelete(idx: number){
    this.props.store.deleteEmployee(idx);
  }

  render() {
    return (
      <div className="list">
        <Table striped>
          <thead>
            <tr>
              <th className="text-secondary">No.</th>
              <th className="text-secondary">Name</th>
              <th className="text-secondary">Username</th>
              <th className="text-secondary">Email</th>
              <th className="text-secondary"></th>
              <th className="text-secondary"></th>
            </tr>
          </thead>
          <tbody>
            {this.props.store.employees.map((employee: Employee, idx: number) => (
              <tr className="listItem" key={idx}>
                <th className="text-secondary">{idx+1} </th>
                <td className="text-secondary">{employee.name} </td>
                <td className="text-secondary">{employee.username} </td>
                <td className="text-secondary">{employee.email}</td>
                <td className="text-secondary">
                  <Link as={`/details/${idx}`} href={`/details/[id]`}>
                    <a className="text-primary">Details</a>
                  </Link>
                </td>
                <td className="text-secondary">
                  <Button color="link p-0 text-danger" onClick={() => this.handleDelete(idx)}>Delete</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    )
  }
}

export default List
