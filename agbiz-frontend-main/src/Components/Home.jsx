import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Offer from "../assets/offer.webp";
import Rsoft from "../assets/rsoftlogo.jpg";
import Vb from "../assets/vblogo.jpeg";
import Img1 from "../assets/Home-1.svg";
import Img2 from "../assets/Home-2.svg";
import { Link } from "react-router-dom";
import ContactForm from "./ContactForm";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import './Home.css';
const Home = () => {

  const [tabledata, setData] = useState([]);
  //  activate on loading
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BASE_URL}/pricingdata`)
      .then((res) => {
        setData(res.data["data"]);
      })
      .catch((err) => {
        console.log(err);
      });
  },[tabledata]);

  let table;
  if (tabledata) {
    table = tabledata.map((row, index) => {
        return (
              <tr className="table-border">
                  <td className="px-4 py-3">{row.service}</td>
                  <td className="px-4 py-3">{row.pricestarting}</td>
                  <td className="px-4 py-3 text-lg text-white">{row.for}</td>
              </tr>
        );
      });
  }

  return (
    <>
      <Header />

      <section className="text-gray-400  body-font">
        <div className="container mx-auto flex px-5 pt-24 pb-10 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
              Business & IT Consultancy Services
            </h1>
            <h2 className="text-white mb-8 leading-relaxed">
              " Delivering Automated Growth In Business Through Technologies "
            </h2>
            <div className="flex justify-center">
              <a href="https://wa.me/message/HZEZ6CKEBXO2K1" target="_blank">
                <button className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                  Connect On Whatsapp
                </button>
              </a>
              <a href="https://drive.google.com/file/d/1dLiD6k6Ll8eM2tDK2K-Vq2wtpZuLg8-w/view?usp=share_link" target="_blank">
              <button className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                Brochure
              </button>
              </a>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src={Img1}
            />
          </div>
        </div>
      </section>

      <section className="text-gray-400  body-font">
        <div className="container px-5 py-8 mx-auto flex flex-wrap">
          <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
            <img
              alt="feature"
              className="object-cover object-center h-full w-full"
              src={Img2}
            />
          </div>

          <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
            <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-white ">
              A One Stop Digital Business Consultancy
            </h1>
            <br />
            <div className="flex flex-col mb-10 lg:items-start items-center">
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 mb-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                  />
                </svg>
              </div>
              <div className="flex-grow">
                <h2 className="text-white text-lg title-font font-medium mb-3">
                  Web-App Development
                </h2>
                <p className="leading-relaxed text-base">
                  It is all about bringing businesses onto digital platforms
                  through websites and web applications. We help businesses by
                  developing custom websites and web applications that are
                  tailored to their specific needs.
                </p>
                <Link
                  to="/website"
                  className="mt-3 text-indigo-400 inline-flex items-center"
                >
                  Starting Rs 5,999/-
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </div>
            <div className="flex flex-col mb-10 lg:items-start items-center">
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 mb-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12 6.75a5.25 5.25 0 016.775-5.025.75.75 0 01.313 1.248l-3.32 3.319c.063.475.276.934.641 1.299.365.365.824.578 1.3.64l3.318-3.319a.75.75 0 011.248.313 5.25 5.25 0 01-5.472 6.756c-1.018-.086-1.87.1-2.309.634L7.344 21.3A3.298 3.298 0 112.7 16.657l8.684-7.151c.533-.44.72-1.291.634-2.309A5.342 5.342 0 0112 6.75zM4.117 19.125a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75h-.008a.75.75 0 01-.75-.75v-.008z"
                    clip-rule="evenodd"
                  />
                  <path d="M10.076 8.64l-2.201-2.2V4.874a.75.75 0 00-.364-.643l-3.75-2.25a.75.75 0 00-.916.113l-.75.75a.75.75 0 00-.113.916l2.25 3.75a.75.75 0 00.643.364h1.564l2.062 2.062 1.575-1.297z" />
                  <path
                    fill-rule="evenodd"
                    d="M12.556 17.329l4.183 4.182a3.375 3.375 0 004.773-4.773l-3.306-3.305a6.803 6.803 0 01-1.53.043c-.394-.034-.682-.006-.867.042a.589.589 0 00-.167.063l-3.086 3.748zm3.414-1.36a.75.75 0 011.06 0l1.875 1.876a.75.75 0 11-1.06 1.06L15.97 17.03a.75.75 0 010-1.06z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <div className="flex-grow">
                <h2 className="text-white text-lg title-font font-medium mb-3">
                  Business Automation Software's
                </h2>
                <p className="leading-relaxed text-base">
                  We have a wide range of products that can help business owners
                  automate their work, from accounting to customer relations
                  management. We also offer a free consultation to help business
                  owners find the right solution for their needs.
                </p>
                <Link
                  to="/crm"
                  className="mt-3 text-indigo-400 inline-flex items-center"
                >
                  Starting Rs 999 pupm/-
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </div>
            <div className="flex flex-col mb-10 lg:items-start items-center">
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 mb-5">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  strokeWidth="2"
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <div className="flex-grow">
                <h2 className="text-white text-lg title-font font-medium mb-3">
                  Digital Marketing
                </h2>
                <p className="leading-relaxed text-base">
                  It is a process of advertising the business on online
                  platforms to grow a business and make it a brand. It helps in
                  creating awareness about the products or services offered by
                  the company among the customers.
                </p>
                <Link
                  to="/marketing"
                  className="mt-3 text-indigo-400 inline-flex items-center"
                >
                  Starting Rs 6,999 pm/-
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="text-gray-400  body-font">
        <div className="container mx-auto flex px-5 py-12 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
              Get Up to 50% Off
            </h1>
            <p className="mb-8 leading-relaxed">
              On the Beginning Of this New Year, Bring Your Business Online with
              us, and Get Up to 50% Discount on Website Development Services and
              many more.
            </p>
            <div className="flex justify-center">
            <Link to="/booking">
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Get The Deal Now
              </button>
              </Link>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src={Offer}
            />
          </div>
        </div>
      </section>
      <section className="text-gray-400  body-font">
        <div className="container px-5 py-12 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-white">
              Pricing
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Along with the Best & Fast Paced Service, Agbiz also offers a Low
              Economic Price in Budget to All Kind of Businesses
            </p>
          </div>
          <div className="lg:w-2/3 w-full mx-auto overflow-auto">
            <table className="table-auto w-full text-left whitespace-no-wrap">
              <thead>
                <tr>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-white text-sm bg-gray-800 rounded-tl rounded-bl">
                    Service
                  </th>

                  <th className="px-4 py-3 title-font tracking-wider font-medium text-white text-sm bg-gray-800">
                    Price Starting
                  </th>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-white text-sm bg-gray-800">
                    For
                  </th>
                </tr>
              </thead>
              <tbody>
                {table}
              </tbody>
            </table>
          </div>
          <div className="flex pl-4 mt-4 lg:w-2/3 w-full mx-auto">
            <a
              href="https://docs.google.com/spreadsheets/d/1c9gINNoNLPXK-9XQ2vWI9kxYyfTl4HCmMRp0e48BmT4/edit?usp=share_link" target="_blank"
              className="text-indigo-400 inline-flex items-center md:mb-2 lg:mb-0"
            >
              Full Price List
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                strokeWidth="2"
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
            <Link to="/booking">
            <button className="flex ml-auto text-white bg-indigo-500 border-0  py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
              Get Started
            </button>
            </Link>
          </div>
        </div>
      </section>
      <section className="text-gray-400  body-font">
        <div className="container px-5 py-10 mx-auto">
          <h1 className="text-3xl font-medium title-font text-white mb-12 text-center">
            Reach
          </h1>
          <div className="flex flex-wrap -m-4 text-center">
            <div className="p-4 sm:w-1/4 w-1/2">
              <h2 className="title-font font-medium sm:text-4xl text-3xl text-white">
                05+
              </h2>
              <p className="leading-relaxed">Services</p>
            </div>
            <div className="p-4 sm:w-1/4 w-1/2">
              <h2 className="title-font font-medium sm:text-4xl text-3xl text-white">
                20+
              </h2>
              <p className="leading-relaxed">Products</p>
            </div>
            <div className="p-4 sm:w-1/4 w-1/2">
              <h2 className="title-font font-medium sm:text-4xl text-3xl text-white">
                25+
              </h2>
              <p className="leading-relaxed">Clients</p>
            </div>
            <div className="p-4 sm:w-1/4 w-1/2">
              <h2 className="title-font font-medium sm:text-4xl text-3xl text-white">
                06+
              </h2>
              <p className="leading-relaxed">States</p>
            </div>
          </div>
        </div>
      </section>
      <section className="text-gray-400  body-font">
        <div className="container px-5 py-10 mx-auto">
          <h1 className="text-3xl font-medium title-font text-white mb-12 text-center">
            Testimonials
          </h1>
          <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/2 w-full">
              <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="block w-5 h-5 text-gray-500 mb-4"
                  viewBox="0 0 975.036 975.036"
                >
                  <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                </svg>
                <p className="leading-relaxed mb-6">
                  {" "}
                  I will fully recommend Agbiz Technologies Private Limited to
                  all business partners as a business will be conducted
                  efficiently and professionally.
                </p>
                <a className="inline-flex items-center">
                  <img
                    alt="testimonial"
                    src={Rsoft}
                    className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                  />
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium text-white">
                      Mr. Lalith Kumar
                    </span>
                    <span className="text-gray-500 text-sm">
                      Rsoft Technologies
                    </span>
                  </span>
                </a>
              </div>
            </div>
            <div className="p-4 md:w-1/2 w-full">
              <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="block w-5 h-5 text-gray-500 mb-4"
                  viewBox="0 0 975.036 975.036"
                >
                  <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                </svg>
                <p className="leading-relaxed mb-6">
                  Agbiz has been a key part behind bringing my business online.
                  It helped from planning to execution. Will Recommend it to all
                  Business willing to come Online.
                </p>
                <a className="inline-flex items-center">
                  <img
                    alt="testimonial"
                    src={Vb}
                    className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                  />
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium text-white">
                      Mr. Sachin Sharma
                    </span>
                    <span className="text-gray-500 text-sm">
                      Vocal Buddy Group
                    </span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ContactForm/>
      <Footer />
    </>
  );
};

export default Home;
