// import { width } from "@mui/system";
import "../styles/forum.css";
import { Row } from "react-bootstrap";
import { useState } from "react";
import PostForumPerawatan from "../components/PostForumPerawatan";
import axios from "axios";
import { Form } from "react-bootstrap";

// Aos
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Forum = () => {
    const [refreshPostForum, setRefreshPostForum] = useState(false); // gpt

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    const [author, setAuthor] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');  // State for category
    const [file, setFile] = useState(null);
    const [loading, isLoading] = useState(false)
    const [newData, setNewData] = useState([])

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        isLoading(true)
        const formData = new FormData();
        formData.append('author', author);
        formData.append('description', description);
        formData.append('category', category);  // Add category to form data
        formData.append('file', file);

        console.log({
            author,
            description,
            category,
            file
        });

        try {
            const response = await fetch("https://backend-hamsterpedia.vercel.app/post/addpost", {
                method: 'POST',
                body: formData,
            });
            axios("https://backend-hamsterpedia.vercel.app/post/allposts?category=perawatan").then(result => setNewData(result.data))
            isLoading(false)

            if (!response.ok) {
                throw new Error('Upload gagal')
            }

            const data = await response.json();
            console.log(data);
            isLoading(false)
           

        } catch (e) {
            console.log("error", e);
        }
        // const navigate = useNavigate();
        // setRefreshPostForum(true);
        // navigate("/forum")
        setAuthor('')
        setComment('')
    }

    return (
        <>
            <section>
                {/* CONTAINER UPLOAD */}
                <div className="a-container">
                    <Row>
                        <div className="col-lg-8" data-aos="zoom-in" data-aos-duration="1000">
                            <div className="new-post">
                                Tambahkan Postingan Umum
                            </div>
                            <div className="app">
                                <form className="post-form" onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <label>Nama :</label>
                                        <Form.Control type="text" name="name" value={author} onChange={e => setAuthor(e.target.value)} />
                                    </div>
                                    <div className="form-group">
                                        <label>Kategori :</label>
                                        <select name="category" className="category" value={category} onChange={e => setCategory(e.target.value)}>
                                            <option value="">Pilih Kategori</option>
                                            <option value="perawatan">Forum Perawatan</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label>Ceritakan Sesuatu :</label>
                                        <textarea name="description" value={description} onChange={e => setDescription(e.target.value)} />
                                    </div>
                                    <div className="form-group">
                                        <label>Tambah Gambar :</label>
                                        <Form.Control type="file" name="image" onChange={handleFileChange} />
                                    </div>
                                    <button type="submit" onClick={handleSubmit}>
                                        {(loading) ? "Loading" : "Posting"}
                                    </button>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-4" data-aos="zoom-in" data-aos-duration="1000">
                            <a class="card1" href="/forum" onClick={() => window.scrollTo(0, 0)}>
                                <h4>Forum Umum</h4>
                                <p class="small">Disini kamu bisa membahas topik umum seputar hamster</p>
                                <div class="go-corner" href="#">
                                <div class="go-arrow">
                                    →
                                </div>
                                </div>
                            </a>
                            <a class="card2" href="/forum-makanan" onClick={() => window.scrollTo(0, 0)}>
                                <h4>Forum Makanan</h4>
                                <p class="small">Disini kamu bisa membahas topik seputar makanan hamster</p>
                                <div class="go-corner2" href="#">
                                <div class="go-arrow">
                                    →
                                </div>
                                </div>
                            </a>
                            <a class="card3" href="/forum-perawatan" onClick={() => window.scrollTo(0, 0)}>
                                <h4>Forum Perawatan</h4>
                                <p class="small">Disini kamu bisa membahas topik seputar perawatan hamster</p>
                                <div class="go-corner3" href="#">
                                <div class="go-arrow">
                                    →
                                </div>
                                </div>
                            </a>
                        </div>
                    </Row>
                </div>
                
                <PostForumPerawatan refresh={newData} >

                </PostForumPerawatan>
            </section>
        </>
    );
}

export default Forum;
