import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const formRef = useRef();
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_31xn5z8", // ✅ Your Service ID
        "template_dg5ifmc", // ✅ Your Template ID
        formRef.current,
        "pXo978bsqd4TvhnlI" // ✅ Your Public Key
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          setStatus({ message: "Message sent successfully!", success: true });
          formRef.current.reset(); // Reset form
        },
        (error) => {
          console.error("FAILED...", error.text);
          setStatus({ message: "Message failed to send. Please try again.", success: false });
        }
      );
  };

  return (
    <section
      id="contact"
      className="max-w-7xl mx-auto px-6 py-16"
      style={{ animation: "fadeIn 0.8s ease forwards" }}
    >
      <div className="text-center max-w-2xl mx-auto mb-12">
        <p className="text-xl font-semibold text-[#a9ad8f] tracking-widest mb-2 uppercase">
          Let’s Connect
        </p>
        <p className="text-gray-600">
          Open to new challenges, collaborations, and conversations.
        </p>
      </div>

      <div className="bg-[#f7f9fa] rounded-lg max-w-6xl mx-auto p-8 grid grid-cols-1 md:grid-cols-3 gap-10 shadow-lg">
        <form
          ref={formRef}
          className="md:col-span-2 space-y-6"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="border border-[#a9ad8f] rounded-md px-4 py-3 w-full md:w-1/2 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition-shadow"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="border border-[#a9ad8f] rounded-md px-4 py-3 w-full md:w-1/2 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition-shadow"
            />
          </div>
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
            className="border border-[#a9ad8f] rounded-md px-4 py-3 w-full text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition-shadow"
          />
          <textarea
            name="message"
            rows="6"
            placeholder="Message"
            required
            className="border border-[#a9ad8f] rounded-md px-4 py-3 w-full text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition-shadow resize-none"
          ></textarea>
          <button
            type="submit"
            className="bg-[#bcc775] text-white font-semibold px-6 py-3 rounded-md shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105 cursor-pointer"
          >
            Send Message
          </button>
          {status && (
            <p
              className={`text-sm mt-2 ${
                status.success ? "text-green-600" : "text-red-600"
              } font-medium`}
            >
              {status.message}
            </p>
          )}
        </form>

        <div className="flex flex-col justify-center space-y-10 text-gray-700">
          <ContactInfoItem
            title="Address:"
            text="Ekta Vihar, New Delhi"
            textIconClass="fas fa-map-marker-alt"
          />
          <ContactInfoItem
            title="Phone:"
            text="+91 7379732360"
            textIconClass="fas fa-phone"
          />
          <ContactInfoItem
            title="Email:"
            text="krishnapal8181@gmail.com"
            textIconClass="fas fa-envelope"
          />
          <ContactInfoItem
            title="Website:"
            text="yoursite.com"
            textIconClass="fas fa-globe"
          />
        </div>
      </div>

      {/* Fade-in animation */}
      <style>{`
        @keyframes fadeIn {
          from {opacity: 0; transform: translateY(20px);}
          to {opacity: 1; transform: translateY(0);}
        }
      `}</style>
    </section>
  );
};

const ContactInfoItem = ({ title, text, textIconClass }) => (
  <div className="flex items-start gap-4">
    <i className={`${textIconClass} mt-1 text-[#a9ad8f] text-lg`}></i>
    <div>
      <p className="font-semibold text-gray-900">{title}</p>
      <p className="text-gray-700">{text}</p>
    </div>
  </div>
);

export default Contact;
