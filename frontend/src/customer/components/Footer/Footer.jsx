import React from "react";
import { Link } from "react-router-dom";
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import { useNavigate } from "react-router-dom";
function Footer() {
  const navigate =useNavigate()
  return (
    <>
      {/* <link
        rel="stylesheet"
        href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css"
      /> */}
      {/* <link
        rel="stylesheet"
        href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css"
      /> */}

      <footer className="relative bg-slate-50 border border-t-[1px] border-t-slate-200 min-h-[250px] pt-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap text-left lg:text-left mb-6">
            <div className="w-full lg:w-6/12 px-4">
              <h4 className="text-3xl font-roboto ">
                EMPRESSA
              </h4>
              <h5 className="text-gray-900 font-roboto text-lg mt-0 mb-2">
                BE BOLD, BE YOU, BE UNSTOPPABLE
              </h5>
              <div className="mt-2 flex gap-2 lg:mb-0 mb-6">
                <button onClick={() => window.location.href = "https://www.instagram.com/empressa.fashion/"}
                  className="flex bg-white text-gray-500 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <InstagramIcon />
                </button>
                <button onClick={() => navigate("/contact")}
                  className="flex bg-white text-gray-500 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <EmailIcon />
                </button>
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="flex items-top mb-6">
                <div className="w-full lg:w-4/12 ml-auto">
                  <span className="block uppercase  text-sm font-semibold mb-2">
                    Useful Links
                  </span>
                  <ul className="list-unstyled">
                    <li as={Link}>
                      <Link
                        className="text-gray-800 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        to="/about"
                      >
                        About Us
                      </Link>
                    </li>
                    <li as={Link}>
                      <Link
                        className="text-gray-800 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        to="/contact"
                      >
                        Contact Us
                      </Link>
                    </li>
                    <li>
                      <Link to="/women-warriors">
                        <p className="text-gray-800 hover:text-blueGray-800 font-semibold block pb-2 text-sm">
                          Women Warriors
                        </p>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="w-full lg:w-4/12">
                  <span className="block uppercase text-sm font-semibold mb-2">
                    Other Resources
                  </span>
                  <ul className="list-unstyled">
                    {/* <li>
                      <Link to="/refund">
                        <p className="text-gray-800 hover:text-blueGray-800 font-semibold block pb-2 text-sm">
                          Refund
                        </p>
                      </Link>
                    </li> */}
                    <li>
                      <Link to="/privacy">
                        <p className="text-gray-800 hover:text-blueGray-800 font-semibold block pb-2 text-sm">
                          Privacy Policy
                        </p>
                      </Link>
                    </li>
                    <li>
                      <Link to="/term">
                        <p className="text-gray-800 hover:text-blueGray-800 font-semibold block pb-2 text-sm">
                          Term and Services
                        </p>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-gray-800 font-semibold py-1">
                Copyright © <span id="get-current-year">2024</span>
              </div>
            </div>
          </div>
        </div>
      </footer >
    </>
  );
}
export default Footer;
