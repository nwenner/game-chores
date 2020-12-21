import './App.css';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Game from './tutorial';

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Game Chores</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Games</Nav.Link>
          <Nav.Link href="#pricing">Preferences</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
      </Navbar>
      <Game></Game>
    </div>
  );
}

export default App;
