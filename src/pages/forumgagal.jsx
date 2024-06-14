import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../styles/forum.css";

const App = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    image: null,
  });
  const [posts, setPosts] = useState([]);
  const [comment, setComment] = useState("");

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await axios.get('https://mockapi.io/projects/666c17d949dbc5d7145c9130/forum');
      setPosts(response.data);
    } catch (error) {
      console.error('Error fetching posts', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    setFormData({
      ...formData,
      image: e.target.files[0],
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataToSubmit = new FormData();
      formDataToSubmit.append('name', formData.name);
      formDataToSubmit.append('description', formData.description);
      formDataToSubmit.append('image', formData.image);

      const response = await axios.post('https://mockapi.io/projects/666c17d949dbc5d7145c9130/forum', formDataToSubmit, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setPosts([...posts, response.data]);
      setFormData({ name: '', description: '', image: null });
      setIsFormVisible(false);
    } catch (error) {
      console.error('Error submitting post', error);
    }
  };

  const handleCommentSubmit = (postId, comment) => {
    const updatedPosts = posts.map((post) => {
      if (post.id === postId) {
        return {
          ...post,
          comments: [...(post.comments || []), comment],
        };
      }
      return post;
    });
    setPosts(updatedPosts);
  };

  return (
    <div className="app">
      <div className="new-post" onClick={() => setIsFormVisible(true)}>
        Tambahkan Postingan Baru...
      </div>
      {isFormVisible && (
        <form className="post-form" onSubmit={handleFormSubmit}>
          <div className="form-group">
            <label>Nama:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Deskripsi:</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Tambah Gambar:</label>
            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleImageChange}
              required
            />
          </div>
          <button type="submit">Posting</button>
        </form>
      )}
      <div className="posts">
        {posts.map((post) => (
          <div key={post.id} className="post">
            <h3>{post.name}</h3>
            <p>{post.description}</p>
            {post.image && <img src={URL.createObjectURL(post.image)} alt="Post" />}
            <div className="comments">
              <h4>Komentar:</h4>
              {(post.comments || []).map((comment, index) => (
                <p key={index}>{comment}</p>
              ))}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleCommentSubmit(post.id, comment);
                  setComment("");
                }}
              >
                <input
                  type="text"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder="Tambah komentar"
                  required
                />
                <button type="submit">Komentar</button>
              </form>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
