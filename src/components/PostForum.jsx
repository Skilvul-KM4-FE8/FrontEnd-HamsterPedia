import axios from "axios";
import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { Col, Container, Row, Button } from "react-bootstrap";
import "./../styles/forum.css";

import AOS from "aos";
import "aos/dist/aos.css";

function PostForum() {
  const [cards, setCard] = useState([])

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  useEffect(() => {
    axios(
      "https://backend-hamsterpedia.vercel.app/allposts"
    ).then(result => setCard(result.data))
  }, [])

  return (
    <>
            {cards.map(item => (
            <div className="a-container" key={item.id} data-aos="zoom-in" data-aos-duration="1000">
                <Row>
                    <div className="col-lg-8" data-aos="zoom-in" data-aos-duration="1000">
                        <div className="list-post">
                            <Card.Title className="post-title">{item.author}</Card.Title>
                            <Card.Text className="post-desc">{item.description}</Card.Text>
                            <Card.Img src={item.image} id="post-img" className="img-fluid"/>
                            <hr></hr>
                            <div>
                                <input placeholder="tambahkan komentar" className="post-comment"></input>
                            </div>
                        </div>
                    </div>
                </Row>
            </div>
            ))}
    </>
  )
}

export default PostForum;