import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const formRef = useRef();
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_31xn5z8",     // ✅ Your Service ID
        "template_dg5ifmc",    // ✅ Your Template ID
        formRef.current,
        "pXo978bsqd4TvhnlI"    // ✅ Your Public Key
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          setStatus("Message sent successfully!");
          formRef.current.reset(); // Reset form
        },
        (error) => {
          console.error("FAILED...", error.text);
          setStatus("Message failed to send. Please try again.");
        }
      );
  };

  return (
    <section id="contact" className="max-w-7xl mx-auto px-6 py-16">
      <div className="text-center max-w-2xl mx-auto">
        <p className="text-xl font-semibold text-[#a9ad8f] tracking-widest mb-2 uppercase">
         Let’s Connect
        </p>
        <p className="text-gray-500 text-center">
          Open to new challenges, collaborations, and conversations.
        </p>
      </div>

      <div className="mt-12 bg-[#f7f9fa] rounded-md max-w-6xl mx-auto p-8 grid grid-cols-1 md:grid-cols-3 gap-10">
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
              className="border border-[#a9ad8f] rounded-md px-4 py-3 w-full md:w-1/2 text-gray-600 placeholder-gray-600 focus:outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="border border-[#a9ad8f] rounded-md px-4 py-3 w-full md:w-1/2 text-gray-600 placeholder-gray-600 focus:outline-none"
            />
          </div>
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
            className="border border-[#a9ad8f] rounded-md px-4 py-3 w-full text-gray-600 placeholder-gray-600 focus:outline-none"
          />
          <textarea
            name="message"
            rows="6"
            placeholder="Message"
            required
            className="border border-[#a9ad8f] rounded-md px-4 py-3 w-full text-gray-600 placeholder-gray-600 focus:outline-none resize-none"
          ></textarea>
          <button
            type="submit"
            className="bg-[#bcc775] text-white font-semibold px-6 py-3 rounded-md shadow-lg hover:shadow-xl transition-shadow duration-500 cursor-pointer"
          >
            Send Message
          </button>
          {status && <p className="text-sm text-green-600 mt-2">{status}</p>}
        </form>

        <div className="flex flex-col justify-center space-y-10">
          <ContactInfoItem
            title="Address:"
            text="Ekta Vihar New Delhi"
            textIconClass="fas fa-map-marker-alt"
          />
          <ContactInfoItem
            title="Phone:"
            text="+91 7379732360"
            textColor="text-[#a9ad8f]"
            textIconClass="fas fa-phone"
          />
          <ContactInfoItem
            title="Email:"
            text="krishnapal8181@gmail.com"
            textColor="text-[#a9ad8f]"
            textIconClass="fas fa-envelope"
          />
          <ContactInfoItem
            title="Website:"
            text="yoursite.com"
            textColor="text-[#a9ad8f]"
            textIconClass="fas fa-globe"
          />
        </div>
      </div>
    </section>
  );
};

const ContactInfoItem = ({
  title,
  text,
  textColor = "text-gray-700",
  textIconClass,
}) => (
  <div className={`flex items-start gap-4 ${textColor}`}>
    <i className={`${textIconClass} mt-1 text-[#a9ad8f]`}></i>
    <div>
      <p className="font-semibold text-black">{title}</p>
      <p>{text}</p>
    </div>
  </div>
);

export default Contact;
