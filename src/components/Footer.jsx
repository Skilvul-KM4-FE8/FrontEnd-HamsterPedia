import Logo from "../assets/LogoHamsped.svg";
import "../styles/footer.css";
import { Link } from "react-router-dom";

const footer = () => {
  return (
    <>
      <div className="bg-color-footer mt-5 stroke-card-border shadow-sm">
        <div className="container ">
          <div className="row d-flex justify-content-between pt-4 pb-3">
            <div className="col-mb-5 col-md-4 mt">
              <img src={Logo} alt="" /> <br />
              <br />
              <div className="text-gray  mb-4">
                <p>
                  <span className="text-hamsped fw-bolder">
                    {" "}
                    Hamster Pedia :
                  </span>{" "}
                  Portal Utama
                  <br />
                  Perawatan Sobat Kecilmu!
                </p>
              </div>
            </div>

            <div className="col-lg-2 my-3 mb-md-2 ">
              <div className="list-footer flex-column d-flex justify-content-around">
                <div className="d-flex flex-column  gap-2">
                  <h5 className="text-hamsped">Menu Laman</h5>
                  <Link
                    to="/#"
                    className="fw-normal text-gray"
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    Beranda
                  </Link>
                  <Link
                    to="/jenishamster"
                    className="fw-normal text-gray"
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    Jenis Hamster
                  </Link>
                  <Link
                    to="/perawatanhamster"
                    className="fw-normal text-gray"
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    Perawatan Hamster
                  </Link>
                  <Link
                    to="/makananhamster"
                    className="fw-normal text-gray"
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    Makanan Hamster
                  </Link>
                  <Link
                    to="/dnd"
                    className="fw-normal text-gray"
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    Do's and Don'ts
                  </Link>
                  <Link
                    to="/faktailmiah"
                    className="fw-normal text-gray"
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    Fakta Ilmiah
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-2 my-3 mb-md-2 ">
              <div className="list-footer ">
                <div className="d-flex flex-column  gap-2 ">
                  <h5 className="text-hamsped">Lainnya</h5>
                  <Link
                    to="/forum"
                    className="fw-normal  text-gray"
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    Forum
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-2 my-3  mb-md-2">
              <div className="list-footer">
                <div className="fw-2 d-flex flex-column gap-2">
                  <h5 className="text-hamsped ">Kontak Kami</h5>

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
