// import { width } from "@mui/system";
import "../styles/JenisHamster.css";
import { Outlet } from "react-router";
import { Link, NavLink } from "react-router-dom";
import { Container, Row } from "react-bootstrap";
// import illust
import Syrian1 from "../assets/hamster/syrian1.svg";
import Syrian2 from "../assets/hamster/syrian2.svg";


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
                <h1 className="a-text d-flex mt-5">Jenis Kelamin Hamster</h1>
                    <p id="a-text-subtitle">
                    Masih bingung bedain jenis kelamin hamster? <br />
                    Kenali ciri-ciri pada hamster kamu untuk mengetahui jenis kelaminnya!
                    </p>
                </div>
                <div className="a-container ">
                    <div className="card-syrian d-flex align-center justify-center">
                        <div className="card-hemi">
                                <Row>
                                <div className="col-md-8" data-aos="zoom-in" data-aos-duration="1000">
                                <h2>Hamster Syrian</h2>
                                    <p>
                                    Hamster merupakan salah satu hewan pengerat yang paling banyak
                                    dipelihara. Banyak orang bilang, hewan menggemaskan satu ini butuh
                                    perawatan yang cukup sulit agar bisa bertahan hidup lama. Apa iya?
                                    yuk kenali hamster lebih jauh bersama kami Hamster Pedia!
                                    </p>
                                </div>
                                <div className="col-md-4" data-aos="zoom-in" data-aos-duration="1000">
                                    <img src={Syrian1} className="img-hemi"/>
                                    <img src={Syrian2} className="img-hemi"/>
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