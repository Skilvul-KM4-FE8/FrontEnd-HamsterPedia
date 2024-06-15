// import { width } from "@mui/system";
import "../styles/forum.css";
import { Container, Row } from "react-bootstrap";
import { useState } from "react";
// import illust
import Eat from "../assets/hamster/eat.png";

// Aos
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Forum = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);

      const [isFormVisible, setIsFormVisible] = useState(false);
      const [formData, setFormData] = useState({
        name: '',
        description: '',
        image: null,
      });

    return (
        <>
            <section>
                {/* CONTAINER UPLOAD */}
                <div className="a-container">
                    <Row>
                        <div className="col-lg-8" data-aos="zoom-in" data-aos-duration="1000">
                            <div className="new-post" onClick={() => setIsFormVisible(true)}>
                                Tambahkan Postingan Baru
                            </div>
                            <div className="app">
                                {isFormVisible && (
                                <form className="post-form">
                                    <div className="form-group">
                                        <label>Nama :</label>
                                        <input type="text" name="name"/>
                                    </div>
                                    <div className="form-group">
                                        <label>Ceritakan Sesuatu :</label>
                                        <textarea name="description"/>
                                    </div>
                                    <div className="form-group">
                                        <label>Tambah Gambar :</label>
                                        <input type="file" name="image" />
                                    </div>
                                    <button type="submit">Posting</button>
                                </form>
                                )}
                            </div>
                        </div>
                        <div className="col-lg-4" data-aos="zoom-in" data-aos-duration="1000">
                            <div className="container-forum">
                                <div className="forum-icon">
                                    <img src={Eat} className="header-jenkel img-fluid"/>
                                </div>
                                <div className="forum-title">
                                    <h4>Selamat Datang di Forum!</h4>
                                </div>
                                <div className="forum-desc">
                                    <p>Kamu bisa <b>menanggapi dan berdiskusi</b> dengan sesama anggota forum pada postingan yang di upload, ya! Ceritakan tentang pengalaman, pertanyaan, atau keluh kesahmu tentang si kecil di forum ini.</p>
                                </div>
                                {/* <hr></hr> */}
                                {/* <div className="forum-subtitle">
                                    <b>Cara Menggunakan</b>
                                </div>
                                <div className="forum-desc2">
                                    <p>Tambah Postingan : klik tombol "Tambah Postingan Baru"<br/>
                                    Tambahkan Gambar : pilih file pada form tambah postingan, pastikan format file berbentuk (jpg, jpeg, png)<br/>
                                    Komentari Postingan : klik tambah komentar dibawah postingan lain</p>
                                </div> */}
                            </div>
                        </div>
                    </Row>
                </div>
            </section>
        </>
    );
}

export default Forum;