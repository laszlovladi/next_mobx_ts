import { inject, observer } from 'mobx-react'
import { Table } from 'reactstrap';
import React from 'react';
import { Employee } from '../store'

@inject('store')
@observer
class List  extends React.Component<{}> {
  render() {
    const employees = this.props.store.employees;
    return (
      <div className="list">
        <Table striped>
          <thead>
            <tr>
              <th className="text-secondary">Id</th>
              <th className="text-secondary">Name</th>
              <th className="text-secondary">Salary</th>
              <th className="text-secondary">Age</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee: Employee, idx: number) => (
              <tr className="listItem" key={idx}>
                <th className="text-secondary">{employee.id} </th>
                <td className="text-secondary">{employee.employee_name} </td>
                <td className="text-secondary">{employee.employee_salary} </td>
                <td className="text-secondary">{employee.employee_age}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    )
  }
}

export default List
