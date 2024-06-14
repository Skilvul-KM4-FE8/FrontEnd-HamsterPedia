// import { width } from "@mui/system";
import "../styles/forum.css";
import { Outlet } from "react-router";
import { Link, NavLink } from "react-router-dom";
import { Container, Row } from "react-bootstrap";
// import illust

// Aos
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Forum = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
    return (
        <>
            <section>

            </section>
        </>
    );
}

export default Forum;