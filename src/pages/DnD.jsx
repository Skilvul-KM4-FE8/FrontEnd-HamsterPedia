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

// Aos
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Perawatan = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
    return (
        <>
            <section>
                {/* warning */}
                <div className="a-container" data-aos="zoom-in" data-aos-duration="1000">
                    <div className="card-warning d-flex align-center justify-center">
                        <div className="card-hemi">
                                <Row>
                                        <div className="col-lg-2">
                                            <img src={Warning} className="warning-icon img-fluid"/>
                                        </div>
                                        <div className="col-md-8">
                                            <h3>Jangan Lakukan Ini <br/>Pada Hamster Kamu!</h3>
                                        </div>
                                        <div className="col-md-2">
                                            <img src={Warning} className="warning-icon img-fluid"/>
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
                                            <img src={Action1} className="img-hemi img-fluid" alt="Responsive Image"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-3" data-aos="zoom-in" data-aos-duration="1000">
                                        <div className="action-detail">
                                            <h3>Memandikan Hamster</h3>
                                            <p></p>
                                        </div>
                                    </div>
                                    <div className="col-lg-3" data-aos="zoom-in" data-aos-duration="1000">
                                        <div className="gambar-hemi">
                                            <img src={Action2} className="img-hemi img-fluid" alt="Responsive Image"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-3" data-aos="zoom-in" data-aos-duration="1000">
                                        <div className="action-detail">
                                            <h3>Menjemur Hamster</h3>
                                            <p></p>
                                        </div>
                                    </div>
                                </Row>
                                <Row className="row-action">
                                    <div className="col-lg-3" data-aos="zoom-in" data-aos-duration="1000">
                                        <div className="gambar-hemi">
                                            <img src={Action3} className="img-hemi img-fluid" alt="Responsive Image"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-3" data-aos="zoom-in" data-aos-duration="1000">
                                        <div className="action-detail">
                                            <h3>Menaruh Lebih dari 1 Hamster dalam 1 Kandang</h3>
                                            <p></p>
                                        </div>
                                    </div>
                                    <div className="col-lg-3" data-aos="zoom-in" data-aos-duration="1000">
                                        <div className="gambar-hemi">
                                            <img src={Action4} className="img-hemi img-fluid" alt="Responsive Image"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-3" data-aos="zoom-in" data-aos-duration="1000">
                                        <div className="action-detail">
                                            <h3>Memegang Bayi Hamster dengan Tangan Kosong</h3>
                                            <p></p>
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

export default Perawatan;