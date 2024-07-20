import axios from "axios";
import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { Row, Button } from "react-bootstrap";
import "./../styles/forum.css";
import Send from "./../assets/icon/send.png";

import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";

function PostForum({ refresh }) {
  const [cards, setCard] = useState([]);
  const [loading, isLoading] = useState(false);

  const navigate = useNavigate();

  const fetchData = async () => {
    axios(
      "https://backend-hamsterpedia.vercel.app/post/allposts?category=makanan"
    ).then((result) => setCard(result.data));
  };

  useEffect(() => {
    setCard(refresh);
    fetchData();
  }, [refresh]);

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  // POST COMMENT
  const handleSubmit = async (e, postId, commentData) => {
    e.preventDefault();
    isLoading(true);

    try {
      const response = await fetch(
        `https://backend-hamsterpedia.vercel.app/comment/addcomment/${postId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(commentData),
        }
      );

      if (!response.ok) {
        throw new Error("Upload gagal");
      }

      const data = await response.json();
      console.log(data);

      await axios(
        "https://backend-hamsterpedia.vercel.app/post/allposts?category=makanan"
      ).then((result) => setCard(result.data));
    } catch (e) {
      console.log("error", e);
    }
    navigate("/forum");
    isLoading(false);
  };

  return (
    <>
      {cards.map((item) => (
        <div
          className="a-container"
          key={item.id}
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <Row>
            <div
              className="col-lg-8"
              data-aos="zoom-in"
              data-aos-duration="1000"
            >
              <div className="list-post">
                <Card.Title className="post-title">{item.author}</Card.Title>
                <Card.Text className="post-desc">{item.description}</Card.Text>
                <Card.Img
                  src={item.image}
                  id="post-img"
                  className="img-fluid"
                />
                <hr />
                <div className="show-comment">
                  {item.comments.map((c) => (
                    <p key={c.id}>
                      <b>{c.author}</b> {c.comment}
                    </p>
                  ))}
                </div>
                {/* POST COMMENT */}
                <CommentForm
                  postId={item.id}
                  loading={loading}
                  handleSubmit={handleSubmit}
                />
              </div>
            </div>
          </Row>
        </div>
      ))}
    </>
  );
}

function CommentForm({ postId, loading, handleSubmit }) {
  const [inputValues, setInputValues] = useState({
    author: "",
    comment: "",
  });

  const [activeField, setActiveField] = useState("");

  const handleInputChange = (field) => (event) => {
    setInputValues((prevValues) => ({
      ...prevValues,
      [field]: event.target.value,
    }));
    setActiveField(field);
  };

  const onSubmit = (e) => {
    handleSubmit(e, postId, inputValues);
    setInputValues({ author: "", comment: "" });
    setActiveField("");
  };

  return (
    <form className="form-comment" onSubmit={onSubmit}>
      <input
        placeholder="Nama"
        className="comment-name"
        value={inputValues.author}
        onChange={handleInputChange("author")}
        onFocus={() => setActiveField("author")}
        onBlur={() => setActiveField("")}
      />
      <input
        placeholder="Tambahkan Komentar"
        className="comment-desc"
        value={inputValues.comment}
        onChange={handleInputChange("comment")}
        onFocus={() => setActiveField("comment")}
        onBlur={() => setActiveField("")}
      />
      <Button className="new-comment" type="submit">
        {loading ? "Loading" : <img src={Send} alt="Send" />}
      </Button>
    </form>
  );
}

export default PostForum;
