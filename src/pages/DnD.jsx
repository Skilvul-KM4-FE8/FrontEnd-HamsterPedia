// import { width } from "@mui/system";
import "../styles/dnd.css";
import { Outlet } from "react-router";
import { Link, NavLink } from "react-router-dom";
import { Row } from "react-bootstrap";

// import illust
import Warning from "../assets/warning.png";
import Action1 from "../assets/dnd/action/1.png";
import Action2 from "../assets/dnd/action/2.png";
import Action3 from "../assets/dnd/action/3.png";
import Action4 from "../assets/dnd/action/4.png";
import Treat1 from "../assets/dnd/treat/1.png";
import Treat2 from "../assets/dnd/treat/2.png";
import Treat3 from "../assets/dnd/treat/3.png";
import Treat4 from "../assets/dnd/treat/4.png";
import Treat5 from "../assets/dnd/treat/5.png";
import Treat6 from "../assets/dnd/treat/6.png";
import BannerAct from "../assets/dnd/actbanner.png";
import BannerTreat from "../assets/dnd/treatbanner.png";

// Aos
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Pantangan = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
        document.title = "Pantangan Hamster";
      }, []);
    return (
        <>
            <section>
                {/* warning action */}
                <div className="a-container" data-aos="zoom-in" data-aos-duration="1000">
                    <div className="card-warning d-flex align-center justify-center">
                        <div className="card-hemi">
                                <Row>
                                    <div>
                                        <img src={BannerAct} className="banner-warning"></img>
                                    </div>
                                </Row>
                        </div>
                    </div>
                </div>

                {/* action */}
                <div className="a-container" data-aos="zoom-in" data-aos-duration="1000">
                    <div className="card-action d-flex align-center justify-center">
                        <div className="card-hemi">
                                <Row className="row-action">
                                    <div className="col-lg-3" data-aos="zoom-in" data-aos-duration="1000">
                                        <div className="gambar-hemi">
                                            <img src={Action1} className="img-hemi-dnd img-fluid" alt="Responsive Image"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-3" data-aos="zoom-in" data-aos-duration="1000">
                                        <div className="action-detail">
                                            <h3>Memandikan Hamster</h3>
                                            <p>Memandikan dengan air akan menyebabkan hamster menjadi gelisah, ketakutan, dan menggigil karena stres. Mandikan dengan pasir khusus untuk hamster.</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-3" data-aos="zoom-in" data-aos-duration="1000">
                                        <div className="gambar-hemi">
                                            <img src={Action2} className="img-hemi-dnd img-fluid" alt="Responsive Image"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-3" data-aos="zoom-in" data-aos-duration="1000">
                                        <div className="action-detail">
                                            <h3>Menjemur Hamster</h3>
                                            <p>Hamster bisa mati karena kepanasan, dan cahaya yang berlebih bisa mengganggu pandangan mata hamster.</p>
                                        </div>
                                    </div>
                                </Row>
                                <Row className="row-action">
                                    <div className="col-lg-3" data-aos="zoom-in" data-aos-duration="1000">
                                        <div className="gambar-hemi">
                                            <img src={Action3} className="img-hemi-dnd img-fluid" alt="Responsive Image"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-3" data-aos="zoom-in" data-aos-duration="1000">
                                        <div className="action-detail">
                                            <h3>Tidak Ada Interaksi</h3>
                                            <p>Mereka membutuhkan interaksi dengan pemiliknya setidaknya <b>10-15 menit setiap harinya.</b> Kurangnya interaksi juga dapat menjadi penyebab kenapa hamster menggigit pemiliknya.</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-3" data-aos="zoom-in" data-aos-duration="1000">
                                        <div className="gambar-hemi">
                                            <img src={Action4} className="img-hemi-dnd img-fluid" alt="Responsive Image"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-3" data-aos="zoom-in" data-aos-duration="1000">
                                        <div className="action-detail">
                                            <h3>Memegang Bayi Hamster dengan Tangan Kosong</h3>
                                            <p>Induk hamster akan menganggap bayinya beraroma manusia, dan akan meninggalkan bahkan membunuh bayinya.</p>
                                        </div>
                                    </div>
                                </Row>
                        </div>
                    </div>
                </div>

                {/* warning treatment */}
                <div className="a-container" data-aos="zoom-in" data-aos-duration="1000">
                    <div className="card-warning d-flex align-center justify-center">
                        <div className="card-hemi">
                                <Row>
                                    <div>
                                        <img src={BannerTreat} className="banner-warning2"></img>
                                    </div>
                                </Row>
                        </div>
                    </div>
                </div>

                {/* treatment */}
                <div className="a-container" data-aos="zoom-in" data-aos-duration="1000">
                    <div className="card-action d-flex align-center justify-center">
                        <div className="card-hemi">
                                <Row className="row-action">
                                    <div className="col-lg-3" data-aos="zoom-in" data-aos-duration="1000">
                                        <div className="gambar-hemi">
                                            <img src={Treat1} className="img-hemi-dnd img-fluid" alt="Responsive Image"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-3" data-aos="zoom-in" data-aos-duration="1000">
                                        <div className="action-detail">
                                            <h3>Kandang Terlalu Kecil</h3>
                                            <p>Ukuran minimal kandang Hamster yaitu <b>75 x 40cm </b>dengan tinggi sekitar 19cm. Hamster akan mudah stress di kandang yang kecil.</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-3" data-aos="zoom-in" data-aos-duration="1000">
                                        <div className="gambar-hemi">
                                            <img src={Treat2} className="img-hemi-dnd img-fluid" alt="Responsive Image"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-3" data-aos="zoom-in" data-aos-duration="1000">
                                        <div className="action-detail">
                                            <h3>Jarang Membersihkan Kandang</h3>
                                            <p>Bersihkan kandang hamster setidaknya <b>2 minggu sekali. </b>Kandang yang kotor membuat hamster mudah terkena penyakit dan infeksi.</p>
                                        </div>
                                    </div>
                                </Row>
                                <Row className="row-action">
                                    <div className="col-lg-3" data-aos="zoom-in" data-aos-duration="1000">
                                        <div className="gambar-hemi">
                                            <img src={Treat3} className="img-hemi-dnd img-fluid" alt="Responsive Image"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-3" data-aos="zoom-in" data-aos-duration="1000">
                                        <div className="action-detail">
                                            <h3>Jangan Menaruh Lebih dari 1 Hamster dalam 1 Kandang</h3>
                                            <p>Hamster memiliki sifat teritorial dan sulit akur satu sama lain. Contohnya Hamster Syrian yang teritorial, dan Hamster roborovski yang tidak bisa satu kandang dengan sesama jenisnya.</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-3" data-aos="zoom-in" data-aos-duration="1000">
                                        <div className="gambar-hemi">
                                            <img src={Treat4} className="img-hemi-dnd img-fluid" alt="Responsive Image"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-3" data-aos="zoom-in" data-aos-duration="1000">
                                        <div className="action-detail">
                                            <h3>Berikan Alas Setinggi 7cm</h3>
                                            <p>Sifat alami hamster yaitu menggali dan membuat sarang di dalam tanah, maka dari itu berikan alas kandang sekitar<b> 7-10cm </b>untuk hamster menggali.</p>
                                        </div>
                                    </div>
                                </Row>
                                <Row className="row-action">
                                    <div className="col-lg-3" data-aos="zoom-in" data-aos-duration="1000">
                                        <div className="gambar-hemi">
                                            <img src={Treat5} className="img-hemi-dnd img-fluid" alt="Responsive Image"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-3" data-aos="zoom-in" data-aos-duration="1000">
                                        <div className="action-detail">
                                            <h3>Jangan Berikan Wheel yang Terlalu Kecil</h3>
                                            <p>Belilah roda (wheel) Hamster berukuran minimal <b>20cm</b> untuk Hamster Dwarf dan minimal <b>27cm</b> untuk Hamster Syrian.</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-3" data-aos="zoom-in" data-aos-duration="1000">
                                        <div className="gambar-hemi">
                                            <img src={Treat6} className="img-hemi-dnd img-fluid" alt="Responsive Image"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-3" data-aos="zoom-in" data-aos-duration="1000">
                                        <div className="action-detail">
                                            <h3>Jangan Gunakan Kandang Jeruji</h3>
                                            <p>Mudah untuk dipanjat, dan akan menyebabkan kerusakan pada gigi hamster apabila menggerogoti kawat. Cat yang digunakan juga berbahaya apabila tertelan.</p>
                                        </div>
                                    </div>
                                </Row>
                        </div>
                    </div>
                </div>

            </section>
        </>
    );
}

export default Pantangan;