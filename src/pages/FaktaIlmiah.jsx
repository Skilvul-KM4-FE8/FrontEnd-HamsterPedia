// import { width } from "@mui/system";
import "../styles/ilmiah.css";
import { Outlet } from "react-router";
import { Link, NavLink } from "react-router-dom";
import { Row } from "react-bootstrap";

// import illust
import Header from "../assets/ilmiah/header.jpg";

// Aos
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const FaktaIlmiah = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
    return (
        <>
            <section>
                {/* header ilmiah */}
                <div className="parallax">
                        <div className="parallax-title" data-aos="zoom-in" data-aos-duration="1000">
                            <h4>Pemanfaatan Hamster <br/>Sebagai Hewan Laboratorium</h4>
                        </div>
                        <div className="parallax-desc" data-aos="zoom-in" data-aos-duration="1000">
                            <Row>
                                <div className="col-lg-2"> </div>
                                <div className="col-lg-8">
                                    <p>Hamster merupakan <b>peringkat ke-5</b> dalam pemanfaatannya sebagai hewan laboratorium. Hamster menjadi sangat penting dalam berbagai bidang penelitian
                                    karena sangat cocok untuk penelitian tertentu, dan di laboratorium, hamster tidak memerlukan perlakuan khusus.</p>
                                </div>
                                <div className="col-lg-2"> </div>
                            </Row>
                        </div>
                </div>
            </section>
        </>
    );
}

export default FaktaIlmiah;