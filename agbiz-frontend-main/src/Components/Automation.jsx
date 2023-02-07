import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Img9 from "../assets/crm.svg";
import Crm1 from "../assets/crmp1.webp";
import Crm2 from "../assets/crmp2.webp";
import Crm3 from "../assets/crmp3.webp";
import Crmimg1 from "../assets/Crmimg1.webp";
import Crmimg2 from "../assets/Crmimg2.webp";
import Crmimg3 from "../assets/Crmimg3.webp";
import Crmimg4 from "../assets/Crmimg4.webp";
import Crmimg5 from "../assets/Crmimg5.webp";
import Crmimg6 from "../assets/Crmimg6.webp";
import ContactForm from "./ContactForm";
import { Link } from "react-router-dom";


const Automation = () => {
  return (
    <>
      <Header />
      <section className="text-gray-400  body-font">
        <div className="container mx-auto flex px-5 pb-10 pt-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src={Img9}
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
              Business Automation & Management Software
            </h1>
            <p className="mb-8 leading-relaxed">
              We provides automation tools to business owners to help them save
              time and increase productivity. We were founded in 2014 with the
              mission of helping businesses automate their workflows and improve
              their efficiency.We offer a wide range of products that can help
              businesses automate their tasks, from customer relationship
              management (CRM) to invoicing and accounting. We also offer
              consulting services to help businesses implement our products and
              get the most out of them.If you are a business owner who is
              looking for ways to save time and increase your productivity, we
              can help you! Contact us today to learn more about our products
              and services.
            </p>
            <div className="flex justify-center">
            <a href="https://wa.me/message/HZEZ6CKEBXO2K1" target="_blank">
                <button className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                  Connect
                </button>
              </a>
              <a href="https://drive.google.com/file/d/1dLiD6k6Ll8eM2tDK2K-Vq2wtpZuLg8-w/view?usp=share_link" target="_blank">
              <button className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                Know More
              </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="text-gray-400  body-font">
        <div className="container px-5 py-12 mx-auto flex flex-wrap">
        <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">
              Everything Integrated - One-stop Business Automation System
              </h1>
              <div className="h-1 w-20 bg-purple-500 rounded"></div>
              <p className="lg:w-1/2 w-full leading-relaxed text-gray-400 text-opacity-90">
              Salez Robot autopilots your business software by automating your presales, sales, and after-sales processes. We are the first CRM Automation system company offering bundled integrations, including WhatsApp API, IVR Cloud Telephony, Chatbot, and HD Call Recording, at an affordable price point.
            </p>
            </div>
          <div className="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
            <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
              <div className="h-full w-1 bg-gray-800 pointer-events-none"></div>
            </div>
            <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-purple-500 text-white relative z-10 title-font font-medium text-sm">
              1
            </div>
            <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
              <div className="flex-shrink-0 w-24 h-24 bg-gray-800 text-purple-400 rounded-full inline-flex items-center justify-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-12 h-12"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <h2 className="font-medium title-font text-white mb-1 text-xl">
                  PRESALES
                </h2>
                <p className="leading-relaxed">
                Salez Robot automatically captures leads across platforms, distributes them to the right person instantly, auto-sends welcome messages, and updates lead outcomes to the business owner in two minutes.
                </p>
              </div>
            </div>
          </div>
          <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
            <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
              <div className="h-full w-1 bg-gray-800 pointer-events-none"></div>
            </div>
            <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-purple-500 text-white relative z-10 title-font font-medium text-sm">
              2
            </div>
            <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
              <div className="flex-shrink-0 w-24 h-24 bg-gray-800 text-purple-400 rounded-full inline-flex items-center justify-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-12 h-12"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <h2 className="font-medium title-font text-white mb-1 text-xl">
                  SALES
                </h2>
                <p className="leading-relaxed">
                Salez Robot's automation ensures that sales reps never miss the opportunity of connecting, following up, and leveraging new sales opportunities with prospects and clients. In addition, SalezRobot automatically manages multiple quotes, customers, and payments, including complete sales processes such as invoices, AMCs, renewals, and purchase orders.
                </p>
              </div>
            </div>
          </div>
          <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
            <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
              <div className="h-full w-1 bg-gray-800 pointer-events-none"></div>
            </div>
            <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-purple-500 text-white relative z-10 title-font font-medium text-sm">
              3
            </div>
            <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
              <div className="flex-shrink-0 w-24 h-24 bg-gray-800 text-purple-400 rounded-full inline-flex items-center justify-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-12 h-12"
                  viewBox="0 0 24 24"
                >
                  <circle cx="12" cy="5" r="3"></circle>
                  <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
                </svg>
              </div>
              <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <h2 className="font-medium title-font text-white mb-1 text-xl">
                  AFTER-SALES
                </h2>
                <p className="leading-relaxed">
                Resolve queries faster, manage the entire customer lifecycle from enquiry to delivery, deliver exceptional customer support from a single platform, and create repeat customers.
                </p>
              </div>
            </div>
          </div>
          
        </div>
      </section>

      <section className="text-gray-400 body-font ">
        <div className="container px-5 py-12 mx-auto">
          <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">
                SALEZROBOT CRM Software's 
              </h1>
              <div className="h-1 w-20 bg-purple-500 rounded"></div>
            </div>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-400 text-opacity-90">
            The Salez Robot CRM platform includes all the features and integrations necessary for turbo-charging CRM across industry types. Our industry-specific solutions drive success and help businesses rise to every challenge.
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-600 bg-opacity-40 p-6 rounded-lg">
                <img
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src={Crm1}
                  alt="content"
                />
                <h3 className="tracking-widest text-purple-400 text-xs font-medium title-font">
                  SALEZROBOT CRM
                </h3>
                <h2 className="text-lg text-white font-medium title-font mb-4">
                  Common - For All Business
                </h2>
                <p className="leading-relaxed text-base">
                Your journey to seamless categorization, lead management, omnichannel marketing, and scorecards begins with Salez Robot CRM. Stay on top of your Bookings, Mobile apps, Itinerary planning and control, Quotations, and Feedback systems from a single platform.
                </p>
                <Link to="/booking">
                <button className="flex mx-auto mt-16 text-white bg-purple-500 border-0 py-2 px-8 focus:outline-none hover:bg-purple-600 rounded text-lg">
            Book Demo
          </button></Link>
              </div>
              
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-600 bg-opacity-40 p-6 rounded-lg">
                <img
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src={Crm2}
                  alt="content"
                />
                <h3 className="tracking-widest text-purple-400 text-xs font-medium title-font">
                  SALEZROBOT CRM
                </h3>
                <h2 className="text-lg text-white font-medium title-font mb-4">
                  For Real Estate Industry
                </h2>
                <p className="leading-relaxed text-base">
                Our rise to dominance has been built on our ability to deliver on the entire real estate management CRM ecosystem. From the initial lead outreach to the property handover, Salez Robot has been the trusted go-to CRM solution for over 100+ Credai Developers and 1000+ Brokers for years.
                </p>
                <Link to="/booking">
                <button className="flex mx-auto mt-16 text-white bg-purple-500 border-0 py-2 px-8 focus:outline-none hover:bg-purple-600 rounded text-lg">
            Book Demo
          </button></Link>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-600 bg-opacity-40 p-6 rounded-lg">
                <img
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src={Crm3}
                  alt="content"
                />
                <h3 className="tracking-widest text-purple-400 text-xs font-medium title-font">
                  SALEZROBOT CRM
                </h3>
                <h2 className="text-lg text-white font-medium title-font mb-4">
                  For Brokrage/Channel Business
                </h2>
                <p className="leading-relaxed text-base">
                Now manufacturers, new and secondhand dealers, showrooms and channel partners  can zoom ahead with generating, nurturing leads and driving conversions. Auto-receive buyer queries from your internet platforms, website, automotive marketplaces, phone, PPC, and social networks. Salez Robot also handles the after-sales service delivering delightful customer experiences on time, every time.
                </p>
                <Link to="/booking">
                <button className="flex mx-auto mt-16 text-white bg-purple-500 border-0 py-2 px-8 focus:outline-none hover:bg-purple-600 rounded text-lg">
            Book Demo
          </button></Link>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      <section className="text-gray-400  body-font">
        <div className="container px-5 py-12 mx-auto">
          <div className="text-center mb-10">
            <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-white mb-4">
              Features Of SalezRobot CRM Software
            </h1>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            There's a reason Salez Robot is the Customer Relationship Management (CRM) platform of choice across small-medium industries. Starting from inquiry to conversion, Salez Robot not only helps to double your revenue but also takes care of your business automation so you can give the daily firefighting situations a rest.
            </p>
          </div>
          <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
            <div className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                  className="text-purple-400 w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span className="title-font font-medium text-white">
                Robotizes workflows, business processes, and customer acquisitions so you can focus more on growing your business and less on day-to-day operations.
                </span>
              </div>
            </div>
            <div className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                  className="text-purple-400 w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span className="title-font font-medium text-white">
                 Salez Robot is designed to simplify life and allow teams to accomplish more in less time.Track staff performance. Increase productivity.
                </span>
              </div>
            </div>
            <div className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                  className="text-purple-400 w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span className="title-font font-medium text-white">
                Unleash the power of insights throughout all phases of the customer life cycle, from lead creation, lead capture, conversion, retention, service, and loyalty to new opportunity identification.
                </span>
              </div>
            </div>
            <div className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                  className="text-purple-400 w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span className="title-font font-medium text-white">
                With a 360° customer persona, you know all there is to know about your clients, Using the Salez Robot Integration,
                combine sales and support
                functions.
                </span>
              </div>
            </div>
            <div className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                  className="text-purple-400 w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span className="title-font font-medium text-white">
                Our accurate reporting system, including a real-time dashboard, widgets and customized reports, takes your business on the road to success easily and quickly.
                </span>
              </div>
            </div>
            <div className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                  className="text-purple-400 w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span className="title-font font-medium text-white">
                Fully automated systems easily operable by even non-technical persons make using the software a dream. And the cherry on the top - Salez Robot high availability means 99.9% uptime and error-free cloud operations.
                </span>
              </div>
            </div>
          </div>
          
        </div>
      </section>

      <section className="text-gray-400  body-font">
        <div className="container px-5 py-12 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
              Some Snapshots Of Our SalezRobot CRM Software
            </h1>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={Crmimg1}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-purple-400 mb-1">
                    Management
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    Everything At One Place
                  </h1>
                  <p className="leading-relaxed">
                    With Our CRM You can manage 75% Business from One Place to save time and increase productivity.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={Crmimg2}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-purple-400 mb-1">
                    DASHBOARD
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    Everything In Control
                  </h1>
                  <p className="leading-relaxed">
                    Salesrobot Crm helps you to Continuesly Moniter Every Aspects of your business from one screen.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={Crmimg3}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-purple-400 mb-1">
                    EMPLOYEE MANAGEMENT
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    Track Attendence Record
                  </h1>
                  <p className="leading-relaxed">
                    Mark, Store and organise the work time and attendence of all your workers.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={Crmimg4}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-purple-400 mb-1">
                    REPORTS
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    Data Management
                  </h1>
                  <p className="leading-relaxed">
                    It Makes it easier to generate diffrent form of Reports , Collect and Circulate among Organisation.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={Crmimg5}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-purple-400 mb-1">
                    NOTIFICATIONs
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    Be Updated
                  </h1>
                  <p className="leading-relaxed">
                    Notifications can help to keep you updated faster on everything and every operations.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={Crmimg6}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-purple-400 mb-1">
                    PRODUCTS & SERVICES
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    Inventory Management
                  </h1>
                  <p className="leading-relaxed">
                    Businesses can add there product and services at a place, so that managing inventory becomes easier and Everything can be asscesable to everyone.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="text-gray-400  body-font">
        <div className="container px-5 py-10 mx-auto">
          <h1 className="text-3xl font-medium title-font text-white mb-12 text-center">
            SALEZROBOT<br/>Get Used Globally
          </h1>
          <div className="flex flex-wrap -m-4 text-center">
            <div className="p-4 sm:w-1/4 w-1/2">
              <h2 className="title-font font-medium sm:text-4xl text-3xl text-white">
                50+
              </h2>
              <p className="leading-relaxed">Countries</p>
            </div>
            <div className="p-4 sm:w-1/4 w-1/2">
              <h2 className="title-font font-medium sm:text-4xl text-3xl text-white">
                25+
              </h2>
              <p className="leading-relaxed">Years Of Experience</p>
            </div>
            <div className="p-4 sm:w-1/4 w-1/2">
              <h2 className="title-font font-medium sm:text-4xl text-3xl text-white">
                5000+
              </h2>
              <p className="leading-relaxed">Clients</p>
            </div>
            <div className="p-4 sm:w-1/4 w-1/2">
              <h2 className="title-font font-medium sm:text-4xl text-3xl text-white">
                10+
              </h2>
              <p className="leading-relaxed">Products</p>
            </div>
          </div>
        </div>
      </section>

      <ContactForm/>

      <Footer />
    </>
  );
};

export default Automation;
