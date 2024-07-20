// import { width } from "@mui/system";
import "../styles/ilmiah.css";
import { Row } from "react-bootstrap";

// import illust
import Ilmiah1 from "../assets/ilmiah/ilmiah1.jpg";

// Aos
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const FaktaIlmiah = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
    document.title = "Fakta Ilmiah Hamster";
  }, []);
  return (
    <>
      <section>
        {/* header ilmiah */}
        <div className="parallax">
          <div
            className="parallax-title"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <h4>
              Pemanfaatan Hamster <br />
              Sebagai Hewan Laboratorium
            </h4>
          </div>
          <div
            className="parallax-desc"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <Row>
              <div className="col-lg-2"> </div>
              <div className="col-lg-8">
                <p>
                  Hamster merupakan <b>peringkat ke-5</b> dalam pemanfaatannya
                  sebagai hewan laboratorium. Hamster menjadi sangat penting
                  dalam berbagai bidang penelitian karena sangat cocok untuk
                  penelitian tertentu.
                </p>
              </div>
              <div className="col-lg-2"> </div>
            </Row>
          </div>
        </div>

        {/* header materi ilmiah */}
        <div
          className="a-container"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <div className="card-faktailmiah d-flex align-center justify-center">
            <div className="card-hemi">
              <Row>
                <div
                  className="col-lg-8"
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                >
                  <div>
                    <h4 id="fakta-title">
                      Hamster beradaptasi dengan baik di laboratorium dan
                      menjadi salah satu hewan percobaan yang penting
                    </h4>
                    <div className="fakta-detail">
                      <p>
                        Pada tahun 1945, hamster diakui sebagai
                        hewan peliharaan yang populer, terutama di Inggris,
                        kemudian di Amerika Serikat dan beberapa negara Eropa
                        lainnya. Di laboratorium, hamster tidak memerlukan
                        perlakuan khusus.
                      </p>
                      <p>
                        Mereka akan tumbuh dengan cepat menggunakan pendekatan
                        standar yang biasa diterapkan pada tikus sebagai hewan
                        percobaan laboratorium, dengan makanan utama berupa
                        pelet tikus yang diberi tambahan campuran biji-bijian
                        seperti gandum, terigu, dan serpihan maizena.
                      </p>
                      <h4 id="fakta-title">
                      Nilai suatu hewan bergantung pada kegunaannya dalam penelitian
                    </h4>
                      <p>
                        Ilmu biologi terus mencari spesies baru yang
                        berpotensi bermanfaat untuk penelitian yang dimana
                        beberapa bisa menjadi tantangan serius bagi spesies lain
                        (seperti tikus, guinea pig, dan kelinci). <b>Hamster
                        mendekati peringkat kelima dalam hal ini dan mungkin
                        akan menggantikan posisi guinea pig.</b>
                      </p>
                      <p>
                        Tidak seperti hewan pengerat laboratorium lainnya,
                        hamster mampu berhibernasi selama periode pendek sekitar
                        5-7 hari, meskipun durasi ini biasanya lebih singkat.
                        Karena kemampuan alami ini, hamster sering digunakan
                        dalam penelitian tentang hibernasi atau eksperimen pada
                        suhu rendah. 
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
                      src={Ilmiah1}
                      className="img-hemi-fakta img-fluid"
                      alt="Responsive Image"
                    />
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

export default FaktaIlmiah;
