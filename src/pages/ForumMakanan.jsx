// import { width } from "@mui/system";
import "../styles/forum.css";
import { Container, Row } from "react-bootstrap";
import { useState } from "react";
import PostForumMakanan from "../components/PostForumMakanan";
import { Link } from "react-router-dom";

// Aos
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ForumMakanan = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    const [author, setAuthor] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');  // State for category
    const [file, setFile] = useState(null);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
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

            if (!response.ok) {
                throw new Error('Upload gagal')
            }

            const data = await response.json();
            console.log(data);

        } catch (e) {
            console.log("error", e);
        }
    }

    return (
        <>
            <section>
                {/* CONTAINER UPLOAD */}
                <div className="a-container">
                    <Row>
                        <div className="col-lg-8" data-aos="zoom-in" data-aos-duration="1000">
                            <div className="new-post">
                                Tambahkan Postingan Baru
                            </div>
                            <div className="app">
                                <form className="post-form" onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <label>Nama :</label>
                                        <input type="text" name="name" value={author} onChange={e => setAuthor(e.target.value)} />
                                    </div>
                                    <div className="form-group">
                                        <label>Kategori :</label>
                                        <select name="category" value={category} onChange={e => setCategory(e.target.value)}>
                                            <option value="">Pilih Kategori</option>
                                            <option value="makanan">Forum Makanan</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label>Ceritakan Sesuatu :</label>
                                        <textarea name="description" value={description} onChange={e => setDescription(e.target.value)} />
                                    </div>
                                    <div className="form-group">
                                        <label>Tambah Gambar :</label>
                                        <input type="file" name="image" onChange={handleFileChange} />
                                    </div>
                                    <button type="submit" onClick={handleSubmit}>Posting</button>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-4" data-aos="zoom-in" data-aos-duration="1000">
                            <Link to={"/forum"} onClick={() => window.scrollTo(0, 0)}>
                                <div className="container-forum-umum">
                                    <h4>Forum Umum</h4>
                                    <p>Disini kamu bisa membahas topik umum seputar hamster</p>
                                </div> 
                            </Link>
                            <Link to={"/forum-makanan"} onClick={() => window.scrollTo(0, 0)}>
                                <div className="container-forum-makanan">
                                    <h4>Forum Makanan</h4>
                                    <p>Disini kamu bisa membahas topik umum seputar makanan hamster</p>
                                </div>
                            </Link>
                            <Link to={"/forum-makanan"} onClick={() => window.scrollTo(0, 0)}>
                                <div className="container-forum-perawatan">
                                    <h4>Forum Perawatan</h4>
                                    <p>Disini kamu bisa membahas topik umum seputar perawatan hamster</p>
                                </div>
                            </Link>
                        </div>
                    </Row>
                </div>
                <PostForumMakanan></PostForumMakanan>
            </section>
        </>
    );
}

export default ForumMakanan;
