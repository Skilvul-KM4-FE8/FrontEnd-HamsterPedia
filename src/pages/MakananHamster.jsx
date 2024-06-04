// import { width } from "@mui/system";
import "../styles/PerawatanHamster.css";
import { Outlet } from "react-router";
import { Link, NavLink } from "react-router-dom";
import { Row } from "react-bootstrap";

// import illust
import Meal from "../assets/perawatan/makanan.jpg";

// Aos
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Makanan = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
    return (
        <>
            <section>
            <   div className="header-perawatan">
                    <h1 className="a-text d-flex mt-5">Makanan Hamster</h1>
                        <p id="a-text-subtitle">
                        Kira-kira makanan apa yang harus dikonsumsi hamster ya? <br />
                        Yuk cari tahu makanan apa saja yang boleh dikonsumsi hamster kamu!
                        </p>
                </div>

                {/* header makanan */}
                <div className="a-container">
                    <div className="card-header d-flex align-center justify-center">
                        <div className="card-hemi">
                                <Row>
                                    <div className="col-lg-4" data-aos="zoom-in" data-aos-duration="1000">
                                        <div className="gambar-hemi">
                                            <img src={Meal} className="img-hemi img-fluid" alt="Responsive Image"/>
                                        </div>
                                    </div>

                                    <div className="col-lg-8" data-aos="zoom-in" data-aos-duration="1000">
                                        <div className="header-detail">
                                            <h3>Wajib Berikan Biji-Bijian,<br/>
                                            Bukan Hanya Kuaci atau Kacang!</h3>
                                                <div className="hemi-detail">
                                                    <p>Kamu bisa memberikan makanan hamster berupa biji-bijian yang dicampur dengan sayuran kering, dan bisa juga ditambahkan protein seperti mealworm kering.
                                                        <br/> Hindari junk food dan selalu berikan makanan sehat seperti biji-bijian, sayuran segar, dan buah-buahan kepada hamster kamu.
                                                    </p>
                                                </div>
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