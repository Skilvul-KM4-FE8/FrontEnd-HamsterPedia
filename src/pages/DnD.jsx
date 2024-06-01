// import { width } from "@mui/system";
import "../styles/PerawatanHamster.css";
import { Outlet } from "react-router";
import { Link, NavLink } from "react-router-dom";
import { Row } from "react-bootstrap";

// import illust

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
                <div className="a-container">
                    <div className="card-warning d-flex align-center justify-center">
                        <div className="card-hemi">
                            <Row>
                                <div className="col-lg-2">

                                </div>
                                <div className="col-md-8" data-aos="zoom-in" data-aos-duration="1000">
                                    <h3>Jangan Berikan Hamstermu Hal-Hal Dibawah Ini</h3>
                                </div>
                                <div className="col-md-2" data-aos="zoom-in" data-aos-duration="1000">
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