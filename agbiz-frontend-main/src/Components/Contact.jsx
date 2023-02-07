import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Offer from '../assets/offer.webp';
import ContactForm from './ContactForm';

const Contact = () => {
  return (
    <>
    <Header/>

    <section className="text-gray-400  body-font">
    <div className="container mx-auto flex px-5 py-20 md:flex-row flex-col items-center">
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">Contact Us</h1>
        <p className="mb-6 leading-relaxed">Yes!! Its The Right Time to Reach Out Us and Take Your Business On a Digital Journey.</p>
        <a href='https://wa.me/message/HZEZ6CKEBXO2K1' target="_blank">
        <button className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">CONNECT TO AGBIZ</button></a>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <img className="object-cover object-center rounded" alt="Contact Us & Get Huge discounts" src={Offer}/>
      </div>
    </div>
  </section>
<ContactForm/>
  <section className="text-gray-600  body-font relative">
    <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
      <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
      <iframe width="100%" height="100%" className="absolute inset-0" frameborder="0" title="map" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Agbiz Technologies Private Limited&amp;t=&amp;z=5&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" ></iframe>
        <div className="bg-white relative flex flex-wrap p-6 rounded shadow-md">
          <div className="lg:w-1/2 px-6">
            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
            <p className="mt-1">Raebareli, Uttar Pradesh, India Pin- 229001</p>
          </div>
          <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
            <a className="text-red-500 leading-relaxed">connect@agbiztech.in</a>
            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
            <p className="leading-relaxed">085-3387-3389</p>
          </div>
        </div>
      </div>
      
    </div>
  </section>

    <Footer/>
    </>
  );
}

export default Contact;
