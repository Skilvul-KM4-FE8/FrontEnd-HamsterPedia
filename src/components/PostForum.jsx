import axios from "axios";
import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { Col, Container, Row, Button } from "react-bootstrap";
import "./../styles/forum.css";
import Send from "./../assets/icon/send.png"

import AOS from "aos";
import "aos/dist/aos.css";

function PostForum() {
  // GET POST
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

  // POST COMMENT
        const [author, setAuthor] = useState('');
        const [comment, setComment] = useState('');
        const [postId, setPostId] = useState('');

        const handleSubmit = async (e) => {
            e.preventDefault()
            const formData = new FormData();
            formData.append('author', author);
            formData.append('comment', comment);
            formData.append('postsId', postId);

            console.log(formData)

            try {
                fetch("https://backend-hamsterpedia.vercel.app/addcomment/:idPost", {
                    method: 'POST',
                    body : formData,
                    author: author,
                    comment: comment,
                    postsId: postId    
                })

                if (!response.ok) {
                    throw new Error('Upload gagal')
                }

                const data = await response.json()
                console.log(data)

            } catch (e) {
                console.log("error", e)
            }
        }

  // // GET COMMENT
  // useEffect(() => {
  //   axios(
  //     "https://backend-hamsterpedia.vercel.app/addcomment/:idPost"
  //   ).then(result => setCard(result.data))
  // }, [])
  
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
                            <hr></hr> 
                            {/* POST COMMENT */}
                            <form className="form-comment" onSubmit={handleSubmit}>
                                <input placeholder="Nama" className="comment-name" value={author} onChange={e => setAuthor(e.target.value)}/>
                                <input placeholder="Tambahkan Komentar" className="comment-desc" value={comment} onChange={e => setComment(e.target.value)}/>
                                <Button className="new-comment" type="submit" onClick={handleSubmit} value={postId} onChange={e => setPostId(e.target.value)}> <img src={Send}></img> </Button>
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