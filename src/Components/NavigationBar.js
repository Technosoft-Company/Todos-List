import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function NavigationBar(props) {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Link to="/"><Navbar.Brand>{props.title}</Navbar.Brand></Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link to="/" style={{ paddingRight: '1rem', textDecoration: 'none', color: 'white' }}>Home</Link>
          <Link to="/about" style={{ paddingRight: '1rem', textDecoration: 'none', color: 'white' }}>About</Link>
        </Nav>
        {props.searchBar ? <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form> : ""}
      </Navbar.Collapse>
    </Navbar>
  );
}
NavigationBar.defaultProps = {
  title: "Technosoft",
  searchBar: false
}
NavigationBar.propTypes = {
  title: PropTypes.string,
  searchBar: PropTypes.bool.isRequired
}

export default NavigationBar;