// import { width } from "@mui/system";
import "../styles/JenisHamster.css";
import {  Row } from "react-bootstrap";
// import illust
import Syrian from "../assets/hamster/syrian.png";
import Campbell from "../assets/hamster/campbell.png";
import Winter from "../assets/hamster/winter.png";
import Robo from "../assets/hamster/robo.png";
import Jantan2 from "../assets/hamster/jantan2.png";
import Betina2 from "../assets/hamster/betina2.png";
import JantanReal from "../assets/hamster/jantanreal2.svg";
import BetinaReal from "../assets/hamster/betinareal2.svg";
import Check from "../assets/icon/check.png";
import Warning from "../assets/icon/warning.png";
import Kelamin from "../assets/perawatan/kelamin.jpg";

// Aos
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Jenis = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
    document.title = "Jenis Hamster";
  }, []);
  return (
    <>
      <section>
        {/* jenis kelamin */}
        <div className="header-jenis">
          <h1 className="a-text d-flex mt-5">Jenis Kelamin Hamster</h1>
          <p id="a-text-subtitle">
            Masih bingung bedain jenis kelamin hamster? <br />
            Yuk simak ciri-ciri dari hamster betina dan jantan!
          </p>
        </div>

        <div
          className="a-container"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <div className="card-desc-jenkel">
            <Row>
              <div
                className="col-md-8"
                data-aos="zoom-in"
                data-aos-duration="1000"
              >
                <h3>Cara Melihat Kelamin Hamster</h3>
                <p>
                  Jenis kelamin hamster biasanya lebih mudah dilihat ketika sudah berumur 3-4 bulan. Untuk mengetahui jenis kelamin
                  hamster, yang perlu kamu lakukan adalah melihat alat kelaminnya dengan melakukan salah satu cara dari dua cara berikut :
                  <br />
                  <ul>
                    <li>
                      Tempatkan hamster pada satu tangan, tempatkan tangan yang lain pada punggung hamster, lalu tidurkan hamster hingga terlentang.{" "}
                    </li>
                    <li>
                      Pegang hamster pada punduk atau lehernya untuk melihat bagian bawah tubuhnya{" "}
                    </li>
                  </ul>
                </p>
              </div>
              <div
                className="col-md-4"
                data-aos="zoom-in"
                data-aos-duration="1000"
              >
                <div className="gambar-hemi-jenis">
                  <img src={Kelamin} className="header-jenkel img-fluid" />
                </div>
              </div>
            </Row>
          </div>
        </div>

        {/* hamster betina */}
        <div
          className="a-container"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <div className="card-betina d-flex align-center justify-center">
            <div className="card-hemi">
              <Row>
                <div
                  className="col-md-8"
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                >
                  <h2>Hamster Betina</h2>
                  <div className="hemi-detail-jenkel">
                    <ul>
                      <li>
                        Terdapat dua lubang di bagian alat kelaminnya, yaitu vagina dan anus yang jaraknya sangat dekat{" "}
                      </li>
                      <li>
                        Memiliki puting susu dibagian bawah badannya sejumlah 4-6 puting susu saat hamster sudah besar{" "}
                      </li>
                      <li>
                        Bulu dibagian perut lebih sedikit dibanding jantan{" "}
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  className="col-md-4"
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                >
                  <div className="gambar-hemi-jenis">
                    <img src={Betina2} className="img-hemi-jenkel img-fluid" />
                  </div>
                </div>
              </Row>
            </div>
          </div>
        </div>

        {/* hamster jantan */}
        <div
          className="a-container"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <div className="card-jantan d-flex align-center justify-center">
            <div className="card-hemi">
              <Row>
                <div
                  className="col-md-8"
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                >
                  <h2>Hamster Jantan</h2>
                  <div className="hemi-detail-jenkel">
                    <ul>
                      <li>
                        Badan bagian bawah hamster jantan lebih bulat dibanding betina{" "}
                      </li>
                      <li>
                        Terdapat dua lubang di bagian alat kelaminnya, yaitu penis dan anus yang jaraknya sekitar 1-2cm{" "}
                      </li>
                      <li>
                        Selain itu hamster jantan memiliki kelenjar bau di sekitar perut yang berbentuk benjolan kecil{" "}
                      </li>
                      <li>
                        Memiliki bulu yang lebih tebal di area perut dibanding betina{" "}
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  className="col-md-4"
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                >
                  <div className="gambar-hemi-jenis">
                    <img src={Jantan2} className="img-hemi-jenkel img-fluid" />
                  </div>
                </div>
              </Row>
            </div>
          </div>
        </div>

        {/* Jenis Kelamin Real */}
        <div
          className="a-container"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <Row>
            <div className="col-md-2" id="row-jantan">
              <p className="desc-jantan-real">
                ▶ <br />
                Hamster jantan. Tampak testikel di bagian belakang
              </p>
            </div>
            <div
              className="col-md-4"
              data-aos="zoom-in"
              data-aos-duration="1000"
            >
              <img src={JantanReal} className="img-hemi-real1 img-fluid" />
            </div>
            <div
              className="col-md-4"
              data-aos="zoom-in"
              data-aos-duration="1000"
            >
              <img src={BetinaReal} className="img-hemi-real2 img-fluid" />
            </div>
            <div className="col-md-2" id="row-betina">
              <p className="desc-betina-real">
                {" "}
                ◀ <br />
                Hamster betina. Tampak adanya puting susu
              </p>
            </div>
          </Row>
        </div>
        <br />

        {/* jenis hamster */}
        <div className="header-jenis2" data-aos="zoom-in" data-aos-duration="1000">
          <h1 className="a-text d-flex mt-5">Jenis-Jenis Hamster</h1>
          <p id="a-text-subtitle">
            Masih bingung bedain jenis-jenis hamster? <br /> Yuk kenalan sama jenis-jenis hamster yang biasa dipelihara!
          </p>
        </div>

        <div
          className="a-container "
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <div className="card-campbell d-flex align-center justify-center">
            <div className="card-hemi">
              <Row>
                <div
                  className="col-md-8"
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                >
                  <h2>Hamster Campbell</h2>
                  <p>
                    Hamster yang paling mudah perawatannya dan tidak semanja jenis lain. Namun geraknya agresif, dan mudah menggigit dan bersembunyi apabila merasa terancam.
                  </p>
                  <div className="hemi-detail-jenis">
                    <br /> <b>Ciri Khas : </b> Badannya mungil, ada corak lurus ditengah punggungnya.
                    <br /> <b>Warna : </b> Putih kombinasi coklat, krem kombinasi, dan abu-abu.
                    <br /> <b>Ukuran : </b>7 - 10 cm
                    <br /> <b>Umur :</b> 2 - 2,5 Tahun
                  </div>
                </div>
                <div
                  className="col-md-4"
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                >
                  <div className="gambar-hemi-jenis">
                    <img src={Campbell} className="img-hemi img-fluid" />
                  </div>
                  <div
                    className="col-md-12" data-aos="zoom-in" data-aos-duration="1000" id="warning-damage"
                  >
                    <h5>
                      <img src={Warning} className="icon-check" /> mudah menggigit
                    </h5>
                  </div>
                </div>
              </Row>
            </div>
          </div>
        </div>

        <div className="a-container ">
          <div className="card-syrian d-flex align-center justify-center">
            <div className="card-hemi">
              <Row>
                <div
                  className="col-md-8" data-aos="zoom-in" data-aos-duration="1000">
                  <h2>Hamster Syrian</h2>
                  <p>
                    Sering disebut sebagai Golden Hamster atau Hamster Teddy Bear, ukurannya lebih besar dari jenis-jenis hamster lain. Geraknya lambat dan nokturnal.
                  </p>
                  <div className="hemi-detail-jenis">
                    <br /> <b>Ciri Khas : </b>Badannya besar, warnanya campuran antara 1 atau 2 warna.
                    <br /> <b>Jenis Bulu :</b> Longhair, Satin, Rex
                    <br /> <b>Warna : </b> Krem / golden, coklat tua, hitam, dan putih
                    <br /> <b>Ukuran : </b>12.5 - 20 cm
                    <br /> <b>Umur :</b> 2 - 3 Tahun
                  </div>
                </div>
                <div
                  className="col-md-4"
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                >
                  <div className="gambar-hemi-jenis">
                    <img src={Syrian} className="img-hemi img-fluid" />
                  </div>
                  <div
                    className="col-md-12"
                    data-aos="zoom-in"
                    data-aos-duration="1000"
                    id="warning-safe"
                  >
                    <h5>
                      <img src={Check} className="icon-check" /> tidak mudah menggigit
                    </h5>
                  </div>
                </div>
              </Row>
            </div>
          </div>
        </div>

        <div
          className="a-container " data-aos="zoom-in" data-aos-duration="1000">
          <div className="card-winter d-flex align-center justify-center">
            <div className="card-hemi">
              <Row>
                <div
                  className="col-md-8" data-aos="zoom-in" data-aos-duration="1000"
                >
                  <h2>Hamster Winter White</h2>
                  <p>
                    Bentuknya hampir sama dengan campbell, bedanya adalah bulunya tidak terlalu mengembang dan coraknya tidak setebal campbell.
                  </p>
                  <div className="hemi-detail-jenis">
                    <br /> <b>Ciri Khas : </b> Badannya mungil, bulunya dapat berubah warna di setiap musim.
                    <br /> <b>Warna : </b> Putih, abu-abu, krem
                    <br /> <b>Ukuran : </b>8 - 10 cm
                    <br /> <b>Umur :</b> 1 - 2 Tahun
                  </div>
                </div>
                <div
                  className="col-md-4"
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                >
                  <div className="gambar-hemi-jenis">
                    <img src={Winter} className="img-hemi img-fluid" />
                  </div>
                  <div
                    className="col-md-12"
                    data-aos="zoom-in"
                    data-aos-duration="1000"
                    id="warning-safe"
                  >
                    <h5>
                      <img src={Check} className="icon-check" /> tidak mudah menggigit
                    </h5>
                  </div>
                </div>
              </Row>
            </div>
          </div>
        </div>

        <div
          className="a-container "
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <div className="card-robo d-flex align-center justify-center">
            <div className="card-hemi">
              <Row>
                <div
                  className="col-md-8"
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                  id="card-text"
                >
                  <h2>Hamster Roborovski</h2>
                  <p>
                    Hamster yang paling kecil diantara semua jenis hamster. Geraknya sangat cepat, sulit diajak berteman, mudah loncat dan kabur. Namun tidak mudah menggigit.
                  </p>
                  <div className="hemi-detail-jenis">
                    <br /> <b>Ciri Khas : </b> Badannya sangat mungil, matanya besar, telinganya lebih besar dibandingkan dengan winter dan campbell.
                    <br /> <b>Warna : </b> Putih kombinasi krem dan abu-abu.
                    <br /> <b>Ukuran : </b>4 -5 cm
                    <br /> <b>Umur :</b> 2 - 3 Tahun
                  </div>
                </div>
                <div
                  className="col-md-4"
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                >
                  <div className="gambar-hemi-jenis">
                    <img src={Robo} className="img-hemi img-fluid" />
                  </div>
                  <div className="col-md-12" data-aos="zoom-in" data-aos-duration="1000" id="warning-safe">
                    <h5>
                      <img src={Check} className="icon-check" /> tidak mudah
                      menggigit
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
};

export default Jenis;
