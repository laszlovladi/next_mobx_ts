import { Navbar, Nav, NavItem, NavbarText } from 'reactstrap';
import Link from 'next/link'
import { FC } from 'react';

const NavigationBar: FC = () => (
  <div>
    <Navbar color="primary" light expand="sm">
        <NavbarText className="text-white" >Simple List</NavbarText>
        <Nav className="ml-auto" navbar>
          <NavItem className="mr-3">
            <Link href="/">
              <a className="text-white">Home</a>
            </Link>
          </NavItem>
          <NavItem className="mr-3">
            <Link href="/add">
              <a className="text-white">Add employee</a>
            </Link>
          </NavItem>
          <NavItem className="mr-3">
            <Link href="/about">
              <a className="text-white">About</a>
            </Link>
          </NavItem>
        </Nav>
    </Navbar>
  </div>
);

export default NavigationBar