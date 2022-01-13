import { Container, Row, Col, Card } from 'react-bootstrap';

function App() {
  const cars = ['BMW', 'Toyota', 'Ducati', 'Ferrari'];

  // {
  //   name: "BMW",
  //   color: "Blue",
  //   image: "www.bmw.com/image/car/1"
  // }

  return (
    <Container>
      <Row>
        {cars.map((car, index) => (
          <Col className="mt-5" key={index}>
            <Card>
              <Card.Img
                variant="top"
                src="https://www.carscoops.com/wp-content/uploads/2020/09/Bugatti-Chiron-Pur-Sport-1024x555.jpg"
              />
              <Card.Body>
                <Card.Title>
                  {car} - {index}
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default App;
