import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BsCart3 } from 'react-icons/bs';
import styles from './styles.module.scss';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export const Navbar1 = ({ setSearchTerm }) => {
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };
  const cart = useSelector((state) => state.cart);

  return (
    <Navbar expand="lg"  variant="dark" className={styles.wrapper}>
      <Container fluid>
        <Navbar.Brand as={Link} to="/" className={styles.title}>E-Commerce</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          {/* <Nav className="me-auto my-2 my-lg-0" navbarScroll>
            <Nav.Link as={Link} to="/" >
              Home
            </Nav.Link>
            <Nav.Link href="#action2">Link</Nav.Link>
            <Nav.Link href="#" >
              Link
            </Nav.Link>
          </Nav> */}
          <Form className={`mx-auto ${styles.search}`}>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={handleSearchChange}
            />
          </Form>
          <div className={styles.cartContainer}>
            <Link to="/cartItems" className={`btn btn-outline-light ${styles.cartButton}`}>
              <BsCart3 />
              <span className={`position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger ${styles.cartBadge}`}>
                {cart?.totalItems || 0}
                <span className="visually-hidden">unread messages</span>
              </span>
            </Link>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
