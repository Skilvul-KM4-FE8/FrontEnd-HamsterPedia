import axios from "axios";
import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { Col, Container, Row, Button } from "react-bootstrap";
import "./../styles/forum.css";
import Send from "./../assets/icon/send.png"

import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";

function PostForum({refresh}) {
  // GET POST
  const [cards, setCard] = useState([])
  const [loading, isLoading] = useState(false)

  const navigate = useNavigate();

  const fetchData = async () => {
    axios(
      "https://backend-hamsterpedia.vercel.app/post/allposts?category=General")
      .then(result => setCard(result.data)
    )
  }

  // gpt
  useEffect(() => {
    // Fetch data baru ketika prop refresh berubah menjadi true
    setCard(refresh)
    fetchData()
}, [refresh]);

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  useEffect(() => {
    fetchData()
    axios(
      "https://backend-hamsterpedia.vercel.app/post/allposts?category=General")
      .then(result => setCard(result.data)
    )
  }, [])




  // POST COMMENT
        const [author, setAuthor] = useState('');
        const [comment, setComment] = useState('');

        const handleSubmit = async (e, postId) => {
            e.preventDefault();
            isLoading(true)
            
            try {
              const response = await fetch(`https://backend-hamsterpedia.vercel.app/comment/addcomment/${postId}`, {    
                    method: "POST", 
                    headers: {
                      "Content-Type" : "application/json",
                    },
                    body: JSON.stringify({
                    author: author, 
                    comment: comment,
                  }),
                 });

                if (!response.ok) {
                    throw new Error('Upload gagal')
                }

                const data = await response.json()
                console.log(data)

                await axios("https://backend-hamsterpedia.vercel.app/post/allposts?category=General").then(result => setCard(result.data))

            } catch (e) {
                console.log("error", e)
            } 
            navigate("/forum")
            isLoading(false)
            setAuthor('')
            setComment('')
        }
  
  return (
    <>
    {/* GET POST */}
            {cards.map(item => (
            <div className="a-container" key={item.id} data-aos="zoom-in" data-aos-duration="1000">
                <Row>
                    <div className="col-lg-8" data-aos="zoom-in" data-aos-duration="1000">
                        <div className="list-post">
                            <Card.Title className="post-title">{item.author}</Card.Title>
                            <Card.Text className="post-desc">{item.description}</Card.Text>
                            <Card.Img src={item.image} id="post-img" className="img-fluid"/>
                            <hr/> 
                            <div className="show-comment">
                            {item.comments.map(c => (
                                <p><b>{c.author}</b> {c.comment}</p>
                              )
                            )}
                            </div>
                            {/* POST COMMENT */}
                            <form className="form-comment" onSubmit={(e) => handleSubmit(e, item.id)}>
                                <input placeholder="Nama" className="comment-name" value={author} onChange={e => setAuthor(e.target.value)}/>
                                <input placeholder="Tambahkan Komentar" className="comment-desc" value={comment} onChange={e => setComment(e.target.value)}/>
                                <Button className="new-comment" type="submit"> 
                                  {loading ? ("Loading") : <img src={Send}></img>}
                                  </Button>
                            </form>
                        </div>
                    </div>
                </Row>
            </div>
            ))}
    </>
  )
}

export default PostForum;