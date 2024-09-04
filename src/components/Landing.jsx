import "../styles/Landing.css";
import eat from "../assets/hamster/eat.png";
import banner from "../assets/hamster/banner.png";
import jantan from "../assets/hamster/jantan.png";
import betina from "../assets/hamster/betina.png";
import Hamsterball from "../assets/Hamsterball2.gif";
import Hamsterball3 from "../assets/Hamsterball3.gif";
import Fitur1 from "../assets/landing/1.png";
import Fitur2 from "../assets/landing/2.png";
import Fitur3 from "../assets/landing/3.png";
import Fitur4 from "../assets/landing/4.png";
import Fitur5 from "../assets/landing/5.png";
import Fitur6 from "../assets/landing/6.png";
import { Row } from "react-bootstrap";
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
        <div className="hero-container d-flex justify-content-space-between m-3 mt-0">
          <div
            className="hero-text "
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <h1>
              Selamat Datang
              <br />
              di Hamster Pedia!
            </h1>
            <p className="text-white mt-3">
              Mau tau cara merawat hamster yang benar?
              <br /> Apa yang boleh dan gak boleh kamu lakukan pada hamster
              kamu? Yuk jelajahi website kami!
            </p>
            <Link
              to={"/perawatanhamster"}
              className="buttonprimary btn mt-3"
              onClick={() => window.scrollTo(0, 0)}
            >
              Lebih Lanjut
            </Link>
          </div>
          <div className="hero-image">
            <img src={banner} className="Character img-fluid" alt="" />
          </div>
        </div>
      </section>

      {/* FITUR WEBSITE */}
      <div className="rounded-frame">
      <h1 className="a-text d-flex mt-5" id="title-fitur">
        Fitur Website
      </h1>
      <p id="a-text-subtitle">
        Kenali hamster dengan berbagai fitur di website Hamster Pedia!
      </p>
      </div>
      <Row className="row-fiturweb">
        <a
          className="card-fitur col-md-2"
          data-aos="zoom-in"
          data-aos-duration="1000"
          href="/jenishamster"
          onClick={() => window.scrollTo(0, 0)}
        >
          <div>
            <img src={Fitur1} className="img-fluid" alt="Responsive Image" />
          </div>
        </a>
        <a
          className="card-fitur col-md-2"
          data-aos="zoom-in"
          data-aos-duration="1000"
          href="/perawatanhamster"
          onClick={() => window.scrollTo(0, 0)}
        >
          <figure>
            <img src={Fitur2} className="img-fluid" alt="Responsive Image" />
          </figure>
        </a>
        <a
          className="card-fitur col-md-2"
          data-aos="zoom-in"
          data-aos-duration="1000"
          href="/makananhamster"
          onClick={() => window.scrollTo(0, 0)}
        >
          <div>
            <img src={Fitur3} className="img-fluid" alt="Responsive Image" />
          </div>
        </a>
        <a
          className="card-fitur col-md-2"
          data-aos="zoom-in"
          data-aos-duration="1000"
          href="/dnd"
          onClick={() => window.scrollTo(0, 0)}
        >
          <figure>
            <img src={Fitur4} className="img-fluid" alt="Responsive Image" />
          </figure>
        </a>
        <a
          className="card-fitur col-md-2"
          data-aos="zoom-in"
          data-aos-duration="1000"
          href="/faktailmiah"
          onClick={() => window.scrollTo(0, 0)}
        >
          <div>
            <img src={Fitur5} className="img-fluid" alt="Responsive Image" />
          </div>
        </a>
        <a
          className="card-fitur col-md-2"
          data-aos="zoom-in"
          data-aos-duration="1000"
          href="/forum"
          onClick={() => window.scrollTo(0, 0)}
        >
          <figure>
            <img src={Fitur6} className="img-fluid" alt="Responsive Image" />
          </figure>
        </a>
      </Row>

      <section className="service">
        <section
          className="introduction"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <div className="a-container">
            <div className="card-introduction d-flex align-center justify-center">
              <img src={eat} className="Character2" alt="" />
              <div className="desc">
                <h2>Tahukah Kamu?</h2>
                <p>
                  Hamster merupakan salah satu hewan pengerat yang paling banyak
                  dipelihara. Banyak orang bilang, hewan menggemaskan satu ini
                  butuh perawatan yang cukup sulit agar bisa bertahan hidup
                  lama. Apa iya? yuk kenali hamster lebih jauh bersama kami
                  Hamster Pedia!
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="jenis-hamster">
          <h1 className="a-text d-flex mt-5">Jenis Kelamin Hamster</h1>
          <p id="a-text-subtitle">
            Masih bingung bedain jenis kelamin hamster? <br />
            Kenali ciri-ciri pada hamster kamu untuk mengetahui jenis
            kelaminnya!
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
                    <img src={jantan} />
                    <h3 className="text-center mx-2">Hamster Jantan</h3>
                    <h6 className="text-center2 mx-3">
                      <Link
                        to={"/jenishamster"}
                        className="btn-jantan"
                        onClick={() => window.scrollTo(0, 0)}
                      >
                        Klik untuk mengetahui ciri-ciri hamster jantan
                      </Link>
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
                    <img src={betina} alt="" />
                    <h3 className="text-center mx-2">Hamster Betina</h3>
                    <h6 className="text-center2 mx-3">
                      <Link
                        to={"/jenishamster"}
                        className="btn-betina"
                        onClick={() => window.scrollTo(0, 0)}
                      >
                        Klik untuk mengetahui ciri-ciri hamster betina
                      </Link>
                    </h6>
                  </div>
                </div>
              </div>
            </Row>
          </div>
        </div>

        {/* HAMSTERBALL */}
        <div>
          <img src={Hamsterball} className="hamsterball img-fluid"></img>
        </div>
        <div>
          <img src={Hamsterball3} className="hamsterball3 img-fluid"></img>
        </div>
      </section>
    </>
  );
};

export default Landing;
