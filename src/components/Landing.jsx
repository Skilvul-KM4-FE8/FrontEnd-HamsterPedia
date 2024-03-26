import "../styles/Landing.css";
import Hemi1 from "../assets/hemi1.png";
import Hemi2 from "../assets/hemi2.png";
import Hemi3 from "../assets/hemi3.png";
import Hemi4 from "../assets/hemi4.png";
import { Container, Row } from "react-bootstrap";
import ArticleLanding from "../pages/ArticleLanding";
import { Link } from "react-router-dom";

// Aos
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Landing = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <section className="mt-0 hero">
        <div
          className="hero-container d-flex justify-content-space-between m-3 mt-0"
        >
          <div className="hero-text " data-aos="fade-up"
          data-aos-duration="2000">
            <h1>
              Selamat Datang
              <br />
              di Hamster Pedia!
            </h1>
            <p className="text-white mt-3">
            Mau tau cara merawat hamster yang benar?
              <br /> Apa yang boleh dan gak boleh kamu lakukan pada hamster kamu?
            Yuk jelajahi website kami!
            </p>
            <Link
              to={""}
              className="buttonprimary btn mt-3"
            >
              Lebih Lanjut
            </Link>
          </div>
          <div
            className="hero-image"
          >
            <img src={Hemi1} className="Character" alt="" />
          </div>
        </div>
      </section>

      {/*  */}

      <section className="service">
      <section
          className="introduction"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <div className="a-container ">
            <div className="card-introduction d-flex align-center justify-center">
              <img src={Hemi2} className="Character2" alt="" />
              <div className="desc">
                <h2>Tahukah Kamu?</h2>
                <p>
                Hamster merupakan salah satu hewan pengerat yang paling banyak
                dipelihara. Banyak orang bilang, hewan menggemaskan satu ini butuh
                perawatan yang cukup sulit agar bisa bertahan hidup lama. Apa iya?
                yuk kenali hamster lebih jauh bersama kami Hamster Pedia!
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="jenis-hamster">
          <h1 className="a-text d-flex mt-5">Jenis Kelamin Hamster</h1>
          <p id="a-text-subtitle">
          Masih bingung bedain jenis kelamin hamster? <br />
          Kenali ciri-ciri pada hamster kamu untuk mengetahui jenis kelaminnya!
          </p>
          <div className="container-fluid mb-4">
            <Row className="gap-5 justify-content-center">
              <div
                className="col-md-4"
                data-aos="zoom-in"
                data-aos-duration="1000"
              >
                <div className="item-service">
                  <div className="card-service d-flex flex-column align-items-center justify-content-center">
                    <img src={Hemi3} alt="" />
                    <h3 className="text-center mx-2">Hamster Jantan</h3>
                    <h6 className="text-center2 mx-3">
                      Klik untuk mengetahui ciri-ciri hamster jantan
                    </h6>
                  </div>
                </div>
              </div>
              <div
                className="col-md-4"
                data-aos="zoom-in"
                data-aos-duration="1000"
              >
                <div className="item-service">
                  <div className="card-service-betina d-flex flex-column align-items-center justify-content-center">
                    <img src={Hemi4} alt="" />
                    <h3 className="text-center mx-2">Hamster Betina</h3>
                    <h6 className="text-center2 mx-3">
                    Klik untuk mengetahui ciri-ciri hamster betina
                    </h6>
                  </div>
                </div>
              </div>
            </Row>
          </div>
        </div>
      </section>

      <div>
        {/* article */}

      </div>
    </>
  );
};

export default Landing;
