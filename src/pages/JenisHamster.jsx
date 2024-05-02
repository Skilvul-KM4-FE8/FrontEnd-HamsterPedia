// import { width } from "@mui/system";
import "../styles/JenisHamster.css";
import { Outlet } from "react-router";
import { Link, NavLink } from "react-router-dom";
import { Container, Row } from "react-bootstrap";
// import illust
import Syrian from "../assets/hamster/syrian.png";
import Campbell from "../assets/hamster/campbell.png";
import Winter from "../assets/hamster/winter.png";

import Check from "../assets/icon/check.png";
import Warning from "../assets/icon/warning.png";


// Aos
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Consult = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
    return (
        <>
            <section>
                <div className="header-jenis">
                <h1 className="a-text d-flex mt-5">Jenis-Jenis Hamster</h1>
                    <p id="a-text-subtitle">
                    Masih bingung bedain jenis-jenis hamster? <br />
                    Yuk kenalan sama jenis-jenis hamster yang biasa dipelihara!
                    </p>
                </div>
                <div className="a-container ">
                    <div className="card-syrian d-flex align-center justify-center">
                        <div className="card-hemi">
                                <Row>
                                <div className="col-md-8" data-aos="zoom-in" data-aos-duration="1000">
                                <h2>Hamster Syrian</h2>
                                    <p>
                                    Sering disebut sebagai Golden Hamster atau Hamster Teddy Bear, ukurannya lebih besar dari jenis-jenis hamster lain. Geraknya lambat dan nokturnal.
                                    </p>
                                    <div className="hemi-detail">
                                        <br/> <b>Ciri Khas : </b>Badannya besar, warnanya campuran antara 1 atau 2 warna.
                                        <br/> <b>Jenis Bulu :</b> Longhair, Satin, Rex
                                        <br/> <b>Warna : </b> Krem / golden, coklat tua, hitam, dan putih
                                        <br/> <b>Ukuran : </b>12.5 - 20 cm
                                        <br/> <b>Umur :</b> 2 - 3 Tahun
                                    </div>
                                </div>
                                <div className="col-md-4" data-aos="zoom-in" data-aos-duration="1000">
                                    <div className="gambar-hemi">
                                        <img src={Syrian} className="img-hemi"/>
                                    </div>
                                    <div className="col-md-12" data-aos="zoom-in" data-aos-duration="1000" id="warning-safe">
                                        <h5>
                                        <img src={Check} className="icon-check"/>    tidak mudah menggigit
                                        </h5>
                                    </div>
                                </div>
                                </Row>
                        </div>
                    </div>
                </div>

                <div className="a-container ">
                    <div className="card-campbell d-flex align-center justify-center">
                        <div className="card-hemi">
                                <Row>
                                <div className="col-md-8" data-aos="zoom-in" data-aos-duration="1000">
                                <h2>Hamster Campbell</h2>
                                    <p>
                                    Hamster yang paling mudah perawatannya dan tidak semanja jenis lain. Namun geraknya agresif, dan mudah menggigit dan bersembunyi apabila merasa terancam.
                                    </p>
                                    <div className="hemi-detail">
                                        <br/> <b>Ciri Khas : </b> Badannya mungil, ada corak lurus ditengah punggungnya.
                                        <br/> <b>Warna : </b> Putih kombinasi coklat, krem kombinasi, dan abu-abu.
                                        <br/> <b>Ukuran : </b>7 - 10 cm
                                        <br/> <b>Umur :</b> 2 - 2,5 Tahun
                                    </div>
                                </div>
                                <div className="col-md-4" data-aos="zoom-in" data-aos-duration="1000">
                                    <div className="gambar-hemi">
                                        <img src={Campbell} className="img-hemi"/>
                                    </div>
                                    <div className="col-md-12" data-aos="zoom-in" data-aos-duration="1000" id="warning-damage">
                                        <h5>
                                        <img src={Warning} className="icon-check"/>    mudah menggigit
                                        </h5>
                                    </div>
                                </div>
                                </Row>
                        </div>
                    </div>
                </div>

                <div className="a-container ">
                    <div className="card-winter d-flex align-center justify-center">
                        <div className="card-hemi">
                                <Row>
                                <div className="col-md-8" data-aos="zoom-in" data-aos-duration="1000">
                                <h2>Hamster Winter White</h2>
                                    <p>
                                    Bentuknya hampir sama dengan campbell, bedanya adalah bulunya tidak terlalu mengembang dan coraknya tidak setebal campbell. 
                                    </p>
                                    <div className="hemi-detail">
                                        <br/> <b>Ciri Khas : </b> Badannya mungil, bulunya dapat berubah warna di setiap musim. 
                                        <br/> <b>Warna : </b> Putih, abu-abu, krem
                                        <br/> <b>Ukuran : </b>8 - 10 cm
                                        <br/> <b>Umur :</b> 1 - 2 Tahun
                                    </div>
                                </div>
                                <div className="col-md-4" data-aos="zoom-in" data-aos-duration="1000">
                                    <div className="gambar-hemi">
                                        <img src={Winter} className="img-hemi"/>
                                    </div>
                                    <div className="col-md-12" data-aos="zoom-in" data-aos-duration="1000" id="warning-safe">
                                        <h5>
                                        <img src={Check} className="icon-check"/>    tidak mudah menggigit
                                        </h5>
                                    </div>
                                </div>
                                </Row>
                        </div>
                    </div>
                </div>

                <div className="a-container ">
                    <div className="card-robo d-flex align-center justify-center">
                        <div className="card-hemi">
                                <Row>
                                <div className="col-md-8" data-aos="zoom-in" data-aos-duration="1000" id="card-text">
                                <h2>Hamster Roborovski</h2>
                                    <p>
                                    Hamster yang paling kecil diantara semua jenis hamster. Geraknya sangat cepat, sulit diajak berteman, mudah loncat dan kabur. Namun tidak mudah menggigit.
                                    </p>
                                    <div className="hemi-detail">
                                        <br/> <b>Ciri Khas : </b> Badannya sangat mungil, matanya besar, telinganya lebih besar diantara winter dan campbell.
                                        <br/> <b>Warna : </b> Putih kombinasi krem dan abu-abu. 
                                        <br/> <b>Ukuran : </b>4 -5 cm
                                        <br/> <b>Umur :</b> 2 - 3 Tahun
                                    </div>
                                </div>
                                <div className="col-md-4" data-aos="zoom-in" data-aos-duration="1000">
                                    <div className="gambar-hemi">
                                        <img src={Campbell} className="img-hemi"/>
                                    </div>
                                    <div className="col-md-12" data-aos="zoom-in" data-aos-duration="1000" id="warning-safe">
                                        <h5>
                                        <img src={Check} className="icon-check"/>    tidak mudah menggigit
                                        </h5>
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

export default Consult;