import { useState, useEffect } from "react";

const Contact = () => {
  const [isMapLoaded, setIsMapLoaded] = useState(false);
  const [isFormLoaded, setIsFormLoaded] = useState(false);

  const handleMapLoad = () => {
    setIsMapLoaded(true);
  };

  useEffect(() => {
    setTimeout(() => {
      setIsFormLoaded(true);
    }, 2000);
  }, []);

  return (
    <section className="py-16 px-6 bg-gray-50">
      <h2 className="text-4xl font-semibold text-center text-gray-800 mb-12">
        Contact Us
      </h2>

      <div className="mb-12 max-w-full relative">
        {!isMapLoaded && (
          <div className="absolute inset-0 bg-gray-200 rounded-lg flex justify-center items-center z-10">
            <span className="text-gray-500 text-lg">Loading Map...</span>
          </div>
        )}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4285.610793189974!2d84.85212109196056!3d26.650872782914995!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39933733881dcadf%3A0x205f0af7725a632d!2sVirendra%20Singh%20fertilizer%20shop!5e1!3m2!1sen!2sin!4v1696680336721!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-lg shadow-md z-0"
          onLoad={handleMapLoad}
        ></iframe>
      </div>

      <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-lg">
        <form
          method="POST"
          action="https://formspree.io/f/xeqdgwnq"
          className="flex flex-col gap-6"
        >
          <div
            className={`${
              isFormLoaded ? "" : "animate-pulse bg-gray-300"
            } px-6 py-3 border border-gray-300 rounded-lg`}
          >
            {isFormLoaded ? (
              <input
                type="text"
                placeholder="Your Name"
                name="username"
                required
                autoComplete="off"
                className="w-full text-gray-800 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
            ) : (
              <div className="h-8 w-full bg-gray-400"></div>
            )}
          </div>

          <div
            className={`${
              isFormLoaded ? "" : "animate-pulse bg-gray-300"
            } px-6 py-3 border border-gray-300 rounded-lg`}
          >
            {isFormLoaded ? (
              <input
                type="email"
                name="Email"
                placeholder="Your Email"
                autoComplete="off"
                required
                className="w-full text-gray-800 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
            ) : (
              <div className="h-8 w-full bg-gray-400"></div>
            )}
          </div>

          <div
            className={`${
              isFormLoaded ? "" : "animate-pulse bg-gray-300"
            } px-6 py-3 border border-gray-300 rounded-lg`}
          >
            {isFormLoaded ? (
              <textarea
                name="Message"
                cols="30"
                rows="6"
                required
                autoComplete="off"
                placeholder="Your Message"
                className="w-full text-gray-800 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              ></textarea>
            ) : (
              <div className="h-24 w-full bg-gray-400"></div>
            )}
          </div>

          <div
            className={`${
              isFormLoaded ? "" : "animate-pulse bg-gray-300"
            } px-8 py-3 rounded-lg`}
          >
            {isFormLoaded ? (
              <input
                type="submit"
                value="Send Message"
                className="w-full bg-indigo-600 text-white font-semibold rounded-lg cursor-pointer hover:bg-indigo-700 transition-all duration-200"
              />
            ) : (
              <div className="h-12 w-full bg-gray-400"></div>
            )}
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
