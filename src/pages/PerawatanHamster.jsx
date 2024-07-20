import "../styles/PerawatanHamster.css";
import { Row } from "react-bootstrap";

// import illust
import Cage1 from "../assets/perawatan/cage.jpg";
import Hemidle from "../assets/hamster/hemidle.png";
import Container from "../assets/perawatan/container.jpg";
import Aquarium from "../assets/perawatan/aquarium.jpg";
import Kayu from "../assets/perawatan/kayu.jpg";
import Serbukayu from "../assets/perawatan/alas.jpg";
import Kebutuhan from "../assets/perawatan/kebutuhan.jpg";

// Aos
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Cardalas from "../components/CardAlas";
import Cardkebutuhan from "../components/CardKebutuhan";

const Perawatan = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
    document.title = "Perawatan Hamster";
  }, []);
  return (
    <>
      <section>
        <div className="header-perawatan">
          <h1 className="a-text d-flex mt-5">Perawatan Hamster</h1>
          <p id="a-text-subtitle">
            Masih bingung cara merawat hamster yang benar? <br />
            Yuk cari tahu bagaimana merawat hamster kamu sesuai jenisnya!
          </p>
        </div>

        {/* header kandang */}
        <div
          className="a-container"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <div className="card-header d-flex align-center justify-center">
            <div className="card-hemi">
              <Row>
                <div
                  className="col-lg-4"
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                >
                  <div className="gambar-hemi-header">
                    <img
                      src={Cage1}
                      className="img-hemi-header img-fluid"
                      alt="Responsive Image"
                    />
                  </div>
                </div>

                <div
                  className="col-lg-8"
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                >
                  <div className="header-detail">
                    <h3>
                      Berikan Kandang yang Luas,
                      <br />
                      Bisa Pakai Wadah Plastik Aja Kok!
                    </h3>
                    <div className="hemi-detail">
                      <p>
                        Menurut Royal Society for the Prevention of Cruelty to
                        Animals, minimal ukuran kandang hamster yaitu
                        <b> 75 x 40 x 40 cm </b>dengan tinggi sekitar{" "}
                        <b>19cm.</b>
                        <br /> Khusus Hamster jenis Syrian, ukuran dan tinggi
                        kandang harus lebih besar ya!
                        <br /> Tidak berbahan kawat atau besi karena tidak baik
                        untuk kaki dan gigi hamster.
                      </p>
                    </div>
                  </div>
                </div>
              </Row>
            </div>
          </div>
        </div>

        {/* opsi kandang */}
        <div
          className="a-container"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <div className="card-opsi d-flex align-center justify-center">
            <div className="card-hemi">
              <Row>
                <div
                  className="col-md-8"
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                >
                  <h2>Opsi Kandang untuk Hamster</h2>
                  <div className="hemi-detail-opsi">
                    <ul>
                      <li>
                        <b>Kandang Plastik </b>
                      </li>
                      Berbentuk container atau kotak plastik
                      <li>
                        <b>Aquarium </b>
                      </li>
                      Berbahan kaca, akrilik, atau plastik
                      <li>
                        <b>Kandang Kayu </b>
                      </li>
                      Dengan tambahan bahan akrilik dan kawat besi penutup
                    </ul>
                  </div>
                </div>
                <div
                  className="col-md-4"
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                >
                  <div className="gambar-hemi">
                    <img src={Hemidle} className="img-hemi-opsi img-fluid" />
                  </div>
                </div>
              </Row>
            </div>
          </div>
        </div>

        {/* kandang plastik */}
        <div
          className="a-container"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <div className="card-plastik d-flex align-center justify-center">
            <div className="card-hemi">
              <Row>
                <div
                  className="col-lg-4"
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                >
                  <div className="gambar-hemi-kandang">
                    <img
                      src={Container}
                      className="gambar-hemi-kandang img-fluid"
                      alt="Responsive Image"
                    />
                  </div>
                </div>

                <div
                  className="col-lg-8"
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                >
                  <div className="header-detail">
                    <h3>Kandang Plastik</h3>
                    <div className="hemi-detail">
                      <p>
                        Kandang ini memiliki ruang yang luas, jadi membuat hamster nyaman untuk mengeksplorasi dan membuat ruang
                        untuk sarangnya. Contoh kandang plastik yang mudah ditemukan dipasaran yaitu Container plastik.
                        <ul>
                          <li>
                            <b>Kelebihan : </b>Mudah dibersihkan, mudah didapat di pasaran, harganya terjangkau
                          </li>
                          <li>
                            <b>Rekomendasi : </b>Container plastik 130 liter untuk hamster dwarf, dan ukuran 150lt untuk Syrian
                          </li>
                        </ul>
                      </p>
                    </div>
                  </div>
                </div>
              </Row>
            </div>
          </div>
        </div>

        {/* kandang aquarium */}
        <div
          className="a-container"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <div className="card-aquarium d-flex align-center justify-center">
            <div className="card-hemi">
              <Row>
                <div
                  className="col-lg-4"
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                >
                  <div className="gambar-hemi-kandang">
                    <img
                      src={Aquarium}
                      className="gambar-hemi-kandang img-fluid"
                      alt="Responsive Image"
                    />
                  </div>
                </div>

                <div
                  className="col-lg-8"
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                >
                  <div className="header-detail">
                    <h3>Kandang Aquarium</h3>
                    <div className="hemi-detail">
                      <p>
                        Kandang ini memiliki ruang yang luas dengan bahan kaca yang bisa dipastikan kokoh untuk jangka waktu yang
                        panjang. Ada juga aquarium dari bahan akrilik yang lebih terjangkau dan lebih ringan.
                        <ul>
                          <li>
                            <b>Kelebihan : </b>Mudah ditemukan di pasaran, harganya terjangkau
                          </li>
                          <li>
                            <b>Rekomendasi : </b>Bahannya tebal jadi bobotnya berat, agak sulit dibersihkan dan diangkat
                          </li>
                        </ul>
                      </p>
                    </div>
                  </div>
                </div>
              </Row>
            </div>
          </div>
        </div>

        {/* kandang kayu */}
        <div
          className="a-container"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <div className="card-aquarium d-flex align-center justify-center">
            <div className="card-hemi">
              <Row>
                <div
                  className="col-lg-4"
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                >
                  <div className="gambar-hemi-kandang">
                    <img
                      src={Kayu}
                      className="gambar-hemi-kandang img-fluid"
                      alt="Responsive Image"
                    />
                  </div>
                </div>

                <div
                  className="col-lg-8"
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                >
                  <div className="header-detail">
                    <h3>Kandang Kayu</h3>
                    <div className="hemi-detail">
                      <p>
                        Kita juga dapat berkreasi untuk membuat kandang sendiri dengan bahan kayu, akrilik dan kawat. Untuk dasar,
                        bagian belakang dan kedua sisi kandang dapat dibuat menggunakan kayu, dan bagian depan menggunakan akrilik.
                        Bagian tutup kandang dapat dibuat dengan kawat. Fungsi akrilik disini agar hamster dapat terlihat dari bagian depan kandang.
                        <ul>
                          <li>
                            <b>Kelebihan : </b>Harganya menyesuaikan dengan
                            bahan yang digunakan
                          </li>
                          <li>
                            <b>Rekomendasi : </b>Proses pembuatan memakan waktu, bahan kayu mudah digerogoti oleh hamster dan kayu
                            cepat lapuk karena air seni hamster. Namun bisa kamu lakukan pembersihan secara rutin agar kandangnya tetap terawat
                          </li>
                        </ul>
                      </p>
                    </div>
                  </div>
                </div>
              </Row>
            </div>
          </div>
        </div>

        {/* header alas kandang */}
        <div
          className="a-container"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <div className="card-alas-atas d-flex align-center justify-center">
            <div className="card-hemi">
              <Row>
                <div
                  className="col-lg-8"
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                >
                  <div>
                    <h3 className="alas-title">
                      Alas Kandang yang Aman
                      <br />
                      Untuk Hamster tapi Hemat Biaya?
                    </h3>
                    <div className="alas-detail">
                      <p>
                        <b>Alas serbuk kayu</b> adalah yang paling aman digunakan, karena selain harganya murah serbuk kayu juga mudah dicari di pasaran.
                        Serbuk kayu yang digunakan harus bersih dan minim residu kayu agar hamster tidak mengalami infeksi pernafasan.{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-4"
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                >
                  <div className="gambar-hemi">
                    <img
                      src={Serbukayu}
                      className="img-hemi-alas img-fluid"
                      alt="Responsive Image"
                    />
                  </div>
                </div>
              </Row>
            </div>
          </div>
        </div>

        <div className="cards-alas" data-aos="zoom-in" data-aos-duration="1000">
          <section className="cards-alas container">
            <Row>
              <Cardalas></Cardalas>
            </Row>
          </section>
        </div>

        {/* header kebutuhan */}
        <div className="a-container" data-aos="zoom-in" data-aos-duration="1000">
          <div className="card-header d-flex align-center justify-center">
            <div className="card-hemi">
              <Row>
                <div className="col-lg-4" data-aos="zoom-in" data-aos-duration="1000">
                  <div className="gambar-hemi">
                    <img
                      src={Kebutuhan}
                      className="img-hemi img-fluid"
                      alt="Responsive Image"
                    />
                  </div>
                </div>

                <div
                  className="col-lg-8"
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                >
                  <div className="header-detail">
                    <h3>
                      Selain Kandang dan Alasnya, Apa Lagi
                      <br />
                      yang Hamster Butuhkan?
                    </h3>
                    <div className="hemi-detail">
                      <p>
                        Tentunya hamster membutuhkan aksesoris dan peralatan kandang lainnya, seperti mainan, roda latihan, tempat
                        makan dan minum, rumah dan tempat bersembunyi, tempat mandi, dan tempat buang air.
                        <br /> Khusus makanan kita bahas di halaman "Makanan Hamster" ya!
                      </p>
                    </div>
                  </div>
                </div>
              </Row>
            </div>
          </div>
        </div>

        <div className="cards-alas" data-aos="zoom-in" data-aos-duration="1000">
          <section className="cards-alas container">
            <Row>
              <Cardkebutuhan></Cardkebutuhan>
            </Row>
          </section>
        </div>
      </section>
    </>
  );
};

export default Perawatan;
