import Logo from "../assets/LogoHamsped.svg"
import "../styles/footer.css";
import { Link } from "react-router-dom";
import tele from "../assets/icon/tele.png";
import wa from "../assets/icon/wa.png";
import ig from "../assets/icon/ig.png";
import tt from "../assets/icon/tt.png";

const footer = () => {
  return (
    <>
      <div className="bg-color-footer mt-5 stroke-card-border shadow-sm">
        <div className="container ">
          <div className="row d-flex justify-content-between pt-4 pb-3">
            <div className="col-mb-5 col-md-4 mt">
              <img src={Logo} alt="" />
              <div className="text-gray  mb-4">
                <p>
                  <span className="text-carevul fw-bolder"> Hamster Pedia :</span>{" "}
                  {/* <span className="text-carevul fw-bolder"> Carevul </span> */}
                  Portal Utama
                  <br />
                  Perawatan Sobat Kecilmu!
                </p>
              </div>

              <div className=" social-media d-flex justify-content-between mb-5">
                <img src={tt} alt="" />
                <img src={ig} alt="" />
                <img src={wa} alt="" />
                <img src={tele} alt="" />
              </div>
            </div>

            <div className="col-lg-2 my-3 mb-md-2 ">
              <div className="list-footer flex-column d-flex justify-content-around">
                <div className="d-flex flex-column  gap-2">
                  <h5 className="text-carevul">Site Map</h5>
                  <Link to="/" className="fw-normal text-gray">
                    Jenis
                  </Link>
                  <Link to="/articlehome" className="fw-normal text-gray">
                    Perawatan
                  </Link>
                  <Link to="/bmicalculator" className="fw-normal text-gray">
                    Panduan Pengiriman
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-2 my-3 mb-md-2 ">
              <div className="list-footer ">
                <div className="d-flex flex-column  gap-2 ">
                  <h5 className="text-carevul">Lainnya</h5>
                  <Link to="" className="fw-normal  text-gray">
                    Forum Lilpawfam
                  </Link>
                  <Link to="" className="fw-normal  text-gray">
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-2 my-3  mb-md-2">
              <div className="list-footer">
                <div className="fw-2 d-flex flex-column gap-2">
                  <h5 className="text-carevul ">Kontak Kami</h5>

                  <span className="fw-normal">hamsterpedia@gmail.com </span>

                  <span>Jakarta, Indonesia</span>
                  <span>0882-2923-2714</span>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="d-flex justify-content-center align-items-center ">
            <div className="d-flex justify-content-center align-items-center ">
              Copyright © 2024 Hamster Pedia
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default footer;
