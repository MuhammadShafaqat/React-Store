import Button from 'react-bootstrap/Button';

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { BsCart3 } from 'react-icons/bs';
import styles from './styles.module.scss'

export const Navbar1 =({setSearchTerm})=> {
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };
  return (
    <Navbar expand="lg" bg='primary' className={styles.wrapper}>
      <Container fluid>
        <Navbar.Brand href="#" className={styles.title}>App Store</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link to="/Home" >Home         
            </Nav.Link>
            <Nav.Link href="#action2">Link</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
          </Nav>
          <Form  className={styles.search}>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              
              // onChange={(e) => setSearchTerm(e.target.value)}
              onChange={handleSearchChange}
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Link</Nav.Link>
            <Button variant="outline-info" className="ms-2">
                <BsCart3 /> {/* Cart icon */}
              </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

