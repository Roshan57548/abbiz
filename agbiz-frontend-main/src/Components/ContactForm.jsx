import React, {useState, useRef} from 'react';

const ContactForm = () => {
   const formRef = useRef(null)
   const scriptUrl = "https://script.google.com/macros/s/AKfycbyBFiF8g1Vw7kszovBmaH0LAIZLkGmHO0N7rj444_dbb9Oi269DqxJUH7RauHQ4Vfu6/exec"
   const [loading, setLoading] = useState(false)

   const handleSubmit = (e) =>{
      e.preventDefault()
      setLoading(true)

      fetch(scriptUrl, {
        method: 'POST',
        body: new FormData(formRef.current),

      }).then(res => {
        console.log("THANK YOU FOR CONNECTING TO AGBIZ.")
        setLoading(false)
      })
     .catch(err => console.log(err))
    }
  return (
    <>
    <section className="text-gray-400  body-font">
        <div className="container px-5 py-16 mx-auto flex flex-wrap items-center">
          <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
            <h1 className="title-font font-medium text-3xl text-indigo-400">
              Let's Connect
            </h1>
            <p className="text-white leading-relaxed mt-4">
              AGBIZ Provides Free Business consultation!!<br/>Its Time To Understand & Expand Your Business Upto The Latest Market Trends, All Under Your Own Budget.<br/>We are available 10AM - 10PM (Everyday) <br/> Call At : 08533873389<br/>E-mail At: connect@agbiztech.in
            </p>
          </div>
          <div className="lg:w-2/6 md:w-1/2 bg-gray-800 bg-opacity-50 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
          
            <h2 className="text-white text-lg font-medium title-font mb-5">
              Book Your Call
            </h2>
            <form ref={formRef} onSubmit={handleSubmit} name="google-sheet">
            <div className="relative mb-4">

              <label
                htmlFor='name'
                className="leading-7 text-sm text-gray-400"
              >
                Full Name
              </label>
              <input
                type="text"
                id='name'
                name="name"
                placeholder="Enter Your Name"
                autoComplete="off"
                required
                className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
              htmlFor='name'
                className="leading-7 text-sm text-gray-400"
              >
                Company Name
              </label>
              <input
                type="text"
                
                name="company"
                placeholder="Your Business Title"
                autoComplete="off"
                required
                className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label  htmlFor='name' className="leading-7 text-sm text-gray-400">
                Contact Number
              </label>
              <input
                type="number"
                
                name="number"
                placeholder="Your Mobile Number"
                
                autoComplete="off"
                required
                className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <button  className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            <input type="submit" value={loading ? "Booked Successfully!" : "SUBMIT"} />
            </button>
            </form>
            <p className="text-xs mt-3">
              We Will Connect You Within Next 6 Working Hours.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactForm
