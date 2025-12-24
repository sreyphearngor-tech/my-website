import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTelegramPlane,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-white py-14 px-6 mt-16">
      {/* Main Grid */}
      <div
        className="max-w-6xl mx-auto grid 
        grid-cols-4
        sm:grid-cols-4
        lg:grid-cols-4 
        gap-10"
      >
        {/* Brand Section */}
        <div>
          <img
            src="https://i.pinimg.com/1200x/12/97/4f/12974f545d0d7184cc9697f07e6dec0e.jpg"
            alt="logo"
            className="w-32 h-32 object-cover rounded-lg shadow-md"
          />

          <p className="mt-4 text-gray-400 text-sm leading-relaxed">
            But I must explain to you all this mistaken idea of denouncing
            pleasure and praising pain.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-5 text-lg">
            <a
              href="https://www.facebook.com/share/16mjvxVAG7/?mibextid=wwXIfr"
              className="hover:text-blue-500 transition-transform transform hover:scale-110"
            >
              <FaFacebookF />
            </a>

            <a
              href="#"
              className="hover:text-pink-400 transition-transform transform hover:scale-110"
            >
              <FaInstagram />
            </a>

            <a
              href="#"
              className="hover:text-blue-400 transition-transform transform hover:scale-110"
            >
              <FaTelegramPlane />
            </a>

            <a
              href="#"
              className="hover:text-green-400 transition-transform transform hover:scale-110"
            >
              <FaMapMarkerAlt />
            </a>
          </div>
        </div>

        {/* Section Template */}
        <FooterSection
          title="Get to Know Us"
          items={[
            "Careers",
            "Blog",
            "About Clothes",
            "Investor Relations",
            "Brand Protection",
            "Feedback",
          ]}
        />

        <FooterSection
          title="Customer Service"
          items={[
            "Shipping Info",
            "Return & Refund Policy",
            "Payment Method",
            "Size Guide",
            "Loyalty Program",
            "Gift Cards",
          ]}
        />

        <FooterSection
          title="Information"
          items={[
            "Contact Us",
            "About Us",
            "Privacy Policy",
            "Terms & Conditions",
            "Where To Buy",
            "Help",
          ]}
        />
      </div>

      {/* Bottom Text */}
      <p className="text-center text-gray-500 text-sm mt-12 border-t border-gray-700 pt-6">
        © {new Date().getFullYear()} Clothing Store — All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;

// Component for Repeated Footer Sections
const FooterSection = ({ title, items }) => {
  return (
    <div>
      <h6 className="text-lg font-semibold mb-4">{title}</h6>
      <ul className="space-y-2 text-gray-400">
        {items.map((item, index) => (
          <li key={index}>
            <a
              href="#"
              className="hover:text-white transition duration-150 hover:underline"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
