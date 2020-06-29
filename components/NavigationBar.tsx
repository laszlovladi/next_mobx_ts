import { Navbar, Nav, NavItem, NavbarText } from 'reactstrap';
import Link from 'next/link'

const NavigationBar = () => (
  <div>
    <Navbar color="primary" light expand="sm"> {/* expand="md" */}
        <NavbarText className="text-white" >Simple List</NavbarText>
        <Nav className="ml-auto" navbar>
          <NavItem className="ml-2">
            <Link href="/">
              <a className="text-white">Home</a>
            </Link>
          </NavItem>
          <NavItem className="ml-2">
            <Link href="/about">
              <a className="text-white">About</a>
            </Link>
          </NavItem>
        </Nav>
    </Navbar>
  </div>
);

export default NavigationBar