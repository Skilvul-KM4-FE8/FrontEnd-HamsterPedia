import axios from "axios";
import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { Col } from "react-bootstrap";
import "../styles/card-alas.css";

function CardAlasKandang() {
  const [cards, setCard] = useState([]);

  useEffect(() => {
    axios(
      "https://665b3003003609eda4601925.mockapi.io/alaskandang?page=1&limit=3"
    ).then((result) => setCard(result.data));
  }, []);

  return (
    <>
      {cards.map((item) => (
        <Col lg={{ span: 4, offset: 0 }} key={item.id} id="col-card">
          {/* </Col><Col md={4} key={item.id} id="col-card"> */}
          <div data-aos="zoom-in" data-aos-duration="1000">
            <Card className="card" id="card">
              <Card.Img variant="top" src={item.img} id="card-img" />
              <Card.Body className="card-body">
                <Card.Title className="card-title">{item.title}</Card.Title>
                <Card.Text className="card-text">{item.desc}</Card.Text>
              </Card.Body>
            </Card>
          </div>
        </Col>
      ))}
    </>
  );
}

export default CardAlasKandang;