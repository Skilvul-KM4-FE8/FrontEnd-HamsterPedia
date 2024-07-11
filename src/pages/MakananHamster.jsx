// import { width } from "@mui/system";
import "../styles/makanan.css";
import { Outlet } from "react-router";
import { Link, NavLink } from "react-router-dom";
import { Row } from "react-bootstrap";

// import illust
import Meal from "../assets/perawatan/makanan.jpg";
import Meal1 from "../assets/perawatan/makanan/1.png";
import Meal2 from "../assets/perawatan/makanan/2.png";
import Meal3 from "../assets/perawatan/makanan/3.png";
import Meal4 from "../assets/perawatan/makanan/4.png";
import Meal5 from "../assets/perawatan/makanan/5.png";
import Meal6 from "../assets/perawatan/makanan/6.png";
import Piramida from "../assets/perawatan/makanan/piramida.jpg";

// Aos
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Makanan = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
        document.title = "Makanan Hamster";
      }, []);
    return (
        <>
            <section>
            <   div className="top-makananhamster">
                    <h1 className="a-text d-flex mt-5">Makanan Hamster</h1>
                        <p id="a-text-subtitle">
                        Kira-kira makanan apa yang harus dikonsumsi hamster ya? <br />
                        Yuk simak informasi berikut untuk mengetahui kebutuhan makanan hamster kamu!
                        </p>
                </div>

                {/* header makanan */}
                <div className="a-container" data-aos="zoom-in" data-aos-duration="1000">
                    <div className="card-header d-flex align-center justify-center">
                        <div className="card-hemi">
                                <Row>
                                    <div className="col-lg-4" data-aos="zoom-in" data-aos-duration="1000">
                                        <div className="img-header-makanan">
                                            <img src={Meal} className="img-header-makanan img-fluid" alt="Responsive Image"/>
                                        </div>
                                    </div>

                                    <div className="col-lg-8" data-aos="zoom-in" data-aos-duration="1000">
                                        <div className="header-makanan">
                                            <h3>Wajib Berikan Biji-Bijian,<br/>
                                            Bukan Hanya Kuaci atau Kacang!</h3>
                                                <div className="hemi-detail">
                                                    <p>Kamu bisa memberikan makanan hamster berupa biji-bijian yang dicampur dengan sayuran kering, dan bisa juga ditambahkan protein seperti mealworm kering.
                                                        Hindari junk food dan selalu berikan makanan sehat seperti biji-bijian, sayuran segar, dan buah-buahan kepada hamster kamu.
                                                    </p>
                                                </div>
                                        </div>
                                    </div>
                                </Row>
                        </div>
                    </div>
                </div>

                {/* Piramida Makanan */}
                <div className="a-container" data-aos="zoom-in" data-aos-duration="1000">
                    <div>
                        <h3 className="piramida-title">Piramida Makanan Hamster</h3>
                        <p className="piramida-detail">Pelajari piramida makanan hamster dibawah ini untuk mengetahui prioritas makanan yang harus dikonsumsi, mulai dari makanan wajib sampai cemilan pelengkap.</p>
                    </div>
                        <Row>
                        <div className="col-lg-6" data-aos="zoom-in" data-aos-duration="1000">
                            <div className="img-piramida-makanan">
                                <img src={Piramida} className="img-header-makanan img-fluid" alt="Responsive Image"/>
                            </div>
                        </div>
                        <div className="col-lg-6" data-aos="zoom-in" data-aos-duration="1000">
                        <Row id="card-piramid">
                                <h4>1. Biji-Bijian Kering</h4>
                                <p>Biji-bijian merupakan makanan utama hamster, berikan campuran biji-bijian 1x sehari sebanyak 1 sendok makan. Pada keesokan hari, ganti biji-bijian yang tersisa dan ganti dengan yang baru.</p>
                            </Row>
                            <Row id="card-piramid">
                                <h4>2. Sayur dan Buah Segar</h4>
                                <p>Sayur dan buah bukanlah makanan hamster, melainkan makanan selingan yang hanya boleh diberikan 2x saja dalam seminggu.</p>
                            </Row>
                            <Row id="card-piramid">
                                <h4>3. Protein</h4>
                                <p>Berikan protein sebagai makanan pelengkap. Diantaranya daging ayam rebus, daging sapi giling, pasta, dan serangga kering.</p>
                            </Row>
                            <Row id="card-piramid">
                                <h4>4. Cemilan</h4>
                                <p>Kamu bisa berikan cemilan tambahan seperti cemilan kering seperti biji bunga matahari, gandum, kacang tanah. </p>
                            </Row>
                        </div>
                     </Row>
                </div>

                {/* card makanan */}
                <div className="a-container" data-aos="zoom-in" data-aos-duration="1000">
                    <div className="card-makanan d-flex align-center justify-center">
                        <div className="card-hemi">
                                <Row className="row-makanan">
                                    <div className="col-lg-3" data-aos="zoom-in" data-aos-duration="1000">
                                        <div className="gambar-hemi">
                                            <img src={Meal1} className="img-hemi-makan img-fluid" alt="Responsive Image"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-3" data-aos="zoom-in" data-aos-duration="1000">
                                        <div className="makanan-detail">
                                            <h3 className="header-mam1">Biji-Bijian</h3>
                                            <p>Terdiri dari campuran kacang-kacangan dan biji-bijian seperti kuaci, millet, biji labu, beras merah, kacang hijau, dan jagung.</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-3" data-aos="zoom-in" data-aos-duration="1000">
                                        <div className="gambar-hemi">
                                            <img src={Meal2} className="img-hemi-makan img-fluid" alt="Responsive Image"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-3" data-aos="zoom-in" data-aos-duration="1000">
                                        <div className="makanan-detail">
                                            <h3>Pellet Hamster</h3>
                                            <p>Pelet khusus hamster yang terbuat dari biji-bijian, jerami atau bahan alami lainnya, bukan pelet ikan atau pelet burung ya.</p>
                                        </div>
                                    </div>
                                </Row>
                                <Row className="row-makanan">
                                    <div className="col-lg-3" data-aos="zoom-in" data-aos-duration="1000">
                                        <div className="gambar-hemi">
                                            <img src={Meal3} className="img-hemi-makan img-fluid" alt="Responsive Image"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-3" data-aos="zoom-in" data-aos-duration="1000">
                                        <div className="makanan-detail">
                                            <h3 className="header-mam1">Buah & Sayur</h3>
                                            <p>Berikan dalam porsi sedikit dan jangan setiap hari. Wortel, timun, brokoli, sawi, kubis, kembang kol, apel tanpa biji, stroberi, anggur, pisang, pir, dan melon.</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-3" data-aos="zoom-in" data-aos-duration="1000">
                                        <div className="gambar-hemi">
                                            <img src={Meal4} className="img-hemi-makan img-fluid" alt="Responsive Image"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-3" data-aos="zoom-in" data-aos-duration="1000">
                                        <div className="makanan-detail">
                                            <h3>Serangga Kering</h3>
                                            <p>Seperti jangkrik atau mealworm. Bisa kamu beli di petshop, jangan asal mengeringkan serangga di halaman rumah ya!</p>
                                        </div>
                                    </div>
                                </Row>
                                <Row className="row-makanan">
                                    <div className="col-lg-3" data-aos="zoom-in" data-aos-duration="1000">
                                        <div className="gambar-hemi">
                                            <img src={Meal5} className="img-hemi-makan img-fluid" alt="Responsive Image"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-3" data-aos="zoom-in" data-aos-duration="1000">
                                        <div className="makanan-detail">
                                            <h3 className="header-mam1">Jerami Kering</h3>
                                            <p>Hamster juga menyukai Jerami kering yang biasa disebut Hay. Jerami ini bisa jadi makanan hamster yang mengandung serat.</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-3" data-aos="zoom-in" data-aos-duration="1000">
                                        <div className="gambar-hemi">
                                            <img src={Meal6} className="img-hemi-makan img-fluid" alt="Responsive Image"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-3" data-aos="zoom-in" data-aos-duration="1000">
                                        <div className="makanan-detail">
                                            <h3>Makanan Lain</h3>
                                            <p>Kentang rebus, roti gandum, pasta yang sudah dimasak, telur rebus, daging ayam matang, dan kacang selain kacang almond.</p>
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

export default Makanan;